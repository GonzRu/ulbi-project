import { classNames } from 'shared/lib/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { FC } from 'react';
import cl from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar: FC<NavbarProps> = () => (
  <div className={classNames(cl.Navbar)}>
    <div className={cl.links}>
      <AppLink
        to="/"
        className={cl.mainLink}
        theme={AppLinkTheme.SECONDARY}
      >
        Главная
      </AppLink>
      <AppLink
        to="/about"
        theme={AppLinkTheme.SECONDARY}
      >
        О нас
      </AppLink>
    </div>
  </div>
);
