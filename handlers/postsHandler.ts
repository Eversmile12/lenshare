import { lensClient } from "~handlers/lensClient";
import { AppStorage } from "./storageHandler";

export const createPostTypedData = async (postRequest) => {
  const accessToken = await AppStorage.retrieve("accessToken");

  const result = await lensClient.createTypedPostData(postRequest, accessToken);

  return result;
};

export const createPost = async (fileHash, profileId) => {
  if (!profileId) console.log("error: no profile id");
  const postRequest = createPostRequest(fileHash, profileId);
  const postTypedData = await createPostTypedData(postRequest);
  console.log("create post: createPostRequest", postRequest);
  console.log("create post: createPostTypedData", postTypedData);
  await AppStorage.store("postTypedData", postTypedData);
  await AppStorage.store("isPosting", true);
};

const createPostRequest = (contentHash: string, profileId: string) => {
  const postRequest = {
    profileId,
    contentURI: `ipfs://${contentHash}`,
    collectModule: {
      freeCollectModule: {
        followerOnly: true,
      },
      //   feeCollectModule: {
      //     amount: {
      //       currency: currencies.enabledModuleCurrencies.map(
      //         (c: any) => c.address
      //       )[0],
      //       value: '0.000001',
      //     },
      //     recipient: address,
      //     referralFee: 10.5,
      //   },
      //   revertCollectModule: true,
      //   freeCollectModule: { followerOnly: true },
    },
    referenceModule: {
      followerOnlyReferenceModule: false,
    },
  };

  return postRequest;
};
