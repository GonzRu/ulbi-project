import { createEntityAdapter, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Article, ArticleView } from 'entities/Article';
import { StateSchema } from 'app/providers/StoreProvider';
import { ARTICLES_VIEW_LOCALSTORAGE_KEY } from 'shared/const/localstorage';
import { fetchArticles } from 'pages/Articles/model/services/fetchArticles/fetchArticles';
import { ArticlesSchema } from '../types/ArticlesSchema';

const articlesAdapter = createEntityAdapter<Article>({
  selectId: (article) => article.id,
});

export const getArticles = articlesAdapter.getSelectors<StateSchema>(
  (state) => state.articles || articlesAdapter.getInitialState(),
);

export const articlesSlice = createSlice({
  name: 'articles',
  initialState: articlesAdapter.getInitialState<ArticlesSchema>({
    isLoading: false,
    error: undefined,
    ids: [],
    entities: {},
    view: ArticleView.LIST,
    page: 1,
    hasMore: false,
    inited: false,
  }),
  reducers: {
    setView: (state, action: PayloadAction<ArticleView>) => {
      state.view = action.payload;
      localStorage.setItem(ARTICLES_VIEW_LOCALSTORAGE_KEY, action.payload);
    },
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
    initState: (state) => {
      state.view = localStorage.getItem(ARTICLES_VIEW_LOCALSTORAGE_KEY) as ArticleView;
      state.limit = state.view === ArticleView.LIST ? 4 : 9;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticles.pending, (state) => {
        state.isLoading = true;
        state.error = undefined;
      })
      .addCase(fetchArticles.fulfilled, (state, action) => {
        state.isLoading = false;
        articlesAdapter.addMany(state, action.payload);
        state.hasMore = action.payload.length > 0;
        state.inited = true;
      })
      .addCase(fetchArticles.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { actions: articlesActions } = articlesSlice;
export const { reducer: articlesReducer } = articlesSlice;
