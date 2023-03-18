export const HAS_TRANSACTION_BEEN_INDEXED = `query($request:SignedAuthChallenge!) {
    hasTxHashBeenIndexed(request: $request) {
      ... on TransactionIndexedResult{
        metadataStatus{
          status
          reason
        }
      ... on TransactionError{
          reason
          txReceipt{
            to
            from
            contractAddress
            gasUsed
          }
      }
      }
    }
  }`;
