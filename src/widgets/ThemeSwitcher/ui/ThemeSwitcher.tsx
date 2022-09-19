import {classNames} from "shared/lib/classNames";
import cl from './ThemeSwitcher.module.scss';
import {Theme, useTheme} from "app/providers/ThemeProvider";
import LightIcon from 'shared/assets/icons/theme-light.svg';
import DarkIcon from 'shared/assets/icons/theme-dark.svg';
import {Button} from "shared/ui/Button";

interface ThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher = ({className}: ThemeSwitcherProps) => {

    const {theme, toggleTheme} = useTheme();

    return (
        <Button
            theme='clear'
            className={classNames(cl.ThemeSwitcher, {}, [className])}
            onClick={toggleTheme}
        >
            {theme === Theme.DARK && <DarkIcon/>}
            {theme === Theme.LIGHT && <LightIcon/>}
        </Button>
    );
};
