import { classNames } from 'shared/lib/classNames/classNames';
import cl from './CommenList.module.scss';

interface CommenListProps {
    className?: string;
}

export const CommenList = ({ className }: CommenListProps) => (
  <div className={classNames(cl.CommenList, {}, [className])}>
    CommenList
  </div>
);
