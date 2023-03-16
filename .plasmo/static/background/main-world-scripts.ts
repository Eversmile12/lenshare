import contentsLoginInject from "url:../../../contents/loginInject"
import contentsLoginInit from "url:../../../contents/loginInit"
import contentsMirror from "url:../../../contents/mirror"
import staticContentsWalletSockets from "url:../../static/contents/walletSockets"
chrome.scripting.registerContentScripts([
  {"id":"contentsLoginInject","js":[contentsLoginInject.split("/").pop().split("?")[0]],"matches":["<all_urls>"],"world":"MAIN"},
  {"id":"contentsLoginInit","js":[contentsLoginInit.split("/").pop().split("?")[0]],"matches":["https://twitter.com/*"],"allFrames":true,"world":"MAIN"},
  {"id":"contentsMirror","js":[contentsMirror.split("/").pop().split("?")[0]],"matches":["https://twitter.com/*"],"allFrames":true,"world":"MAIN"},
  {"id":"staticContentsWalletSockets","js":[staticContentsWalletSockets.split("/").pop().split("?")[0]],"matches":["<all_urls>"],"allFrames":true,"world":"MAIN"}
])
