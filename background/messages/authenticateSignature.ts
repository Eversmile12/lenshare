import type { PlasmoMessaging } from "@plasmohq/messaging";
import type {
  AuthenticateMutation,
  AuthenticateMutationVariables,
} from "~.graphql/generated";
import * as M_AUTHENTICATE from "../../graphql/AuthenticateUser.gql";
import type { ChallengeAuthRequestProps } from "~types/ChallengeRequestProps.types";

import { lensClient } from "../../lensClient";
import { gql } from "@apollo/client";

const handler: PlasmoMessaging.MessageHandler = async (
  req: ChallengeAuthRequestProps,
  res
) => {
  const { address, signature } = req.body;
  const response = await lensClient.mutate<
    AuthenticateMutation,
    AuthenticateMutationVariables
  >({
    mutation: gql`
      ${M_AUTHENTICATE}
    `,
    variables: {
      request: {
        address,
        signature,
      },
    },
  });
  // request: { address: address, signature: signature },
  res.send({
    accessToken: response.data.authenticate.accessToken,
    refreshToken: response.data.authenticate.refreshToken,
  });
};

export default handler;
