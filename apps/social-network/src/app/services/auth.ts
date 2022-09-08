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
    loginUser: build.query<AccountAuthLogin.Response, AccountAuthLogin.Request>(
      {
        query: (body) => ({
          method: 'POST',
          url: '/login',
          body,
        }),
      }
    ),
    registerUser: build.query<
      AccountAuthRegister.Response,
      AccountAuthRegister.Request
    >({
      query: (body) => ({
        method: 'POST',
        url: '/register',
        body,
      }),
    }),
  }),
});

export const { useLazyLoginUserQuery, useLazyRegisterUserQuery } = authApi;
