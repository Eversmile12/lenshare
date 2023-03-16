import { gql } from "@apollo/client"

import { apolloClient } from "~apolloclient"
import {
  getAddressFromSigner,
  getProvider,
  getSigner,
  getWindowProvider,
  splitSignature
} from "~handlers/walletHandler"

import { signedTypeData } from "./walletHandler"

export const createPostTypedData = async (request) => {
  const result = await apolloClient.mutate({
    mutation: gql``,
    variables: {
      request
    }
  })

  return result.data!.createPostTypedData
}

export const signCreatePostTypedData = async (request: any, provider) => {
  const result = await createPostTypedData(request)
  console.log("create post: createPostTypedData", result)

  const typedData = result.typedData
  console.log("create post: typedData", typedData)
  const signature = await signedTypeData(
    typedData.domain,
    typedData.types,
    typedData.value,
    provider
  )
  console.log("create post: signature", signature)

  return { result, signature }
}

export const post = async (request: any) => {
  const result = await createPostTypedData(request)
  console.log("create post: createPostTypedData", result)

  const windowProvider = getWindowProvider()
  const provider = getProvider(windowProvider)
  const signer = getSigner(provider)
  const address = getAddressFromSigner(signer)

  // upload on ipfs

  const createPostRequest = {
    profileId: "",
    contentURI: `ipfs://`,
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
      freeCollectModule: { followerOnly: true }
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
      followerOnlyReferenceModule: false
    }
  }
  const signedResult = await signCreatePostTypedData(
    createPostRequest,
    provider
  )
  console.log(`: signedResult`, signedResult)

  const typedData = signedResult.result.typedData

  const { v, r, s } = splitSignature(signedResult.signature)

  const tx = await lensHub.postWithSig({
    profileId: typedData.value.profileId,
    contentURI: typedData.value.contentURI,
    collectModule: typedData.value.collectModule,
    collectModuleInitData: typedData.value.collectModuleInitData,
    referenceModule: typedData.value.referenceModule,
    referenceModuleInitData: typedData.value.referenceModuleInitData,
    sig: {
      v,
      r,
      s,
      deadline: typedData.value.deadline
    }
  })
  console.log(`${prefix}: tx hash`, tx.hash)

  await pollAndIndexPost(tx.hash, profileId, prefix)
}
