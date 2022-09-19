import {classNames} from "shared/lib/classNames";
import cl from './Button.module.scss';
import {ButtonHTMLAttributes, FC} from "react";

export type ButtonTheme = 'clear';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    className?: string;
    theme: ButtonTheme;
}

export const Button: FC<ButtonProps> = (props) => {

    const {
        className,
        children,
        theme,
        ...otherProps
    } = props;

    return (
        <button
            className={classNames(cl.Button, {}, [className, cl[theme]])}
            {...otherProps}
        >
            {children}
        </button>
    );
};
