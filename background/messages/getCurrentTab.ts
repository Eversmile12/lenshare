import type { PlasmoMessaging } from "@plasmohq/messaging"

const handler: PlasmoMessaging.MessageHandler = async (_, res) => {

  const response = await chrome.tabs.query({ active: true, lastFocusedWindow: true })
  res.send({
    url: response[0].url
  })
}

export default handler
