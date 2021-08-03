import { render } from '@testing-library/react';

import Icons from '../icons';
import Icon from './icon';

it('should render successfully', () => {
  render(<Icon icon={Icons.access_time} />);
});
