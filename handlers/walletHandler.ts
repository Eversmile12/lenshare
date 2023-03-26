import { TypedDataDomain, ethers } from "ethers";
import { sendToBackgroundViaRelay } from "@plasmohq/messaging";
import { omit } from "~utils/helpers";
import { LensHandler } from "~utils/lensHub";

export class WalletHandler {
  private walletProvider;
  private provider;

  constructor() {
    console.log(window.ethereum);
    this.walletProvider = window.web3.currentProvider;
    this.provider = new ethers.providers.Web3Provider(
      this.walletProvider,
      "any"
    );
  }

  public getWindowProvider = () => {
    return this.walletProvider;
  };
  public getProvider = () => {
    return this.provider;
  };
  public getAddress = async () => {
    const address = await sendToBackgroundViaRelay({
      name: "storageGet",
      body: {
        id: "address",
      },
    }).then((data) => data.response);
    return address;
  };

  public getSigner = async () => {
    const signer = await this.provider.getSigner();
    return signer;
  };

  async login() {
    await sendToBackgroundViaRelay({
      name: "storageSet",
      body: {
        id: "wantsLogin",
        data: false,
      },
    });
    const { isConnected } = await sendToBackgroundViaRelay({
      name: "verifyOrRefreshTokens",
    });
    console.log("user is connected", isConnected);
    if (isConnected) return;
    try {
      await this.provider.send("eth_requestAccounts", []);
      const address = await this.setAddress();

      const { profiles } = await sendToBackgroundViaRelay({
        name: "getUserProfiles",
      });
      // add no profiles messaging
      console.log("profiles", profiles);
      if (!profiles.length) {
        console.log("no profiles found");
        return;
      }
      console.log("getting challenge");
      const { challenge } = await sendToBackgroundViaRelay({
        name: "getChallenge",
        body: {
          address: address,
        },
      });
      console.log("CHALLENGE_GET", challenge);

      const signature = await this.signChallenge(challenge);
      console.log("SIGNATURE_GET", signature);

      const { accessToken, refreshToken } = await sendToBackgroundViaRelay({
        name: "authenticateSignature",
        body: {
          address: address,
          signature: signature,
        },
      });
      console.log("ACCESS_TOKEN", accessToken);
      console.log("REFRESH_TOKEN", refreshToken);
      this.storeTokens(accessToken, refreshToken);
      await sendToBackgroundViaRelay({
        name: "storageSet",
        body: {
          id: "isLogin",
          data: true,
        },
      });
      await sendToBackgroundViaRelay({
        name: "storageSet",
        body: {
          id: "userId",
          data: profiles[0].id,
        },
      });
      await sendToBackgroundViaRelay({
        name: "storageSet",
        body: {
          id: "isDispatcher",
          data: profiles[0].dispatcher.canUseRelay,
        },
      });
      await sendToBackgroundViaRelay({
        name: "reloadWindow",
      });
    } catch (e) {
      return;
    }
  }

  async logout() {
    this.storeTokens(null, null);
    await sendToBackgroundViaRelay({
      name: "storageSet",
      body: {
        id: "address",
        data: null,
      },
    });
    await sendToBackgroundViaRelay({
      name: "storageSet",
      body: {
        id: "isLogin",
        data: false,
      },
    });
  }
  private async storeTokens(accessToken, refreshToken) {
    await sendToBackgroundViaRelay({
      name: "storageSet",
      body: {
        id: "accessToken",
        data: accessToken,
      },
    });
    await sendToBackgroundViaRelay({
      name: "storageSet",
      body: {
        id: "refreshToken",
        data: refreshToken,
      },
    });
  }

  private async setAddress() {
    try {
      const signer = await this.getSigner();
      const signerAddress = await signer.getAddress();
      await sendToBackgroundViaRelay({
        name: "storageSet",
        body: {
          id: "address",
          data: signerAddress,
        },
      });
      return signerAddress;
    } catch (e) {
      console.log(e);
      return;
    }
  }
  public switchChainToPolygon = (provider, windowProvider) => {
    if (provider !== "undefined") {
    }
    this.walletProvider
      .request({
        method: "wallet_switchEthereumChain",
        params: [{ chainId: "0x89" }],
      })
      .then()
      .catch((error) => {
        if (error.code === 4902) {
          console.log("Polygon Chain hasnt been added to the wallet!");
        }
      });
  };

  signChallenge = async (challenge) => {
    const signer = await this.provider.getSigner();
    console.log(await signer.getAddress());
    try {
      const signature = signer.signMessage(ethers.utils.toUtf8Bytes(challenge));
      return signature;
    } catch (e) {}

    return;
  };

  signTypeData = async (
    domain: TypedDataDomain,
    types: Record<string, any>,
    value: Record<string, any>
  ) => {
    const signer = await this.getSigner();
    // remove the __typedname from the signature!
    return signer._signTypedData(
      omit(domain, "__typename"),
      omit(types, "__typename"),
      omit(value, "__typename")
    );
  };

  splitSignature = (signature: string) => {
    return ethers.utils.splitSignature(signature);
  };

  signPostData = async (postData) => {
    const signature = await this.signTypeData(
      postData.typedData.domain,
      postData.typedData.types,
      postData.typedData.value
    );

    const { v, r, s } = this.splitSignature(signature);
    const lensHandler = new LensHandler();
    const lensHub = await lensHandler.initializeSmartContract();

    const tx = await lensHub.postWithSig({
      profileId: postData.typedData.value.profileId,
      contentURI: postData.typedData.value.contentURI,
      collectModule: postData.typedData.value.collectModule,
      collectModuleInitData: postData.typedData.value.collectModuleInitData,
      referenceModule: postData.typedData.value.referenceModule,
      referenceModuleInitData: postData.typedData.value.referenceModuleInitData,
      sig: {
        v,
        r,
        s,
        deadline: postData.typedData.value.deadline,
      },
    });

    return tx;
  };
}
