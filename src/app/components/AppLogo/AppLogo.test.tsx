import { render, screen } from '@testing-library/react';
import { AppLogo } from './AppLogo';

it('should render a logo', () => {
  render(<AppLogo />);
  expect(screen.getByRole('img')).toBeInTheDocument();
});
