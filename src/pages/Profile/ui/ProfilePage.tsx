import { classNames } from 'shared/lib/classNames/classNames';
import { ProfileCard } from 'entities/Profile';
import { DynamicModuleLoader, ReducersList } from 'shared/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/hooks/useAppDispatch';
import { useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { getProfileReadonly } from 'pages/Profile/model/selectors/getProfileIsLoading/getProfileReadonly';
import { getProfileIsLoading } from 'pages/Profile/model/selectors/getProfileReadonly/getProfileIsLoading';
import { getProfileFormData } from 'pages/Profile/model/selectors/getProfileData/getProfileFormData';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import {
  getProfileValidateErrors,
} from 'pages/Profile/model/selectors/getProfileValidateErrors/getProfileValidateErrors';
import { Error } from 'shared/ui/Text/ui/Text.stories';
import { TextTheme } from 'shared/ui/Text/ui/Text';
import { useTranslation } from 'react-i18next';
import { ValidateErrors } from 'entities/Profile/model/types/ValidateErrors';
import { ProfilePageHeader } from './ProfilePageHeader/ProfilePageHeader';
import { getProfileError } from '../model/selectors/getProfileError/getProfileError';
import { profileActions, profileReducer } from '../model/slice/profileSlice';
import { fetchProfileData } from '../model/service/fetchProfileData';

const reducers: ReducersList = {
  profile: profileReducer,
};

interface ProfilePageProps {
    className?: string;
}

const ProfilePage = ({ className }: ProfilePageProps) => {
  const { t } = useTranslation('profile');
  const dispatch = useAppDispatch();
  const formData = useSelector(getProfileFormData);
  const isLoading = useSelector(getProfileIsLoading);
  const error = useSelector(getProfileError);
  const readonly = useSelector(getProfileReadonly);
  const validateErrors = useSelector(getProfileValidateErrors);

  const validateErrorsTranslates = {
    [ValidateErrors.INCORRECT_USER_DATA]: t('Некорректные данные'),
    [ValidateErrors.INCORRECT_AGE]: t('Некорректный возвраст'),
    [ValidateErrors.INCORRECT_COUNTRY]: t('Некорректная страна'),
    [ValidateErrors.NO_DATA]: t('Нет данных'),
    [ValidateErrors.SERVER_ERROR]: t('Ошибка сервера'),
  };

  useEffect(() => {
    dispatch(fetchProfileData());
  }, [dispatch]);

  const onChangeFirstName = useCallback((value?:string) => {
    dispatch(profileActions.updateProfile({ first: value }));
  }, [dispatch]);

  const onChangeLastName = useCallback((value?:string) => {
    dispatch(profileActions.updateProfile({ lastname: value }));
  }, [dispatch]);

  const onChangeAge = useCallback((value?:string) => {
    if (/^[0-9]+$/.test(value || '')) {
      dispatch(profileActions.updateProfile({ age: Number(value) || 0 }));
    }
  }, [dispatch]);

  const onChangeCity = useCallback((value?:string) => {
    dispatch(profileActions.updateProfile({ city: value }));
  }, [dispatch]);

  const onChangeUsername = useCallback((value?:string) => {
    dispatch(profileActions.updateProfile({ username: value }));
  }, [dispatch]);

  const onChangeAvatar = useCallback((value?:string) => {
    dispatch(profileActions.updateProfile({ avatar: value }));
  }, [dispatch]);

  const onChangeCurrency = useCallback((value?:Currency) => {
    dispatch(profileActions.updateProfile({ currency: value }));
  }, [dispatch]);

  const onChangeCountry = useCallback((value?: Country) => {
    dispatch(profileActions.updateProfile({ country: value }));
  }, [dispatch]);

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <div className={classNames('', {}, [className])}>
        <ProfilePageHeader />
        {validateErrors?.length && validateErrors.map((e) => (
          <Error
            key={e}
            text={validateErrorsTranslates[e]}
            theme={TextTheme.ERROR}
          />
        ))}
        <ProfileCard
          data={formData}
          isLoading={isLoading}
          error={error}
          readonly={readonly}
          onChangeFirstName={onChangeFirstName}
          onChangeLastName={onChangeLastName}
          onChangeAge={onChangeAge}
          onChangeCity={onChangeCity}
          onChangeUsername={onChangeUsername}
          onChangeAvatar={onChangeAvatar}
          onChangeCurrency={onChangeCurrency}
          onChangeCountry={onChangeCountry}
        />
      </div>
    </DynamicModuleLoader>
  );
};

export default ProfilePage;
