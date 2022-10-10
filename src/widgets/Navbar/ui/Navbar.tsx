import { classNames } from 'shared/lib/classNames/classNames';
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
      <div className={cl.links} />
    </div>
  );
};
