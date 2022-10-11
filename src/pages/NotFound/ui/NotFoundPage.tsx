import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import cl from './NotFoundPage.module.scss';

export const NotFoundPage = () => {
  const { t } = useTranslation();
  return (
    <div className={classNames(cl.NotFoundPage)}>
      {t('Страница не найдена')}
    </div>
  );
};
