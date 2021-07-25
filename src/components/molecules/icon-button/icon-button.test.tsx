import { render } from '@testing-library/react';

import { Icon, Icons } from '../../atoms';
import IconButton from './icon-button';

it('should render successfully', () => {
  render(<IconButton icon={<Icon icon={Icons.arrow_drop_down} />} onPress={() => {}} />);
});
