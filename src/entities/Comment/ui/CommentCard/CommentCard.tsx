import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import cl from './CommentCard.module.scss';

interface CommentCardProps {
    className?: string;
}

export const CommentCard = ({ className }: CommentCardProps) => {
  const { t } = useTranslation();

  return (
    <div className={classNames(cl.CommentCard, {}, [className])}>
    </div>
  );
};
