import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk';
import { fetchArticles } from '../fetchArticles/fetchArticles';
import { initArticles } from './initArticles';

jest.mock('../fetchArticles/fetchArticles');

describe('initArticles.test', () => {
  test('success', async () => {
    const thunk = new TestAsyncThunk(initArticles, {
      articles: {
        page: 2,
        ids: [],
        entities: {},
        limit: 5,
        isLoading: false,
        hasMore: true,
        inited: false,
      },
    });

    await thunk.callThunk();

    expect(thunk.dispatch).toBeCalledTimes(4);
    expect(fetchArticles).toHaveBeenCalledWith({ page: 1 });
  });

  test('fetchArticles not called', async () => {
    const thunk = new TestAsyncThunk(initArticles, {
      articles: {
        inited: true,
      },
    });

    await thunk.callThunk();

    expect(thunk.dispatch).toBeCalledTimes(2);
    expect(fetchArticles).not.toHaveBeenCalled();
  });
});
