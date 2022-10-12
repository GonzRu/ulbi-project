import { ReactNode } from 'react';
import { MemoryRouter } from 'react-router-dom';
// eslint-disable-next-line import/no-extraneous-dependencies
import { render } from '@testing-library/react';
import { I18nextProvider } from 'react-i18next';
import i18bForTests from 'shared/config/i18n/i18bForTests';
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';
import { DeepPartial } from '@reduxjs/toolkit';

export interface componentRenderOptions {
    route?: string;
    initialState?: DeepPartial<StateSchema>
}

export function renderComponent(Component: ReactNode, options: componentRenderOptions = {}) {
  const {
    route = '/',
    initialState,

  } = options;

  return render(
    <StoreProvider initialState={initialState as StateSchema}>
      <MemoryRouter initialEntries={[route]}>
        <I18nextProvider i18n={i18bForTests}>
          {Component}
        </I18nextProvider>
      </MemoryRouter>
    </StoreProvider>
    ,
  );
}
