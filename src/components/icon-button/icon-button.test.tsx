import { render } from '@testing-library/react';

import Icon from '../icon';
import Icons from '../icons';
import IconButton from './icon-button';

it('should render successfully', () => {
  render(<IconButton icon={<Icon icon={Icons.arrow_drop_down} />} onPress={() => {}} />);
});
