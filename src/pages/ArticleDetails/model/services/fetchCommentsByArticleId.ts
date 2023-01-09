import { createAsyncThunk } from '@reduxjs/toolkit';
import { Comment } from 'entities/Comment';
import { ThunkConfig } from 'app/providers/StoreProvider';

export const fetchCommentsByArticleId = createAsyncThunk<
    Comment[],
    string | undefined,
    ThunkConfig<string>
    >(
      'articleDetails/fetchCommentsByArticleId',
      async (articleId, thunkApi) => {
        try {
          if (!articleId) return thunkApi.rejectWithValue('error');

          const response = await thunkApi.extra.api.get<Comment[]>('comments', {
            params: {
              articleId,
              _expand: 'user',
            },
          });

          if (!response) {
            throw new Error();
          }

          return response.data;
        } catch (e) {
          return thunkApi.rejectWithValue('error');
        }
      },
    );
