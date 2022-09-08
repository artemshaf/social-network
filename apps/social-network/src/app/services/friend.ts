import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { baseFriend } from '@client/utils/consts';
import {
  FriendAdd,
  FriendDelete,
  FriendFriends,
} from '@social-network/contracts';

export const friendApi = createApi({
  reducerPath: 'friendApi',
  baseQuery: fetchBaseQuery({ baseUrl: baseFriend }),
  endpoints: (build) => ({
    getFriends: build.query<FriendFriends.Response, FriendFriends.Request>({
      query: ({ id }) => ({
        method: 'GET',
        url: '/' + id,
      }),
    }),
    addFriend: build.mutation<FriendAdd.Response, FriendAdd.Request>({
      query: (body) => ({
        method: 'POST',
        url: '/',
        body,
      }),
    }),
    deleteFriend: build.mutation<FriendDelete.Response, FriendDelete.Request>({
      query: (body) => ({
        method: 'POST',
        url: '/register',
        body,
      }),
    }),
  }),
});

export const { useLazyGetFriendsQuery, useGetFriendsQuery } = friendApi;
