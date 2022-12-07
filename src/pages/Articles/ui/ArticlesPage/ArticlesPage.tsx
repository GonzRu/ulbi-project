import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import cl from 'pages/Articles/ui/ArticlesPage/ArticlesPage.module.scss';

interface ArticlesPageProps {
    className?: string;
}

const ArticlesPage = ({ className }: ArticlesPageProps) => {
  const { t } = useTranslation();

  return (
    <div className={classNames(cl.ArticlesPage, {}, [className])}>
      ARTICLES PAGE
    </div>
  );
};

export default ArticlesPage;
