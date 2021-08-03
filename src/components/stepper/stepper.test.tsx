import { render } from '@testing-library/react';

import Stepper from './stepper';

it('should render successfully', () => {
  render(
    <Stepper current={0}>
      <Stepper.Item title="Test1" />
      <Stepper.Item title="Test2" />
    </Stepper>,
  );
});
