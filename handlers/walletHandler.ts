import { TypedDataDomain, ethers } from "ethers";
import { sendToBackgroundViaRelay } from "@plasmohq/messaging";
import { omit } from "~utils/helpers";
import { LensHandler } from "~utils/lensHub";

export class WalletHandler {
  private walletProvider;
  private provider;

  constructor() {
    this.walletProvider = window.web3.currentProvider;
    if (this.walletProvider) {
      this.provider = new ethers.providers.Web3Provider(
        this.walletProvider,
        "any"
      );
    }
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

  async loginAndInitSettings() {
    await sendToBackgroundViaRelay({
      name: "flushUnnecessaryStorage",
    });
    const { accessToken, refreshToken, address, profile } = await this.login();
    this.initAccountSettings(accessToken, refreshToken, address, profile);
    const isApplicationSettingsStored = await sendToBackgroundViaRelay({
      name: "storageGet",
      body: {
        id: "isApplicationSettingsStored",
      },
    }).then((data) => data.response);
    if (!isApplicationSettingsStored) {
      this.initApplicationSettings();
    }
    await sendToBackgroundViaRelay({
      name: "reloadWindow",
    });
  }

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
    // add settings
    try {
      await this.provider.send("eth_requestAccounts", []);
      const address = await this.getSignerAddress();

      const { profiles } = await sendToBackgroundViaRelay({
        name: "getUserProfiles",
        body: {
          address: address,
        },
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
      return { accessToken, refreshToken, address, profile: profiles[0] };
    } catch (e) {
      return;
    }
  }

  async logout() {
    this.initAccountSettings(null, null, null, null);
  }

  private async initApplicationSettings() {
    await sendToBackgroundViaRelay({
      name: "storageSet",
      body: {
        id: "isEveryoneCanCollect",
        data: true,
        area: "local",
      },
    });
    await sendToBackgroundViaRelay({
      name: "storageSet",
      body: {
        id: "isLoginOnLoad",
        data: true,
        area: "local",
      },
    });
    await sendToBackgroundViaRelay({
      name: "storageSet",
      body: {
        id: "isNewReactionNotification",
        data: true,
        area: "local",
      },
    });
    await sendToBackgroundViaRelay({
      name: "storageSet",
      body: {
        id: "isNewFollowerNotification",
        data: true,
        area: "local",
      },
    });
    await sendToBackgroundViaRelay({
      name: "storageSet",
      body: {
        id: "isNewMirrorNotification",
        data: true,
        area: "local",
      },
    });
    await sendToBackgroundViaRelay({
      name: "storageSet",
      body: {
        id: "isNewCollectNotification",
        data: true,
        area: "local",
      },
    });
    await sendToBackgroundViaRelay({
      name: "storageSet",
      body: {
        id: "isNewCommentNotification",
        data: true,
        area: "local",
      },
    });
    await sendToBackgroundViaRelay({
      name: "storageSet",
      body: {
        id: "isNewMentionNotification",
        data: true,
        area: "local",
      },
    });
    await sendToBackgroundViaRelay({
      name: "storageSet",
      body: {
        id: "isNewReactionNotification",
        data: true,
        area: "local",
      },
    });
    await sendToBackgroundViaRelay({
      name: "storageSet",
      body: {
        id: "isApplicationSettingsStored",
        data: true,
        area: "local",
      },
    });
  }

  private async initAccountSettings(
    accessToken,
    refreshToken,
    address,
    profile
  ) {
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
    // await sendToBackgroundViaRelay({
    //   name: "storageSet",
    //   body: {
    //     id: "isDirectBridge",
    //     data: profile.dispatcher.canUseRelay,
    //   },
    // });
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
        data: profile?.id,
      },
    });
    await sendToBackgroundViaRelay({
      name: "storageSet",
      body: {
        id: "address",
        data: address,
      },
    });
    await sendToBackgroundViaRelay({
      name: "storageSet",
      body: {
        id: "isUseDispatcher",
        data: profile?.dispatcher.canUseRelay
          ? profile?.dispatcher.canUseRelay
          : false,
        area: "local",
      },
    });
  }

  private async getSignerAddress() {
    try {
      const signer = await this.getSigner();
      const signerAddress = await signer.getAddress();
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
