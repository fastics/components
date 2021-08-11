import { render } from '@testing-library/react';

import Colors from '../colors';
import Margin from '../margin';
import Padding from '../padding';
import Container from './container';

it('should render successfully without props', () => {
  render(<Container />);
});

it('should render successfully with all props', () => {
  render(
    <Container
      color={Colors.blueGrey[300]}
      height={100}
      width={100}
      padding={Padding.all(12)}
      margin={Margin.all(24)}
    >
      <p>Hello, Test</p>
    </Container>,
  );
});
