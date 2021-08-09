import { render } from '@testing-library/react';

import DropdownButton from './dropdown-button';

const generateItems = (n = 100) => {
  let result = [];
  for (let i = 0; i < n; i++) {
    result.push({ value: i.toString(), text: `Item ${i}` });
  }
  return result;
};

it('should render successfully', () => {
  render(<DropdownButton items={generateItems()} />);
});
