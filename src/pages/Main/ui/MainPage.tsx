import { Counter } from 'entities/Counter';
import React from 'react';
import { useTranslation } from 'react-i18next';

function MainPage() {
  const { t } = useTranslation('main');
  return (
    <div>
      {t('Главная страница')}
      <Counter />
    </div>
  );
}

export default MainPage;
