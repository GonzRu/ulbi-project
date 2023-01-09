import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { getArticlesInited } from 'pages/Articles/model/selectors/articlesSelectors';
import { articlesActions } from 'pages/Articles/model/slices/articlesSlice';
import { fetchArticles } from 'pages/Articles/model/services/fetchArticles/fetchArticles';

export const initArticles = createAsyncThunk<
    void,
    void,
    ThunkConfig<string>
    >(
      'articlesPage/initArticles',
      async (props, { dispatch, getState }) => {
        const inited = getArticlesInited(getState());

        if (!inited) {
          dispatch(articlesActions.initState());
          dispatch(fetchArticles({ page: 1 }));
        }
      },
    );
