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
    disabled?: boolean;
}

export const Button: FC<ButtonProps> = (props) => {
  const {
    className,
    children,
    theme = 'clear',
    square,
    size = 'M',
    disabled,
    ...otherProps
  } = props;

  return (
    <button
      type="button"
      className={classNames(
        cl.Button,
        {
          [cl.square]: square,
          [cl.disabled]: disabled,
        },
        [className, cl[theme], cl[size]],
      )}
      disabled={disabled}
      {...otherProps}
    >
      {children}
    </button>
  );
};
