import { classNames, Mods } from 'shared/lib/classNames/classNames';
import React, {
  ReactNode, useCallback, useEffect, useRef, useState,
} from 'react';
import { Portal } from 'shared/ui/Portal';
import cl from './Modal.module.scss';

interface ModalProps {
    className?: string;
    children: ReactNode;
    isOpen: boolean;
    onClose: () => void;
    lazy?: boolean;
}

const CLOSE_ANIMATION_DELAY = 300;

export const Modal = (props: ModalProps) => {
  const {
    className,
    children,
    isOpen,
    onClose,
    lazy = true,
  } = props;

  const [isClosing, setIsClosing] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const ref = useRef<ReturnType<typeof setTimeout>>();

  const closeHandler = useCallback(() => {
    if (onClose) {
      setIsClosing(true);
      ref.current = setTimeout(() => {
        onClose();
        setIsClosing(false);
      }, CLOSE_ANIMATION_DELAY);
    }
  }, [onClose]);

  const contentClickHandler = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  const keyDownHandler = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      closeHandler();
    }
  }, [closeHandler]);

  useEffect(() => {
    if (isOpen) {
      setIsMounted(true);
    }
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      window.addEventListener('keydown', keyDownHandler);
    }

    return () => {
      window.removeEventListener('keydown', keyDownHandler);
      clearTimeout(ref.current);
    };
  }, [isOpen, keyDownHandler]);

  if (lazy && !isMounted) return null;

  const mods: Mods = {
    [cl.opened]: isOpen,
    [cl.isClosing]: isClosing,
  };

  return (
    <Portal>
      <div className={classNames(cl.Modal, mods, [className])}>
        <div
          className={cl.overlay}
          onClick={closeHandler}
        >
          <div
            className={cl.content}
            onClick={contentClickHandler}
          >
            {children}
          </div>
        </div>
      </div>
    </Portal>
  );
};
