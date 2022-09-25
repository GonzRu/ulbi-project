import { classNames } from 'shared/lib/classNames';
import { Button } from 'shared/ui/Button';
import i18n from 'i18next';
import { useTranslation } from 'react-i18next';
import cl from './LangSwitcher.module.scss';

interface LangSwitcherProps {
    className?: string;
}

export function LangSwitcher({ className }: LangSwitcherProps) {
  const { t } = useTranslation();
  const onToggle = () => i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');

  return (
    <Button
      theme="clear"
      className={classNames(cl.LangSwitcher, {}, [className])}
      onClick={onToggle}
    >
      {t('Язык')}
    </Button>
  );
}
