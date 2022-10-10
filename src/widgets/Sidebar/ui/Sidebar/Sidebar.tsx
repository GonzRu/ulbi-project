import { classNames } from 'shared/lib/classNames/classNames';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher';
import { Button } from 'shared/ui/Button';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import MainIcon from 'shared/assets/icons/main.svg';
import AboutIcon from 'shared/assets/icons/about.svg';
import cl from './Sidebar.module.scss';

interface SidebarProps{
    className?: string;
}

export function Sidebar({ className }: SidebarProps) {
  const { t } = useTranslation();
  const [collapsed, setCollapsed] = useState<boolean>(false);

  const onToggle = () => setCollapsed((state) => !state);

  return (
    <div
      data-testid="sidebar"
      className={classNames(
        cl.Sidebar,
        { [cl.collapsed]: collapsed },
        [className],
      )}
    >
      <Button
        data-testid="sidebar-toggle"
        type="button"
        square
        size="L"
        theme="backgroundInverted"
        onClick={onToggle}
        className={cl.collapseBtn}
      >
        {collapsed ? '<' : '>'}
      </Button>
      <div className={cl.links}>
        <AppLink
          to={RoutePath.main}
          className={cl.linkItem}
          theme={AppLinkTheme.SECONDARY}
        >
          <MainIcon className={cl.icon} />
          <span className={cl.link}>{t('Главная страница')}</span>
        </AppLink>
        <AppLink
          to={RoutePath.about}
          className={cl.linkItem}
          theme={AppLinkTheme.SECONDARY}
        >
          <AboutIcon className={cl.icon} />
          <span className={cl.link}>{t('О сайте')}</span>
        </AppLink>
      </div>
      <div className={cl.switchers}>
        <ThemeSwitcher />
        <LangSwitcher className={cl.lang} short={collapsed} />
      </div>
    </div>
  );
}
