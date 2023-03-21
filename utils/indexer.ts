import { gql } from "@apollo/client";
import { lensClient } from "../handlers/lensClient";

const hasTxBeenIndexed = async (request) => {
  const result = await lensClient.HasTxHashBeenIndexed({ request });

  return result.hasTxHashBeenIndexed;
};

export const pollUntilIndexed = async (
  input: { txHash: string } | { txId: string }
) => {
  while (true) {
    const response = await hasTxBeenIndexed(input);
    console.log("pool until indexed: result", response);

    if (response.__typename === "TransactionIndexedResult") {
      if (response.metadataStatus) {
        if (response.metadataStatus.status === "SUCCESS") {
          return response;
        }

        if (response.metadataStatus.status === "METADATA_VALIDATION_FAILED") {
          throw new Error(response.metadataStatus.status);
        }
      } else {
        if (response.indexed) {
          return response;
        }
      }
      console.log(
        "pool until indexed: sleep for 1500 milliseconds then try again"
      );
      // sleep for a second before trying again
      await new Promise((resolve) => setTimeout(resolve, 500));
    } else {
      // it got reverted and failed!
      throw new Error(response.reason);
    }
  }
};
