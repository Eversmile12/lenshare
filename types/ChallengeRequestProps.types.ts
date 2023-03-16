import type { PlasmoMessaging } from "@plasmohq/messaging"

export interface ChallengeRequestProps extends PlasmoMessaging.Request {
  address: String
}

export interface ChallengeAuthRequestProps extends PlasmoMessaging.Request {
  address: String
  signature: String
}
