import type { PlasmoMessaging } from "@plasmohq/messaging";
import { AppStorage } from "~handlers/storageHandler";
import type { ChallengeRequestProps } from "~types/ChallengeRequestProps.types";
import { lensClient } from "../../handlers/lensClient";
const handler: PlasmoMessaging.MessageHandler = async (
  req: ChallengeRequestProps,
  res
) => {
  const profileId = await AppStorage.retrieve("userId");
  const accessToken = await AppStorage.retrieve("accessToken");
  const notificationsSeen = await AppStorage.retrieve("isNotificationsSeen");

  const storedNotifications = await AppStorage.retrieve(
    "notifications",
    "local"
  );
  const { notifications, cursor } = await lensClient.getNotifications(
    profileId,
    accessToken
  );
  let difference;
  if (storedNotifications) {
    difference = notifications.filter(
      ({ notificationId: id1 }) =>
        !JSON.parse(storedNotifications).some(
          ({ notificationId: id2 }) => id2 === id1
        )
    );
    console.log(difference);
  }
  AppStorage.store("notifications", JSON.stringify(notifications), "local");
  if (cursor) {
    console.log("cursor found", cursor);
    AppStorage.store("notificationsCursor", cursor, "local");
  }
  if (difference?.length) {
    chrome.action.setBadgeText({ text: difference?.length.toString() });

    AppStorage.store("isNotificationsSeen", false);
  }
};

export default handler;
