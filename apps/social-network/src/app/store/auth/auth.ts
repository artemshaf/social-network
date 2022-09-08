import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../index';
import { IUser } from '@social-network/interfaces';

interface IInitialState {
  user: IUser;
  isAuth: boolean;
}

const initialState: IInitialState = {
  user: {} as IUser,
  isAuth: false,
};

const name = '@@auth';

export const authSlice = createSlice({
  initialState,
  name,
  reducers: {
    setAuth: (state, action: PayloadAction<boolean>) => {
      state.isAuth = action.payload;
    },
    setUser: (state, action: PayloadAction<IUser>) => {
      state.user = action.payload;
    },
  },
});

export const authReducer = authSlice.reducer;
export const { setAuth, setUser } = authSlice.actions;

export const selectUserName = (state: RootState): IUser => state.auth.user;
