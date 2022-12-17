import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Text } from 'shared/ui/Text';
import { Icon } from 'shared/ui/Icon/Icon';
import EyeIcon from 'shared/assets/icons/eye.svg';
import { Card } from 'shared/ui/Card/Card';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Button } from 'shared/ui/Button';
import { useNavigate } from 'react-router-dom';
import { useCallback } from 'react';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';
import cl from './ArticleListItem.module.scss';
import {
  Article, ArticleBlockType, ArticleTextBlock, ArticleView,
} from '../../model/types/article';

interface ArticleListItemProps {
    className?: string;
    article: Article;
    view: ArticleView;
}

export const ArticleListItem = (props: ArticleListItemProps) => {
  const {
    className,
    article,
    view,
  } = props;
  const { t } = useTranslation();
  const navigate = useNavigate();

  const onOpenArticle = useCallback(() => {
    navigate(RoutePath.article_details + article.id);
  }, [article.id, navigate]);

  const types = (<Text className={cl.types} text={article.type.join(', ')} />);
  const views = (
    <>
      <Text
        className={cl.views}
        text={String(article.views)}
      />
      <Icon Svg={EyeIcon} />
    </>
  );

  if (view === ArticleView.GALLERY) {
    return (
      <div className={classNames(cl.ArticleListItem, {}, [className, cl[view]])}>
        <Card className={cl.card} onClick={onOpenArticle}>
          <div className={cl.imageWrapper}>
            <img className={cl.image} src={article.img} alt={article.title} />
            <Text className={cl.date} text={article.createdAt} />
          </div>
          <div className={cl.infoWrapper}>
            {types}
            {views}
          </div>
          <Text className={cl.title} text={String(article.title)} />
        </Card>
      </div>
    );
  }

  const textBlock = article.blocks
    .find((x) => x.type === ArticleBlockType.TEXT) as ArticleTextBlock;

  return (
    <div className={classNames(cl.ArticleListItem, {}, [className, cl[view]])}>
      <Card className={cl.card}>
        <div className={cl.header}>
          <Avatar size={30} src={article.user.avatar} />
          <Text text={article.user.username} className={cl.username} />
          <Text text={article.createdAt} className={cl.date} />
        </div>
        <Text text={article.title} className={cl.title} />
        {types}
        <img src={article.img} alt={article.title} className={cl.img} />
        {textBlock && <ArticleTextBlockComponent className={cl.textBlock} block={textBlock} />}
        <div className={cl.footer}>
          <Button theme="outline" onClick={onOpenArticle}>
            {t('Читать далее')}
          </Button>
          { views }
        </div>
      </Card>
    </div>
  );
};
