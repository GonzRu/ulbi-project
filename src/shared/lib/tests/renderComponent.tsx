import { ReactNode } from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import { I18nextProvider } from 'react-i18next';
import i18bForTests from 'shared/config/i18n/i18bForTests';

export interface componentRenderOptions {
    route?: string;
}

export function renderComponent(Component: ReactNode, options: componentRenderOptions = {}) {
  const {
    route = '/',
  } = options;

  return render(
    <MemoryRouter initialEntries={[route]}>
      <I18nextProvider i18n={i18bForTests}>
        {Component}
      </I18nextProvider>
    </MemoryRouter>,
  );
}
