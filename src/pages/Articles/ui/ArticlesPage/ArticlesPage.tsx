import { classNames } from 'shared/lib/classNames/classNames';
import { ArticleList, ArticleView } from 'entities/Article';
import { DynamicModuleLoader, ReducersList } from 'shared/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/hooks/useAppDispatch';
import { useInitialEffect } from 'shared/hooks/useInitialEffect';
import { useSelector } from 'react-redux';
import { ArticlesViewSelector } from 'features/ArticlesViewSelector';
import { useCallback } from 'react';
import { fetchArticles } from '../../model/services/fetchArticles';
import {
  getArticlesError,
  getArticlesIsLoading,
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

  const onViewChange = useCallback((view: ArticleView) => {
    dispatch(articlesActions.setView(view));
  }, [dispatch]);

  useInitialEffect(() => {
    dispatch(articlesActions.initState());
    dispatch(fetchArticles());
  });

  return (
    <DynamicModuleLoader reducers={reducers}>
      <div className={classNames('', {}, [className])}>
        <ArticlesViewSelector view={view} onViewClick={onViewChange} />
        <ArticleList
          articles={articles}
          view={view}
          isLoading={isLoading}
        />
      </div>
    </DynamicModuleLoader>
  );
};

export default ArticlesPage;
