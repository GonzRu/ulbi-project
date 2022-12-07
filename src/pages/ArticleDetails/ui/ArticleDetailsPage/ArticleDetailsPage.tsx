import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import cl from './ArticleDetailsPage.module.scss';

interface ArticleDetailsPageProps {
    className?: string;
}

const ArticleDetailsPage = ({ className }: ArticleDetailsPageProps) => {
  const { t } = useTranslation();

  return (
    <div className={classNames(cl.ArticleDetailsPage, {}, [className])}>
      ARTICLES DETAILS PAGE
    </div>
  );
};

export default ArticleDetailsPage;
