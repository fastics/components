import { render } from '@testing-library/react';

import StepperItem from './stepper-item';

it('should render successfully', () => {
  render(<StepperItem title="Test" />);
});
