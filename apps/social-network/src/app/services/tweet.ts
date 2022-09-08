import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { baseTweet } from '@client/utils/consts';
import {
  TweetCreate,
  TweetFind,
  TweetRemove,
  TweetUpdate,
} from '@social-network/contracts';

export const tweetApi = createApi({
  reducerPath: 'tweetApi',
  baseQuery: fetchBaseQuery({ baseUrl: baseTweet }),
  endpoints: (build) => ({
    createTweet: build.query<TweetCreate.Response, TweetCreate.Request>({
      query: (body) => ({
        method: 'POST',
        url: '/create',
        body,
      }),
    }),
    updateTweet: build.mutation<TweetUpdate.Response, TweetUpdate.Request>({
      query: (body) => ({
        method: 'POST',
        url: '/update',
        body,
      }),
    }),
    removeTweet: build.mutation<TweetRemove.Response, TweetRemove.Request>({
      query: (body) => ({
        method: 'POST',
        url: '/remove',
        body,
      }),
    }),
    findTweet: build.query<TweetFind.Response, TweetFind.Request>({
      query: ({ user }) => ({
        method: 'GET',
        url: '/' + user,
      }),
    }),
  }),
});

export const { useLazyCreateTweetQuery, useLazyFindTweetQuery } = tweetApi;
