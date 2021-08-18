import { act, fireEvent, render } from '@testing-library/react';

import Toggle from './toggle';

describe('toggle', () => {
  it('should render successfully', () => {
    render(<Toggle />);
  });

  it('should handle click', () => {
    const { getByTestId } = render(<Toggle />);

    act(() => {
      fireEvent.click(getByTestId('toggle'));
    });
  });
});
