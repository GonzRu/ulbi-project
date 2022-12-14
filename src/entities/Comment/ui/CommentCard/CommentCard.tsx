import { classNames } from 'shared/lib/classNames/classNames';
import { Comment } from 'entities/Comment/model/types/comment';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Text } from 'shared/ui/Text';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import cl from './CommentCard.module.scss';

interface CommentCardProps {
    comment?: Comment;
    className?: string;
    isLoading?: boolean;
}

export const CommentCard = ({ className, comment, isLoading }: CommentCardProps) => {
  if (isLoading) {
    return (
      <div className={classNames(cl.CommentCard, {}, [className, cl.loading])}>
        <div className={cl.header}>
          <Skeleton width={30} height={30} border="50%" />
          <Skeleton className={cl.username} width={100} height={16} />
        </div>
        <Skeleton className={cl.text} width="100%" height={50} />
      </div>
    );
  }

  if (!comment) return null;

  return (
    <div className={classNames(cl.CommentCard, {}, [className])}>
      <AppLink to={`${RoutePath.profile}${comment.user.id}`} className={cl.header}>
        {comment.user.avatar && <Avatar size={30} src={comment.user.avatar} />}
        <Text className={cl.username} title={comment.user.username} />
      </AppLink>
      <Text className={cl.text} text={comment.text} />
    </div>
  );
};
