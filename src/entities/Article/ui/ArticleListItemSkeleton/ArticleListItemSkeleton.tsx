import { classNames } from 'shared/lib/classNames/classNames';
import { Card } from 'shared/ui/Card/Card';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import cl from './ArticleListItemSkeleton.module.scss';
import {
  ArticleView,
} from '../../model/types/article';

interface ArticleListItemSkeletonProps {
    className?: string;
    view: ArticleView;
}

export const ArticleListItemSkeleton = (props: ArticleListItemSkeletonProps) => {
  const { className, view } = props;

  if (view === ArticleView.GALLERY) {
    return (
      <div className={classNames(cl.ArticleListItemSkeleton, {}, [className, cl[view]])}>
        <Card className={cl.card}>
          <div className={cl.imageWrapper}>
            <Skeleton className={cl.image} width={200} height={200} />
          </div>
          <div className={cl.infoWrapper}>
            <Skeleton className={cl.image} width={130} height={16} />
          </div>
          <Skeleton className={cl.image} width={160} height={16} />
        </Card>
      </div>
    );
  }

  return (
    <div className={classNames(cl.ArticleListItemSkeleton, {}, [className, cl[view]])}>
      <Card className={cl.card}>
        <div className={cl.header}>
          <Skeleton width={30} height={30} border="50%" />
          <Skeleton width={150} height={16} className={cl.username} />
          <Skeleton width={150} height={16} className={cl.date} />
        </div>
        <Skeleton width={250} height={24} className={cl.title} />
        <Skeleton height={200} className={cl.img} />
        <div className={cl.footer}>
          <Skeleton width={200} height={36} />
        </div>
      </Card>
    </div>
  );
};
