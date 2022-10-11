import { classNames } from 'shared/lib/classNames/classNames';
import { FC, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button';
import { Modal } from 'widgets/Modal';
import cl from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar: FC<NavbarProps> = () => {
  const { t } = useTranslation();
  const [isAuthModal, setIsAuthModal] = useState(false);

  const onToggleModal = useCallback(() => {
    setIsAuthModal((prev) => !prev);
  }, []);

  return (
    <div className={classNames(cl.Navbar)}>
      <Button
        theme="clearInverted"
        onClick={onToggleModal}
      >
        {t('Войти')}
      </Button>
      <Modal isOpen={isAuthModal} onClose={onToggleModal}>
        {t('Войти')}
      </Modal>
    </div>
  );
};
