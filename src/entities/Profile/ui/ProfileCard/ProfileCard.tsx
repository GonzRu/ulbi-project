import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { useSelector } from 'react-redux';
import { getProfileIsLoading } from 'entities/Profile/model/selectors/getProfileIsLoading/getProfileIsLoading';
import { getProfileError } from 'entities/Profile/model/selectors/getProfileError/getProfileError';
import { Text } from 'shared/ui/Text/ui/Text';
import { Button } from 'shared/ui/Button';
import { Input } from 'shared/ui/Input/Input';
import { getProfileData } from '../../model/selectors/getProfileData/getProfileData';
import cl from './ProfileCard.module.scss';

interface ProfileCardProps {
    className?: string;
}

export const ProfileCard = ({ className }: ProfileCardProps) => {
  const { t } = useTranslation('profile');
  const data = useSelector(getProfileData);
  const isLoading = useSelector(getProfileIsLoading);
  const error = useSelector(getProfileError);

  return (
    <div className={classNames(cl.ProfileCard, {}, [className])}>
      <div className={cl.header}>
        <Text title={t('Профиль')} />
        <Button theme="outline" className={cl.editBtn}>
          {t('Редактировать')}
        </Button>
      </div>
      <div className={cl.content}>
        <Input value={data?.first} placeholder="Имя..." className={cl.input} />
        <Input value={data?.lastname} placeholder="Фамилия..." className={cl.input} />
      </div>
    </div>
  );
};
