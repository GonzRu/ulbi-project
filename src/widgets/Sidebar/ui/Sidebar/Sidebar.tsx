import {classNames} from "shared/lib/classNames";
import cl from './Sidebar.module.scss';
import {useState} from "react";
import {ThemeSwitcher} from "widgets/ThemeSwitcher";

interface SidebarProps {
    className?: string;
}

export const Sidebar = ({className}: SidebarProps) => {
    const [collapsed, setCollapsed] = useState<boolean>(false);

    const onToggle = () => setCollapsed(state => !state);

    return (
        <div className={classNames(
            cl.Sidebar,
            {[cl.collapsed]: collapsed},
            [className])}>
            <button onClick={onToggle}>toggle</button>
            <div className={cl.switchers}>
                <ThemeSwitcher />
            </div>
        </div>
    );
};
