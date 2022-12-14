import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Text } from 'shared/ui/Text/ui/Text';
import { Button } from 'shared/ui/Button';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/hooks/useAppDispatch';
import { profileActions } from 'pages/Profile/model/slice/profileSlice';
import { updateProfileData } from 'pages/Profile/model/service/updateProfileData/updateProfileData';
import { getProfileReadonly } from 'pages/Profile/model/selectors/getProfileReadonly/getProfileReadonly';
import { getUserAuthData } from 'entities/User';
import { getProfileData } from 'pages/Profile/model/selectors/getProfileData/getProfileData';
import cl from './ProfilePageHeader.module.scss';

interface ProfilePageHeaderProps {
    className?: string;
}

export const ProfilePageHeader = ({ className }: ProfilePageHeaderProps) => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  const readonly = useSelector(getProfileReadonly);
  const userAuthData = useSelector(getUserAuthData);
  const profileData = useSelector(getProfileData);
  const carEdit = userAuthData?.id === profileData?.id;

  const onEdit = () => {
    dispatch(profileActions.setReadonly(false));
  };

  const onCancelEdit = () => {
    dispatch(profileActions.cancelEdit());
  };

  const onSave = () => {
    dispatch(updateProfileData());
  };

  return (
    <div className={classNames(cl.ProfilePageHeader, {}, [className])}>
      <Text title={t('Профиль')} />
      {carEdit && (
      <div className={cl.buttonsWrapper}>
        {readonly
          ? (
            <Button
              theme="outline"
              className={cl.editBtn}
              onClick={onEdit}
            >
              {t('Редактировать')}
            </Button>
          )
          : (
            <>
              <Button
                theme="outlineRed"
                className={cl.editBtn}
                onClick={onCancelEdit}
              >
                {t('Отменить')}
              </Button>
              <Button
                theme="outline"
                className={cl.saveBtn}
                onClick={onSave}
              >
                {t('Сохранить')}
              </Button>
            </>

          )}
      </div>
      )}
    </div>
  );
};
