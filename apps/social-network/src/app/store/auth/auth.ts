import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { IUser } from '@social-network/interfaces';

const initialState = {
  user: {} as IUser,
  isAuth: false,
  isLoading: false,
};
const name = '@@auth';

export const login = createAsyncThunk(
  `${name}/login`,
  async (_, { rejectWithValue, extra }) => {}
);

export const authSlice = createSlice({
  initialState,
  name,
  reducers: {},
});

export const authReducer = authSlice.reducer;
