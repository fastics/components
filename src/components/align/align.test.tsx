import { render } from '@testing-library/react';

import Alignment from '../alignment';
import Align from './align';

it('should render successfully', () => {
  render(
    <Align alignment={Alignment.bottomRight}>
      <span>Hello Test</span>
    </Align>,
  );
});
