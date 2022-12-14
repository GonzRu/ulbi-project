import { createAsyncThunk } from '@reduxjs/toolkit';
import { Comment } from 'entities/Comment';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { getUserAuthData } from 'entities/User';
import { getArticleDetailsData } from 'entities/Article';
import { fetchCommentsByArticleId } from 'pages/ArticleDetails/model/services/fetchCommentsByArticleId';

export const addCommentForArticle = createAsyncThunk<
    Comment,
    string,
    ThunkConfig<string>
    >(
      'articleDetails/addCommentForArticle',
      async (text, thunkApi) => {
        const {
          extra, dispatch, rejectWithValue, getState,
        } = thunkApi;

        const userAuthData = getUserAuthData(getState());
        const article = getArticleDetailsData(getState());

        if (!userAuthData || !text || !article) {
          return rejectWithValue('error');
        }

        try {
          const response = await extra.api.post<Comment>('comments/', {
            articleId: article.id,
            userId: userAuthData.id,
            text,
          });

          if (!response.data) {
            return rejectWithValue('error');
          }

          dispatch(fetchCommentsByArticleId(article.id));

          return response.data;
        } catch (e) {
          return rejectWithValue('error');
        }
      },
    );
