import { classNames } from 'shared/lib/classNames';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher';
import cl from './Sidebar.module.scss';

interface SidebarProps {
    className?: string;
}

export function Sidebar({ className }: SidebarProps) {
  const [collapsed, setCollapsed] = useState<boolean>(false);

  const { t } = useTranslation();
  const onToggle = () => setCollapsed((state) => !state);

  return (
    <div className={classNames(
      cl.Sidebar,
      { [cl.collapsed]: collapsed },
      [className],
    )}
    >
      <button type="button" onClick={onToggle}>{t('toggle')}</button>
      <div className={cl.switchers}>
        <ThemeSwitcher />
        <LangSwitcher className={cl.lang} />
      </div>
    </div>
  );
}
