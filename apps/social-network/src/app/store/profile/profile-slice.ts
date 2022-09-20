// import {
//   createAsyncThunk,
//   createSlice,
//   PayloadAction,
//   isAllOf,
//   isAnyOf,
//   Action,
// } from '@reduxjs/toolkit';
// import { RootState } from '../index';
// import { IUser } from '@social-network/interfaces';
// import { AuthService } from '@client/services';
// import {
//   AccountAuthLogin,
//   AccountAuthLogout,
//   AccountAuthRegister,
// } from '@social-network/contracts';

// interface IInitialState {
//   user: IUser;
//   accessToken: string;
//   isAuth: boolean;
//   error: String;
// }

// const initialState: IInitialState = {
//   profile: {}
// };

// const name = '@@auth';

// export const AuthLogin = createAsyncThunk<
//   AccountAuthLogin.Response,
//   AccountAuthLogin.Request
// >(`${name}/login`, async (data, { rejectWithValue, dispatch }) => {
//   try {
//     const res = await AuthService.login(data);
//     return await res.data;
//   } catch (error) {
//     return rejectWithValue(error || 'error logout');
//   }
// });

// export const AuthLogout = createAsyncThunk(
//   `${name}/logout`,
//   async (data: AccountAuthLogout.Request, { rejectWithValue }) => {
//     try {
//       const res = await AuthService.logout(data);
//       return res.data;
//     } catch (error) {
//       return rejectWithValue(error || 'error logout');
//     }
//   }
// );

// export const AuthRegister = createAsyncThunk(
//   `${name}/register`,
//   async (data: AccountAuthRegister.Request, { rejectWithValue }) => {
//     try {
//       const res = await AuthService.register(data);
//       return res.data;
//     } catch (error) {
//       return rejectWithValue(error || 'error logout');
//     }
//   }
// );

// export const profileSlice = createSlice({
//   initialState,
//   name,
//   reducers: {
//     setAuth: (state, action: PayloadAction<boolean>) => {
//       state.isAuth = action.payload;
//     },
//     setUser: (state, action: PayloadAction<IUser>) => {
//       state.user = action.payload;
//     },
//     setAccessToken: (state, action: PayloadAction<string>) => {
//       state.accessToken = action.payload;
//     },
//     setError: (state, action: PayloadAction<string>) => {
//       state.error = action.payload;
//     },
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(
//         AuthLogin.fulfilled,
//         (state, action: PayloadAction<AccountAuthLogin.Response>) => {
//           state.isAuth = true;
//           state.user = action.payload.user;
//           state.accessToken = action.payload.accessToken;
//           state.error = '';
//           localStorage.setItem('accessToken', action.payload.accessToken);
//         }
//       )
//       .addCase(AuthLogout.fulfilled, (state) => {
//         state.isAuth = false;
//         state.user = {} as IUser;
//         state.accessToken = '';
//         state.error = '';
//       })
//       .addCase(
//         AuthRegister.fulfilled,
//         (state, action: PayloadAction<AccountAuthRegister.Response>) => {
//           state.isAuth = true;
//           state.user = action.payload.user;
//           state.error = '';
//         }
//       )
//       .addCase(AuthLogin.rejected, (state) => {
//         state.error = 'Ошибка входа!';
//       })
//       .addCase(AuthLogout.rejected, (state) => {
//         state.error = 'Ошибка выхода!';
//       })
//       .addCase(AuthRegister.rejected, (state) => {
//         state.error = 'Ошибка регистрации!';
//       })
//       .addMatcher(
//         (action) => action.type.endsWith('/fulfilled'),
//         (state) => {
//           state.error = '';
//         }
//       );
//   },
// });

// export const authReducer = profileSlice.reducer;
// export const { setAuth, setUser, setAccessToken, setError } = profileSlice.actions;

// export const selectUser = (state: RootState): IUser => state.auth.user;
// export const selectUserId = (state: RootState): string =>
//   state.auth.user._id as string;

// export const selectAccessToken = (state: RootState): string =>
//   state.auth.accessToken as string;

// export const selectError = (state: RootState): string => state.auth.error;
