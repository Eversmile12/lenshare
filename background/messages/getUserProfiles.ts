import type { PlasmoMessaging } from "@plasmohq/messaging";
import type {
  ProfilesQuery,
  ProfilesQueryVariables,
} from "~.graphql/generated";
import { storage } from "~handlers/storageHandler";
import { lensClient } from "../../lensClient";
import * as PROFILES_QUERY from "../../graphql/GetDefaultProfile.gql";
import { gql } from "@apollo/client";

const handler: PlasmoMessaging.MessageHandler = async (_, res) => {
  const address = await storage.retrieve("address");

  if (!address) {
    res.send({
      message: "No profiles found for the given address",
      success: false,
    });
  }

  console.log("fetching profiles");

  const query = PROFILES_QUERY;
  
  const response = await lensClient.query<
    ProfilesQuery,
    ProfilesQueryVariables
  >({
    query: gql`
      ${query}
    `,
    variables: {
      request: {
        ownedBy: [address],
      },
    },
  });

  console.log(response);
  res.send({
    profiles: response.data.profiles.items,
  });
};

export default handler;
