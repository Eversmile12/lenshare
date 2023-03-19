import { sendToBackgroundViaRelay } from "@plasmohq/messaging";
import { lensClient } from "~lensClient";
import { WalletHandler } from "./walletHandler";
import * as M_CREATE_POST_TYPED_DATA from "./graphql/CreatePostTypedData.gql";
import { gql } from "@apollo/client";
import type {
  CreatePostTypedDataMutation,
  CreatePostTypedDataMutationVariables,
} from "~.graphql/generated";

export const createPostTypedData = async (request) => {
  const accessToken = await sendToBackgroundViaRelay({
    name: "storageGet",
    body: {
      id: "accessToken",
    },
  }).then((data) => data.response);

  const result = await lensClient.mutate<
    CreatePostTypedDataMutation,
    CreatePostTypedDataMutationVariables
  >({
    mutation: gql`
      ${M_CREATE_POST_TYPED_DATA}
    `,
    variables: {
      request,
    },
    context: {
      headers: {
        "x-access-token": `Bearer ${accessToken}`,
      },
    },
  });

  return result.data.createPostTypedData;
};

export const createPost = async (fileHash, profileId) => {
  if (!profileId) console.log("error: no profile id");
  const postRequest = createPostRequest(fileHash, profileId);
  const postTypedData = await createPostTypedData(postRequest);
  console.log("create post: createPostRequest", postRequest);
  console.log("create post: createPostTypedData", postTypedData);
  const walletHandler = new WalletHandler();
  const tx = walletHandler.signPostData(postTypedData);
};

const createPostRequest = (contentHash: string, profileId: string) => {
  const createPostRequest = {
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

  return createPostRequest;
};
