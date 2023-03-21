import { lensClient } from "~handlers/lensClient";
import { WalletHandler } from "./walletHandler";
import { storage } from "./storageHandler";

export const createPostTypedData = async (postRequest) => {
  const accessToken = await storage.retrieve("accessToken");

  const result = await lensClient.createTypedPostData(postRequest, accessToken);

  return result;
};

export const createPost = async (fileHash, profileId) => {
  if (!profileId) console.log("error: no profile id");
  const postRequest = createPostRequest(fileHash, profileId);
  const postTypedData = await createPostTypedData(postRequest);
  console.log("create post: createPostRequest", postRequest);
  console.log("create post: createPostTypedData", postTypedData);
  await storage.store("postTypedData", postTypedData);
  await storage.store("isPosting", true);
};

const createPostRequest = (contentHash: string, profileId: string) => {
  const postRequest = {
    profileId,
    contentURI: `ipfs://${contentHash}`,
    collectModule: {
      // feeCollectModule: {
      //   amount: {
      //     currency: currencies.enabledModuleCurrencies.map(
      //       (c: any) => c.address
      //     )[0],
      //     value: '0.000001',
      //   },
      //   recipient: address,
      //   referralFee: 10.5,
      // },
      // revertCollectModule: true,
      freeCollectModule: { followerOnly: true },
      // limitedFeeCollectModule: {
      //   amount: {
      //     currency: '0x9c3C9283D3e44854697Cd22D3Faa240Cfb032889',
      //     value: '2',
      //   },
      //   collectLimit: '20000',
      //   recipient: '0x3A5bd1E37b099aE3386D13947b6a90d97675e5e3',
      //   referralFee: 0,
      // },
      // multirecipientFeeCollectModule: {
      //   amount: {
      //     currency: '0x9c3C9283D3e44854697Cd22D3Faa240Cfb032889',
      //     value: '0.001',
      //   },
      //   collectLimit: '2',
      //   endTimestamp: '2025-01-01T00:00:00.000Z',
      //   referralFee: 0,
      //   followerOnly: false,
      //   recipients: [
      //     {
      //       recipient: address,
      //       split: 50,
      //     },
      //     {
      //       recipient: '0xacab2c2Cdde3a5839b91BABEfFd5fd5128590d6f',
      //       split: 50,
      //     },
      //   ],
      // },
      // aaveFeeCollectModule: {
      //   amount: {
      //     currency: '0x9c3C9283D3e44854697Cd22D3Faa240Cfb032889',
      //     value: '0.001',
      //   },
      //   collectLimit: '2',
      //   endTimestamp: '2025-01-01T00:00:00.000Z',
      //   referralFee: 0,
      //   followerOnly: false,
      //   recipient: address,
      // },
      // erc4626FeeCollectModule: {
      //   amount: {
      //     currency: '0x9c3C9283D3e44854697Cd22D3Faa240Cfb032889',
      //     value: '0.001',
      //   },
      //   collectLimit: '2',
      //   endTimestamp: '2025-01-01T00:00:00.000Z',
      //   referralFee: 0,
      //   followerOnly: false,
      //   recipient: address,
      //   vault: '0x3A5bd1E37b099aE3386D13947b6a90d97675e5e3', // MUST BE VALID ERC4626 VAULT
      // },
    },
    referenceModule: {
      followerOnlyReferenceModule: false,
    },
  };

  return postRequest;
};
