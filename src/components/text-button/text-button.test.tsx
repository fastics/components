import { fireEvent, render } from '@testing-library/react';

import TextButton from './text-button';

it('should render successfully', () => {
  render(<TextButton>Press Me</TextButton>);
});

it('should handle press', () => {
  const onPress = jest.fn();

  const { getByTestId } = render(<TextButton onPress={onPress}>Press Me</TextButton>);
  fireEvent.click(getByTestId('text-button'));

  expect(onPress).toHaveBeenCalled();
});
