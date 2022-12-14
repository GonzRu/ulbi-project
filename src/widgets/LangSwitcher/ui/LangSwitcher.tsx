import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button';
import i18n from 'i18next';
import { useTranslation } from 'react-i18next';

interface LangSwitcherProps {
    className?: string;
    short?: boolean;
}

export function LangSwitcher({ className, short }: LangSwitcherProps) {
  const { t } = useTranslation();
  const onToggle = async () => {
    await i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
  };

  return (
    <Button
      theme="clear"
      className={classNames('', {}, [className])}
      onClick={onToggle}
    >
      {t(short ? 'Короткий язык' : 'Язык')}
    </Button>
  );
}
