import { gql } from "@apollo/client"

import type { PlasmoMessaging } from "@plasmohq/messaging"

import type { ChallengeRequestProps } from "~types/ChallengeRequestProps.types"

import { apolloClient } from "../../apolloclient"
import { CHALLENGE_REQUEST } from "../../graphql/challengeRequest.query"

const handler: PlasmoMessaging.MessageHandler = async (
  req: ChallengeRequestProps,
  res
) => {
  const response = await apolloClient.query({
    query: gql(CHALLENGE_REQUEST),
    variables: {
      request: {
        address: req.body.address
      }
    }
  })

  res.send({
    challenge: response.data.challenge.text
  })
}

export default handler
