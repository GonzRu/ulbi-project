import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Page } from 'shared/ui/Page';
import cl from './NotFoundPage.module.scss';

export const NotFoundPage = () => {
  const { t } = useTranslation();
  return (
    <Page className={classNames(cl.NotFoundPage)}>
      {t('Страница не найдена')}
    </Page>
  );
};
