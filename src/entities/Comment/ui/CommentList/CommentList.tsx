import { classNames } from 'shared/lib/classNames/classNames';
import { Text } from 'shared/ui/Text';
import { useTranslation } from 'react-i18next';
import cl from './CommentList.module.scss';
import { Comment } from '../../model/types/comment';
import { CommentCard } from '../CommentCard/CommentCard';

interface CommentListProps {
    className?: string;
    comments?: Comment[];
    isLoading?: boolean;
}

export const CommentList = ({ className, comments, isLoading }: CommentListProps) => {
  const { t } = useTranslation();

  if (isLoading) {
    return (
      <div className={classNames(cl.CommentList, {}, [className])}>
        <CommentCard className={cl.comment} isLoading />
        <CommentCard className={cl.comment} isLoading />
        <CommentCard className={cl.comment} isLoading />
      </div>
    );
  }

  return (

    <div className={classNames(cl.CommentList, {}, [className])}>
      {comments?.length
        ? comments?.map((comment) => (
          <CommentCard
            className={cl.comment}
            comment={comment}
          />
        ))
        : <Text text={t('Комментарии отсутствуют')} />}
    </div>
  );
};
