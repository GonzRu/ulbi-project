import {
  createEntityAdapter,
  createSlice,
  configureStore,
} from '@reduxjs/toolkit';
import { Comment } from 'entities/Comment/model/types/comment';

const commentsAdapter = createEntityAdapter<Comment>({
  // Assume IDs are stored in a field other than `book.id`
  selectId: (book) => book.id,
});

const articleDetailsCommentsSlice = createSlice({
  name: 'articleDetailsCommentsSlice',
  initialState: commentsAdapter.getInitialState(),
  reducers: {
    // Can pass adapter functions directly as case reducers.  Because we're passing this
    // as a value, `createSlice` will auto-generate the `bookAdded` action type / creator
    bookAdded: commentsAdapter.addOne,
    booksReceived(state, action) {
      // Or, call them as "mutating" helpers in a case reducer
      commentsAdapter.setAll(state, action.payload.books);
    },
  },
});
