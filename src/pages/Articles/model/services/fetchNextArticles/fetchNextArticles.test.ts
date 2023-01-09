import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk';
import { fetchArticles } from 'pages/Articles/model/services/fetchArticles/fetchArticles';
import { fetchNextArticles } from 'pages/Articles/model/services/fetchNextArticles/fetchNextArticles';

jest.mock('../fetchArticles/fetchArticles');

describe('fetchNextArticles.test', () => {
  test('success', async () => {
    const thunk = new TestAsyncThunk(fetchNextArticles, {
      articles: {
        page: 2,
        ids: [],
        entities: {},
        limit: 5,
        isLoading: false,
        hasMore: true,
      },
    });

    await thunk.callThunk();

    expect(thunk.dispatch).toBeCalledTimes(4);
    expect(fetchArticles).toHaveBeenCalledWith({ page: 3 });
  });
  test('fetchArticles not called', async () => {
    const thunk = new TestAsyncThunk(fetchNextArticles, {
      articles: {
        page: 2,
        ids: [],
        entities: {},
        limit: 5,
        isLoading: false,
        hasMore: false,
      },
    });

    await thunk.callThunk();

    expect(thunk.dispatch).toBeCalledTimes(2);
    expect(fetchArticles).not.toHaveBeenCalled();
  });

  test('fetchArticles not called', async () => {
    const thunk = new TestAsyncThunk(fetchNextArticles, {
      articles: {
        page: 2,
        ids: [],
        entities: {},
        limit: 5,
        isLoading: true,
        hasMore: true,
      },
    });

    await thunk.callThunk();

    expect(thunk.dispatch).toBeCalledTimes(2);
    expect(fetchArticles).not.toHaveBeenCalled();
  });
});
