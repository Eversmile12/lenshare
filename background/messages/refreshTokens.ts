import { gql } from "@apollo/client"

import type { PlasmoMessaging } from "@plasmohq/messaging"

import type { ChallengeAuthRequestProps } from "~types/ChallengeRequestProps.types"

import { apolloClient } from "../../apolloclient"
import { REFRESH_TOKENS } from "~graphql/refreshTokens.query"
const handler: PlasmoMessaging.MessageHandler = async (
  req,
  res
) => {
  const response = await apolloClient.mutate({
    mutation: gql(REFRESH_TOKENS),
    variables: {
      request: {
        refreshToken: req.body.refreshToken
      }
    }
  })
  res.send({
    newAccessToken: response.data.refresh.accessToken,
    newRefreshToken: response.data.refresh.refreshToken
  })
}

export default handler
