import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import {
  getArticlesHasMore,
  getArticlesIsLoading,
  getArticlesPage,
} from 'pages/Articles/model/selectors/articlesSelectors';
import { articlesActions } from 'pages/Articles/model/slices/articlesSlice';
import { fetchArticles } from 'pages/Articles/model/services/fetchArticles/fetchArticles';

export const fetchNextArticles = createAsyncThunk<
    void,
    void,
    ThunkConfig<string>
    >(
      'articlesPage/fetchNextArticles',
      async (props, thunkApi) => {
        const { dispatch, getState } = thunkApi;

        const page = getArticlesPage(getState());
        const hasMore = getArticlesHasMore(getState());
        const isLoading = getArticlesIsLoading(getState());

        if (hasMore && !isLoading) {
          dispatch(articlesActions.setPage(page + 1));
          dispatch(fetchArticles({ page: page + 1 }));
        }
      },
    );
