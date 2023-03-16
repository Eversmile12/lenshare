import contentsMirror from "url:../../../contents/mirror"
import contentsLoginInit from "url:../../../contents/loginInit"
import staticContentsWalletSockets from "url:../../static/contents/walletSockets"
chrome.scripting.registerContentScripts([
  {"id":"contentsMirror","js":[contentsMirror.split("/").pop().split("?")[0]],"matches":["https://twitter.com/*"],"allFrames":true,"world":"MAIN"},
  {"id":"contentsLoginInit","js":[contentsLoginInit.split("/").pop().split("?")[0]],"matches":["https://twitter.com/*"],"allFrames":true,"world":"MAIN"},
  {"id":"staticContentsWalletSockets","js":[staticContentsWalletSockets.split("/").pop().split("?")[0]],"matches":["<all_urls>"],"allFrames":true,"world":"MAIN"}
])
