import { render } from '@testing-library/react';

import TabItem from './tab-item';

it('should render successfully', () => {
  render(
    <TabItem key="1" name="Hello, Test">
      Test
    </TabItem>,
  );
});
