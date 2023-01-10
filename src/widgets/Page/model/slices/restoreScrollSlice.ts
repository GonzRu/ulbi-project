import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RestoreScrollSchema } from '../types/RestoreScrollSchema';

const initialState: RestoreScrollSchema = {
  positions: {},
};

export const restoreScrollSlice = createSlice({
  name: 'restoreScroll',
  initialState,
  reducers: {
    setPosition: (state, { payload }: PayloadAction<{name: string, position: number}>) => {
      state.positions[payload.name] = payload.position;
    },
  },
});

export const { actions: restoreScrollActions } = restoreScrollSlice;
export const { reducer: restoreScrollReducer } = restoreScrollSlice;
