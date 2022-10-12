import { classNames } from 'shared/lib/classNames/classNames';
import { Modal } from 'widgets/Modal';
import { LoginForm } from 'features/AuthByUsername/ui/LoginForm/LoginForm';
import cl from './LoginModal.module.scss';

interface LoginModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export const LoginModal = ({ isOpen, onClose }: LoginModalProps) => (
  <Modal
    isOpen={isOpen}
    onClose={onClose}
  >
    <LoginForm />
  </Modal>
);
