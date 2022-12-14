import { ReactNode } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { render } from '@testing-library/react';
import { I18nextProvider } from 'react-i18next';
import i18bForTests from 'shared/config/i18n/i18bForTests';

export function renderWithTranslation(component: ReactNode) {
  return render(
    <I18nextProvider i18n={i18bForTests}>
      {component}
    </I18nextProvider>,
  );
}
