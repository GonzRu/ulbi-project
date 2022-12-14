import { classNames } from 'shared/lib/classNames/classNames';

interface ArticlesPageProps {
    className?: string;
}

const ArticlesPage = ({ className }: ArticlesPageProps) => (
  <div className={classNames('', {}, [className])}>
    ARTICLES PAGE
  </div>
);

export default ArticlesPage;
