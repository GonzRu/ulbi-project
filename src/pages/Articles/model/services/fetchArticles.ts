import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Article } from 'entities/Article';

export const fetchArticles = createAsyncThunk<
    Article[],
    void,
    ThunkConfig<string>
    >(
      '',
      async (_, thunkApi) => {
        try {
          const response = await thunkApi.extra.api.get<Article[]>('articles', {
            params: {
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
