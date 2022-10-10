import { fireEvent, screen } from '@testing-library/react';
import { renderComponent } from 'shared/lib/tests/renderComponent';
import { Sidebar } from './Sidebar';

describe('Sidebar', () => {
  test('render text', () => {
    renderComponent(<Sidebar />);
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
  });

  test('render text', () => {
    renderComponent(<Sidebar />);
    const toggle = screen.getByTestId('sidebar-toggle');
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    fireEvent.click(toggle);
    expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
  });
});
