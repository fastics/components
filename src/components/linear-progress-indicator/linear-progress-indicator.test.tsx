import { render } from '@testing-library/react';

import LinearProgressIndicator from './linear-progress-indicator';

describe('LinearProgressIndicator', () => {
  it('should render successfully', () => {
    render(<LinearProgressIndicator value={40} />);
  });

  it('should throw when value > 100', () => {
    expect(() => {
      render(<LinearProgressIndicator value={140} />);
    }).toThrow('[LinearProgressIndicator] - The value should not exceed 100');
  });
});
