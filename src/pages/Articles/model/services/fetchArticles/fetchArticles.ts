import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Article } from 'entities/Article';
import { getArticlesLimit } from 'pages/Articles/model/selectors/articlesSelectors';

interface FetchArticlesProps {
    page: number;
}

export const fetchArticles = createAsyncThunk<
    Article[],
    FetchArticlesProps,
    ThunkConfig<string>
    >(
      'articlesPage/fetchArticles',
      async (props, thunkApi) => {
        const { page } = props;
        const limit = getArticlesLimit(thunkApi.getState());

        try {
          const response = await thunkApi.extra.api.get<Article[]>('articles', {
            params: {
              _expand: 'user',
              _limit: limit,
              _page: page,
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
