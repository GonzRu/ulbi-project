import { classNames } from 'shared/lib/classNames/classNames';
import { ArticleListItemSkeleton } from 'entities/Article/ui/ArticleListItemSkeleton/ArticleListItemSkeleton';
import cl from './ArticleList.module.scss';
import { Article, ArticleView } from '../../model/types/article';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';

interface ArticleListProps {
    articles: Article[];
    view: ArticleView;
    className?: string;
    isLoading?: boolean;
}

const getSkeletons = (view: ArticleView) => Array(view === ArticleView.LIST ? 3 : 9)
  .fill(0)
  .map((x, index) => <ArticleListItemSkeleton key={index} view={view} />);

export const ArticleList = (props : ArticleListProps) => {
  const {
    className,
    articles,
    isLoading,
    view,
  } = props;

  const renderArticle = (article: Article) => (
    <ArticleListItem
      key={article.id}
      article={article}
      view={view}
    />
  );

  return (
    <div className={classNames(cl.ArticleList, {}, [className, cl[view]])}>
      {articles.length > 0
        ? articles.map(renderArticle)
        : null}
      {isLoading && getSkeletons(view)}
    </div>
  );
};
