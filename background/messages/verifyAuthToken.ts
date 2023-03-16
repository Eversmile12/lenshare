import { gql } from "@apollo/client"

import type { PlasmoMessaging } from "@plasmohq/messaging"

import { VERIFY_TOKEN } from "~graphql/verifyAuthToken.query"
import type { ChallengeAuthRequestProps } from "~types/ChallengeRequestProps.types"

import { apolloClient } from "../../apolloclient"
//add retries

const handler: PlasmoMessaging.MessageHandler = async (
  req: ChallengeAuthRequestProps,
  res
) => {
  const response = await apolloClient.query({
    query: gql(VERIFY_TOKEN),
    variables: {
      request: {
        accessToken: req.body.accessToken
      }
    }
  })
  res.send({
    verify: response.data.verify
  })
}

export default handler
