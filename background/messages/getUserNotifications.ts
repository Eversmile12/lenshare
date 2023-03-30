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
  console.log("Stored Notifications:");

  console.log(JSON.parse(storedNotifications));
  const { notifications, cursor } = await lensClient.getNotifications(
    profileId,
    accessToken
  );
  console.log("New Notifications:");
  console.log(notifications);

  if (storedNotifications && notifications?.length) {
    let difference = notifications.filter(
      ({ notificationId: id1 }) =>
        !JSON.parse(storedNotifications).some(
          ({ notificationId: id2 }) => id2 === id1
        )
    );

    if (difference?.length) {
      AppStorage.store(
        "notifications",
        JSON.stringify([...difference, ...JSON.parse(storedNotifications)]),
        "local"
      );
      console.log("Difference");
      console.log(difference);
      chrome.action.setBadgeText({ text: difference?.length.toString() });
      AppStorage.store("isNotificationsSeen", false);
    }
  } else if (notifications?.length) {
    AppStorage.store("notifications", JSON.stringify(notifications), "local");
    AppStorage.store("isNotificationsSeen", false);
  }

  if (cursor) {
    const storedCursor = AppStorage.retrieve("notificationsCursor");
    if (storedCursor !== cursor) {
      AppStorage.store("notificationsCursor", cursor, "local");
    }
  }

  res.send({ message: "success" });
};

export default handler;
