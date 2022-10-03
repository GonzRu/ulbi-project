import { render, screen } from '@testing-library/react';
import { Button } from './Button';

describe('Button', () => {
  test('render text', () => {
    render(<Button theme="clear">Test</Button>);
    expect(screen.getByText('Test')).toBeInTheDocument();
  });

  test('has class clear', () => {
    render(<Button theme="clear">Test</Button>);
    expect(screen.getByText('Test')).toHaveClass('clear');
  });
});
