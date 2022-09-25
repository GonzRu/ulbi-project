import { classNames } from 'shared/lib/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import cl from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar: FC<NavbarProps> = () => {
  const { t } = useTranslation();

  return (
    <div className={classNames(cl.Navbar)}>
      <div className={cl.links}>
        <AppLink
          to="/"
          className={cl.mainLink}
          theme={AppLinkTheme.SECONDARY}
        >
          {t('Главная')}
        </AppLink>
        <AppLink
          to="/about"
          theme={AppLinkTheme.SECONDARY}
        >
          {t('О Нас')}
        </AppLink>
      </div>
    </div>
  );
};
