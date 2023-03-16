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
  console.log(req)
  const response = await apolloClient.query({
    query: gql(VERIFY_TOKEN),
    variables: {
      request: {
        accessToken: req.body.accessToken
      }
    }
  })
  console.log(response)
  res.send({
    verify: response.data.verify
  })
}

export default handler
