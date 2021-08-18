import { act, fireEvent, render } from '@testing-library/react';

import DropdownButton from './dropdown-button';

const generateItems = (n = 100) => {
  let result = [];
  for (let i = 0; i < n; i++) {
    result.push({ value: i.toString(), text: `Item ${i}` });
  }
  return result;
};

describe('DropdownButton', () => {
  it('should render successfully', () => {
    render(<DropdownButton items={generateItems()} />);
  });

  it('should open', () => {
    const { getByTestId, rerender } = render(<DropdownButton items={generateItems()} />);
    const button = getByTestId('button');

    act(() => {
      fireEvent.click(button);
    });

    rerender(<DropdownButton items={generateItems()} />);

    const elm = getByTestId(2);

    act(() => {
      fireEvent.click(elm);
    });
  });
});
