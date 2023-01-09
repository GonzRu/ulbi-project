import { classNames } from 'shared/lib/classNames/classNames';
import { ArticleList, ArticleView } from 'entities/Article';
import { DynamicModuleLoader, ReducersList } from 'shared/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/hooks/useAppDispatch';
import { useInitialEffect } from 'shared/hooks/useInitialEffect';
import { useSelector } from 'react-redux';
import { ArticlesViewSelector } from 'features/ArticlesViewSelector';
import { useCallback } from 'react';
import { Page } from 'shared/ui/Page';
import { fetchNextArticles } from 'pages/Articles/model/services/fetchNextArticles';
import { fetchArticles } from '../../model/services/fetchArticles';
import {
  getArticlesError, getArticlesHasMore,
  getArticlesIsLoading, getArticlesPage,
  getArticlesView,
} from '../../model/selectors/articlesSelectors';
import { articlesActions, articlesReducer, getArticles } from '../../model/slices/articlesSlice';

interface ArticlesPageProps {
    className?: string;
}

const reducers: ReducersList = {
  articles: articlesReducer,
};

const ArticlesPage = ({ className }: ArticlesPageProps) => {
  const dispatch = useAppDispatch();
  const articles = useSelector(getArticles.selectAll);
  const isLoading = useSelector(getArticlesIsLoading);
  const error = useSelector(getArticlesError);
  const view = useSelector(getArticlesView);
  const page = useSelector(getArticlesPage);
  const hasMore = useSelector(getArticlesHasMore);

  const onViewChange = useCallback((view: ArticleView) => {
    dispatch(articlesActions.setView(view));
  }, [dispatch]);

  const onLoadNextPart = useCallback(() => {
    dispatch(fetchNextArticles());
  }, [dispatch]);

  useInitialEffect(() => {
    dispatch(articlesActions.initState());
    dispatch(fetchArticles({ page: 1 }));
  });

  return (
    <DynamicModuleLoader reducers={reducers}>
      <Page className={classNames('', {}, [className])} onScrollEnd={onLoadNextPart}>
        <ArticlesViewSelector view={view} onViewClick={onViewChange} />
        <ArticleList
          articles={articles}
          view={view}
          isLoading={isLoading}
        />
      </Page>
    </DynamicModuleLoader>
  );
};

export default ArticlesPage;
