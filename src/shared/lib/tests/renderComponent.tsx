import { ReactNode } from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import { renderWithTranslation } from './renderWithTranslation';

export interface componentRenderOptions {
    route?: string;
}

export function renderComponent(Component: ReactNode, options: componentRenderOptions = {}) {
  const {
    route = '/',
  } = options;

  return render(
    <MemoryRouter>
      {renderWithTranslation(Component)}
    </MemoryRouter>,
  );
}
