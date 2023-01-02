import { screen } from '@testing-library/react';
import { renderWithTheme } from 'src/utils/tests/renderWithTheme';

import { Header } from '.';

describe('<Header />', () => {
  it('should render the HEADER', () => {
    const { container } = renderWithTheme(<Header />);

    expect(screen.getByText(/app de vendas/i)).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });
});
