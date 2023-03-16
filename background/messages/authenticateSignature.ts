import { gql } from "@apollo/client"

import type { PlasmoMessaging } from "@plasmohq/messaging"

import { AUTHENTICATE_USER } from "~graphql/authenticateUser.query"
import type { ChallengeAuthRequestProps } from "~types/ChallengeRequestProps.types"

import { apolloClient } from "../../apolloclient"

const handler: PlasmoMessaging.MessageHandler = async (
  req: ChallengeAuthRequestProps,
  res
) => {
  console.log(req)
  const response = await apolloClient.mutate({
    mutation: gql(AUTHENTICATE_USER),
    variables: {
      request: {
        address: req.body.address,
        signature: req.body.signature
      }
    }
  })
  console.log(response)
  res.send({
    accessToken: response.data.authenticate.accessToken,
    refreshToken: response.data.authenticate.refreshToken
  })
}

export default handler
