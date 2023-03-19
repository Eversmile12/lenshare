import type { PlasmoMessaging } from "@plasmohq/messaging";
import type {
  ChallengeQuery,
  ChallengeQueryVariables,
} from "~.graphql/generated";
import type { ChallengeRequestProps } from "~types/ChallengeRequestProps.types";
import { lensClient } from "../../lensClient";
import { gql } from "@apollo/client";

import * as CHALLENGE_QUERY from "../../graphql/ChallengeRequest.gql";

const handler: PlasmoMessaging.MessageHandler = async (
  req: ChallengeRequestProps,
  res
) => {
  const { address } = req.body;
  console.log("requesting challenge fore", address);
  const response = await lensClient.query<
    ChallengeQuery,
    ChallengeQueryVariables
  >({
    query: gql`
      ${CHALLENGE_QUERY}
    `,
    variables: {
      request: {
        address,
      },
    },
  });
  res.send({
    challenge: response.data.challenge.text,
  });
};

export default handler;
