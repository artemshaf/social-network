import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { baseProfile } from '@client/utils/consts';
import {
  AccountUserProfile,
  AccountUserUpdateProfile,
} from '@social-network/contracts';

export const profileApi = createApi({
  reducerPath: 'profileApi',
  baseQuery: fetchBaseQuery({ baseUrl: baseProfile }),
  tagTypes: ['profile'],
  endpoints: (build) => ({
    getProfile: build.query<
      AccountUserProfile.Response,
      AccountUserProfile.Request
    >({
      query: ({ id }) => ({
        method: 'GET',
        url: '/' + id,
      }),
      providesTags: ['profile'],
    }),
    updateProfile: build.mutation<
      AccountUserUpdateProfile.Response,
      AccountUserUpdateProfile.Request
    >({
      query: (body) => ({
        method: 'POST',
        url: '/profile',
        body,
      }),
      invalidatesTags: ['profile'],
    }),
  }),
});

export const { useGetProfileQuery, useUpdateProfileMutation } = profileApi;
