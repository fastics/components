import { act, fireEvent, render } from '@testing-library/react';
import { FC, useRef } from 'react';

import useOnClickOutside from './useOnClickOutside';

const Wrapper: FC<{ handler: Function }> = ({ handler }) => {
  const ref = useRef<HTMLDivElement>(null);
  useOnClickOutside(ref, handler);

  return (
    <div style={{ padding: 128 }} data-testid="wrapper">
      <div ref={ref}>Hello test</div>
    </div>
  );
};

describe('useOnClickOutside', () => {
  it('should work', () => {
    const handler = jest.fn();

    const { getByTestId } = render(<Wrapper handler={handler} />);

    act(() => {
      fireEvent.click(getByTestId('wrapper'));
    });

    expect(handler).toHaveBeenCalled();
  });
});
