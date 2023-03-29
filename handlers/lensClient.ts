import {
  ApolloClient,
  gql,
  InMemoryCache,
  NormalizedCacheObject,
} from "@apollo/client";
import type {
  AuthenticateMutation,
  AuthenticateMutationVariables,
  ChallengeQuery,
  ChallengeQueryVariables,
  CreatePostTypedDataMutation,
  CreatePostTypedDataMutationVariables,
  CreatePublicPostRequest,
  NotificationRequest,
  NotificationsQuery,
  NotificationsQueryVariables,
  ProfilesQuery,
  ProfilesQueryVariables,
  RefreshMutation,
  RefreshMutationVariables,
  VerifyQuery,
  VerifyQueryVariables,
} from "../.graphql/generated";
import * as M_CREATE_POST_TYPED_DATA from "../graphql/CreatePostTypedData.gql";

import * as M_AUTHENTICATE from "../graphql/AuthenticateUser.gql";
import * as M_REFRESH_TOKENS from "../graphql/RefreshTokens.gql";
import * as Q_CHALLENGE from "../graphql/ChallengeRequest.gql";
import * as Q_VERIFY_REFRESH_TOKEN from "../graphql/VerifyAuthToken.gql";
import * as Q_PROFILES from "../graphql/GetDefaultProfile.gql";
import * as Q_NOTIFICATIONS from "../graphql/NotificationsRequest.gql";

export class LensClient {
  client: ApolloClient<NormalizedCacheObject>;
  constructor() {
    const APIURL = "https://api.lens.dev/";
    this.client = new ApolloClient({ uri: APIURL, cache: new InMemoryCache() });
  }

  async getChallenge(address) {
    const response = await this.client.query<
      ChallengeQuery,
      ChallengeQueryVariables
    >({
      query: gql`
        ${Q_CHALLENGE}
      `,
      variables: {
        request: {
          address,
        },
      },
    });
    return {
      challenge: response.data.challenge.text,
    };
  }

  async verify(accessToken) {
    console.log("VERIFY ACCESS TOKEN", accessToken);
    const response = await this.client.mutate<
      VerifyQuery,
      VerifyQueryVariables
    >({
      mutation: gql`
        ${Q_VERIFY_REFRESH_TOKEN}
      `,
      variables: {
        request: {
          accessToken,
        },
      },
    });
    return {
      verify: response.data.verify,
    };
  }

  async authenticateSignature(address, signature) {
    console.log(address, signature);

    const response = await this.client.mutate<
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

    return {
      accessToken: response.data.authenticate.accessToken,
      refreshToken: response.data.authenticate.refreshToken,
    };
  }
  async refresh(refreshToken) {
    const { data } = await this.client.query<
      RefreshMutation,
      RefreshMutationVariables
    >({
      query: gql`
        ${M_REFRESH_TOKENS}
      `,
      variables: {
        request: {
          refreshToken: refreshToken,
        },
      },
    });

    return {
      accessToken: data.refresh.accessToken,
      refreshToken: data.refresh.refreshToken,
    };
  }

  async profiles(address) {
    console.log(address);
    const response = await this.client.query<
      ProfilesQuery,
      ProfilesQueryVariables
    >({
      query: gql`
        ${Q_PROFILES}
      `,
      variables: {
        request: {
          ownedBy: [address],
        },
      },
    });

    return {
      profiles: response.data.profiles.items,
    };
  }

  async createTypedPostData(
    postRequest: CreatePublicPostRequest,
    accessToken: string
  ) {
    const result = await this.client.mutate<
      CreatePostTypedDataMutation,
      CreatePostTypedDataMutationVariables
    >({
      mutation: gql`
        ${M_CREATE_POST_TYPED_DATA}
      `,
      variables: {
        request: postRequest,
      },
      context: {
        headers: {
          "x-access-token": `Bearer ${accessToken}`,
        },
      },
    });

    return result.data.createPostTypedData;
  }

  async getNotifications(profileId: string, accessToken, cursor?) {
    const result = await this.client.mutate<
      NotificationsQuery,
      NotificationsQueryVariables
    >({
      mutation: gql`
        ${Q_NOTIFICATIONS}
      `,
      variables: {
        request: {
          profileId,
          cursor,
        },
      },
      context: {
        headers: {
          "x-access-token": `Bearer ${accessToken}`,
        },
      },
    });
    return {
      cursor: result.data.notifications.pageInfo.prev,
      notifications: result.data.notifications.items,
    };
  }

  // async postGasless(profileId) {
  //   if()
  // }
}

export const lensClient = new LensClient();
