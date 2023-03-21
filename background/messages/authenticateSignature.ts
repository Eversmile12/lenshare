import type { PlasmoMessaging } from "@plasmohq/messaging";
import type {
  AuthenticateMutation,
  AuthenticateMutationVariables,
} from "~.graphql/generated";
import * as M_AUTHENTICATE from "../../graphql/AuthenticateUser.gql";
import type { ChallengeAuthRequestProps } from "~types/ChallengeRequestProps.types";

import { lensClient } from "../../handlers/lensClient";
import { gql } from "@apollo/client";

const handler: PlasmoMessaging.MessageHandler = async (
  req: ChallengeAuthRequestProps,
  res
) => {
  const { address, signature } = req.body;
  res.send({
    ...(await lensClient.authenticateSignature(address, signature)),
  });
};

export default handler;
