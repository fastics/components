import { render } from '@testing-library/react';

import Result, { ResultStatus } from './result';

it('should render successfully', () => {
  render(<Result title="Hello Testing World !" status={ResultStatus.SUCCESS} />);
});
