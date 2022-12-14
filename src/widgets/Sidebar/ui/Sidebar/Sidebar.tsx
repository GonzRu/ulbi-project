import { classNames } from 'shared/lib/classNames/classNames';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher';
import { Button } from 'shared/ui/Button';
import { getSidebarItems } from 'widgets/Sidebar/model/selectors/getSidebarItems';
import { useSelector } from 'react-redux';
import cl from './Sidebar.module.scss';
import { SidebarItem } from '../SidebarItem/SidebarItem';

interface SidebarProps{
    className?: string;
}

export function Sidebar({ className }: SidebarProps) {
  const { t } = useTranslation();
  const [collapsed, setCollapsed] = useState<boolean>(false);
  const sideBarItems = useSelector(getSidebarItems);

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
        {sideBarItems.map((item) => (
          <SidebarItem
            key={item.path}
            item={item}
            collapsed={collapsed}
          />
        ))}
      </div>
      <div className={cl.switchers}>
        <ThemeSwitcher />
        <LangSwitcher className={cl.lang} short={collapsed} />
      </div>
    </div>
  );
}
