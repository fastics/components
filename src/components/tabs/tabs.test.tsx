import { act, fireEvent, render } from '@testing-library/react';
import React from 'react';

import Tabs from './tabs';

const children = [
  <Tabs.Item key="1" name="Tab 1">
    Content of Tab 1
  </Tabs.Item>,
  <Tabs.Item key="2" name="Tab 2">
    Content of Tab 2
  </Tabs.Item>,
  <Tabs.Item key="3" name="Tab il était un petit navire">
    Content of Tab 3
  </Tabs.Item>,
  <Tabs.Item key="4" name="Tab 4">
    Content of Tab 4
  </Tabs.Item>,
];

describe('Tabs', () => {
  it('should render successfully', () => {
    render(<Tabs>{children}</Tabs>);
  });

  it('should work with defaultActiveKey', () => {
    render(<Tabs defaultActiveKey="3">{children}</Tabs>);
  });

  it('should handle click', () => {
    const { getByTestId } = render(<Tabs defaultActiveKey="3">{children}</Tabs>);

    act(() => {
      fireEvent.click(getByTestId(2));
    });
  });
});
