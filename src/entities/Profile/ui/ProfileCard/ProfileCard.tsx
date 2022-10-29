import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Text, TextAlign, TextTheme } from 'shared/ui/Text/ui/Text';
import { Input } from 'shared/ui/Input/Input';
import { Loader } from 'shared/ui/Loader';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Currency, CurrencySelect } from 'entities/Currency';
import { Country, CountrySelect } from 'entities/Country';
import cl from './ProfileCard.module.scss';
import { Profile } from '../../model/types/profile';

interface ProfileCardProps {
    className?: string;
    data?: Profile;
    isLoading?: boolean;
    error?: string;
    readonly?: boolean;
    onChangeFirstName?: (value?: string) => void;
    onChangeLastName?: (value?: string) => void;
    onChangeAge?: (value?: string) => void;
    onChangeCity?: (value?: string) => void;
    onChangeUsername?: (value?: string) => void;
    onChangeAvatar?: (value?: string) => void;
    onChangeCurrency?: (value?: Currency) => void;
    onChangeCountry?: (value?: Country) => void;
}

export const ProfileCard = (props : ProfileCardProps) => {
  const {
    className,
    data,
    isLoading,
    error,
    readonly,
    onChangeFirstName,
    onChangeLastName,
    onChangeAge,
    onChangeCity,
    onChangeUsername,
    onChangeAvatar,
    onChangeCurrency,
    onChangeCountry,
  } = props;

  const { t } = useTranslation('profile');

  if (isLoading) {
    return (
      <div className={classNames(cl.ProfileCard, {}, [cl.loading, className])}>
        <Loader />
      </div>
    );
  }

  if (error) {
    return (
      <div className={classNames(cl.ProfileCard, {}, [cl.error, className])}>
        <Text
          theme={TextTheme.ERROR}
          title={t('Произошла ошибка загрузки профиля')}
          text={t('Попробуйте позже')}
          align={TextAlign.CENTER}
        />
      </div>
    );
  }

  return (
    <div className={classNames(cl.ProfileCard, { [cl.editable]: !readonly }, [className])}>
      {data?.avatar && (
      <div className={cl.avatarWrapper}>
        <Avatar size={150} src={data.avatar} />
      </div>
      )}
      <div className={cl.content}>
        <Input
          value={data?.first}
          onChange={onChangeFirstName}
          placeholder={t('Имя...')}
          className={cl.input}
          readonly={readonly}
        />
        <Input
          value={data?.lastname}
          onChange={onChangeLastName}
          placeholder={t('Фамилия...')}
          className={cl.input}
          readonly={readonly}
        />
        <Input
          value={data?.age}
          onChange={onChangeAge}
          placeholder={t('Возвраст...')}
          className={cl.input}
          readonly={readonly}
        />
        <Input
          value={data?.city}
          onChange={onChangeCity}
          placeholder={t('Город...')}
          className={cl.input}
          readonly={readonly}
        />
        <Input
          value={data?.username}
          onChange={onChangeUsername}
          placeholder={t('Логни...')}
          className={cl.input}
          readonly={readonly}
        />
        <Input
          value={data?.avatar}
          onChange={onChangeAvatar}
          placeholder={t('Аватар...')}
          className={cl.input}
          readonly={readonly}
        />
        <CurrencySelect
          value={data?.currency}
          onChange={onChangeCurrency}
          className={cl.input}
          readonly={readonly}
        />
        <CountrySelect
          value={data?.country}
          onChange={onChangeCountry}
          className={cl.input}
          readonly={readonly}
        />
      </div>
    </div>
  );
};
