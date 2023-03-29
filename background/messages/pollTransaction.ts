import type { PlasmoMessaging } from "@plasmohq/messaging"
import { BigNumber, ethers } from "ethers";

import { pollUntilIndexed } from "~utils/indexer";

const handler: PlasmoMessaging.MessageHandler = async (_, res) => {
  
 const pollAndIndexPost = async (txHash: string, profileId: string) => {
  console.log(`: poll until indexed`);
  const indexedResult = await pollUntilIndexed({ txHash });

  console.log(`: profile has been indexed`);

  const logs = indexedResult.txReceipt!.logs;

  console.log(`: logs`, logs);

  const topicId = ethers.utils.id(
    "PostCreated(uint256,uint256,string,address,bytes,address,bytes,uint256)"
  );
  console.log("topicid we care about", topicId);

  const profileCreatedLog = logs.find((l: any) => l.topics[0] === topicId);
  console.log(`: created log`, profileCreatedLog);

  let profileCreatedEventLog = profileCreatedLog!.topics;
  console.log(`: created event logs`, profileCreatedEventLog);

  const publicationId = ethers.utils.defaultAbiCoder.decode(
    ["uint256"],
    profileCreatedEventLog[2]
  )[0];

  const contractPublicationId = BigNumber.from(publicationId).toHexString();

  const internalPublicationId = profileId + "-" + contractPublicationId;

  console.log(`: contract publication id`, contractPublicationId);
  console.log(`: internal publication id`, internalPublicationId);
  return internalPublicationId;
};
  const response = await chrome.tabs.query({ active: true, lastFocusedWindow: true })
  res.send({
    url: response[0].url
  })
}

export default handler
