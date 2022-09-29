import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button';
import cl from './PageError.module.scss';

interface PageErrorProps {
    className?: string;
}

export const PageError = ({ className }: PageErrorProps) => {
  const { t } = useTranslation();

  const reloadPage = () => {
    // eslint-disable-next-line no-restricted-globals
    location.reload();
  };

  return (
    <div className={classNames(cl.PageError)}>
      <h1>{t('Необработання ошибка')}</h1>
      <Button theme="clear" onClick={reloadPage}>
        {t('Обновить страницу')}
      </Button>
    </div>
  );
};
