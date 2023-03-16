// @ts-nocheck
globalThis.__plasmoInternalPortMap = new Map()

import { default as messagesAuthenticateSignature } from "~background/messages/authenticateSignature"
import { default as messagesGetChallenge } from "~background/messages/getChallenge"
import { default as messagesGetCurrentTab } from "~background/messages/getCurrentTab"
import { default as messagesGetTweet } from "~background/messages/getTweet"
import { default as messagesGetUserProfiles } from "~background/messages/getUserProfiles"
import { default as messagesRefreshTokens } from "~background/messages/refreshTokens"
import { default as messagesStorageGet } from "~background/messages/storageGet"
import { default as messagesStorageSet } from "~background/messages/storageSet"
import { default as messagesVerifyAuthToken } from "~background/messages/verifyAuthToken"
import { default as messagesWantsLogin } from "~background/messages/wantsLogin"

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  switch (request.name) {
    case "authenticateSignature":
  messagesAuthenticateSignature({
    sender,
    ...request
  }, {
    send: (p) => sendResponse(p)
  })
  break
case "getChallenge":
  messagesGetChallenge({
    sender,
    ...request
  }, {
    send: (p) => sendResponse(p)
  })
  break
case "getCurrentTab":
  messagesGetCurrentTab({
    sender,
    ...request
  }, {
    send: (p) => sendResponse(p)
  })
  break
case "getTweet":
  messagesGetTweet({
    sender,
    ...request
  }, {
    send: (p) => sendResponse(p)
  })
  break
case "getUserProfiles":
  messagesGetUserProfiles({
    sender,
    ...request
  }, {
    send: (p) => sendResponse(p)
  })
  break
case "refreshTokens":
  messagesRefreshTokens({
    sender,
    ...request
  }, {
    send: (p) => sendResponse(p)
  })
  break
case "storageGet":
  messagesStorageGet({
    sender,
    ...request
  }, {
    send: (p) => sendResponse(p)
  })
  break
case "storageSet":
  messagesStorageSet({
    sender,
    ...request
  }, {
    send: (p) => sendResponse(p)
  })
  break
case "verifyAuthToken":
  messagesVerifyAuthToken({
    sender,
    ...request
  }, {
    send: (p) => sendResponse(p)
  })
  break
case "wantsLogin":
  messagesWantsLogin({
    sender,
    ...request
  }, {
    send: (p) => sendResponse(p)
  })
  break
    default:
      break
  }

  return true
})

chrome.runtime.onConnect.addListener(function(port) {
  globalThis.__plasmoInternalPortMap.set(port.name, port)
  port.onMessage.addListener(function(request) {
    switch (port.name) {
      
      default:
        break
    }
  })
})

