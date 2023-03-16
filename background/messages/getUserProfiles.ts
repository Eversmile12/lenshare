import { gql } from "@apollo/client"

import type { PlasmoMessaging } from "@plasmohq/messaging"

import {  USER_PROFILES } from "~graphql/getDefaultProfile.query"
import { storage } from "~handlers/storageHandler"

import { apolloClient } from "../../apolloclient"

const handler: PlasmoMessaging.MessageHandler = async (_, res) => {
  const address = await storage.retrieve("address")
  const token = await storage.retrieve("accessToken")
  if (!address)
    res.send({
      message: "No profiles found for the given address",
      success: false
    })


  const response = await apolloClient.query({
    query: gql(USER_PROFILES),
    variables: {
      request: {
        ownedBy: address
      }
    },
    // context: {
    //   headers: {
    //     "x-access-token": `Bearer ${token}`
    //   }
    // }
  })
  res.send({
    profiles: response.data.profiles.items
  })
}

export default handler
