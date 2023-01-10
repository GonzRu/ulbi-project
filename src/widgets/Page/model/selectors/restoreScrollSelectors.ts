import { StateSchema } from 'app/providers/StoreProvider';
import { createSelector } from '@reduxjs/toolkit';

export const getScrollPositions = (state: StateSchema) => state.scroll.positions;
export const getScrollPosition = createSelector(
  getScrollPositions,
  (state: StateSchema, path: string) => path,
  (scroll, path) => scroll[path] || 0,
);
