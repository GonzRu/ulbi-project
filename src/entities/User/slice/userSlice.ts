import { createSlice } from '@reduxjs/toolkit';
import { CounterSchema } from 'entities/Counter/types/counterSchema';
import { UserSchema } from 'entities/User/types/user';

const initialState: UserSchema = {
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {

  },
});

export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;
