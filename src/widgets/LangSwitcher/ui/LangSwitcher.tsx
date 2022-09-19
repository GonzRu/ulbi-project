import {classNames} from "shared/lib/classNames";
import cl from './LangSwitcher.module.scss';
import {Button} from "shared/ui/Button";
import i18n from "i18next";
import i18next from "i18next";
import {useTranslation} from "react-i18next";

interface LangSwitcherProps {
    className?: string;
}

export const LangSwitcher = ({className}: LangSwitcherProps) => {

    const {t} = useTranslation();
    const onToggle = () => i18next.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');

    return (
        <Button
            theme='clear'
            className={classNames(cl.LangSwitcher, {}, [className])}
            onClick={onToggle}
        >
            {t('Язык')}
        </Button>
    );
};
