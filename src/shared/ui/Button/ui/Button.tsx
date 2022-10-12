/* eslint-disable react/jsx-props-no-spreading */
import { classNames } from 'shared/lib/classNames/classNames';
import { ButtonHTMLAttributes, FC } from 'react';
import cl from './Button.module.scss';

export type ButtonTheme =
    'clear' |
    'clearInverted' |
    'outline' |
    'background' |
    'backgroundInverted';

export type ButtonSize = 'M' | 'L' | 'XL';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    className?: string;
    theme?: ButtonTheme;
    square?: boolean;
    size?: ButtonSize;
}

export const Button: FC<ButtonProps> = (props) => {
  const {
    className,
    children,
    theme = 'clear',
    square,
    size = 'M',
    ...otherProps
  } = props;

  return (
    <button
      type="button"
      className={classNames(
        cl.Button,
        { [cl.square]: square },
        [className, cl[theme], cl[size]],
      )}
      {...otherProps}
    >
      {children}
    </button>
  );
};
