import { fireEvent, screen } from '@testing-library/react';
import { renderWithTranslation } from 'shared/lib/tests/renderWithTranslation';
import { Sidebar } from './Sidebar';

describe('Sidebar', () => {
  test('render text', () => {
    renderWithTranslation(<Sidebar />);
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
  });

  test('render text', () => {
    renderWithTranslation(<Sidebar />);
    const toggle = screen.getByTestId('sidebar-toggle');
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    fireEvent.click(toggle);
    expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
  });
});
