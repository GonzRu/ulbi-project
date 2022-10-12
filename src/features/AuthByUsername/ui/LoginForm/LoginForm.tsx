import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button';
import { Input } from 'shared/ui/Input/Input';
import cl from './LoginForm.module.scss';

interface LoginFormProps {
    className?: string;
}

export const LoginForm = ({ className }: LoginFormProps) => {
  const { t } = useTranslation();
  return (
    <div className={classNames(cl.LoginForm, {}, [className])}>
      <Input
        autofocus
        type="text"
        className={cl.input}
        placeholder={t('Введите логин')}
      />
      <Input
        type="password"
        className={cl.input}
        placeholder={t('Введите пароль')}
      />
      <Button theme="outline" className={cl.inputBtn}>
        {t('Войти')}
      </Button>
    </div>
  );
};
