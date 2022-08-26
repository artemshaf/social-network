import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { baseAuth } from '@client/utils/consts';
import { IUser } from '@social-network/interfaces';
import {
  AccountAuthLogin,
  AccountAuthRegister,
} from '@social-network/contracts';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({ baseUrl: baseAuth }),
  endpoints: (build) => ({
    loginUser: build.query<IUser, AccountAuthLogin.Request>({
      query: (body) => ({
        method: 'POST',
        url: '/login',
        body,
      }),
    }),
    registerUser: build.query<IUser, AccountAuthRegister.Request>({
      query: (body) => ({
        url: '/register',
        body,
      }),
    }),
  }),
});

export const { useLazyLoginUserQuery, useLazyRegisterUserQuery } = authApi;
