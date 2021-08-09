import { Children, ReactElement, useState } from 'react';

import { TabItemProps } from '../components/tab-item';

const useDefaultState = <T extends ReactElement<TabItemProps>[]>(
  children: T,
  defaultActiveKey?: string,
) => {
  return useState(
    Children.map(children, (child) => child).findIndex((child) => {
      if (!defaultActiveKey) return true;
      return child.key === `.$${defaultActiveKey}`;
    }),
  );
};

export default useDefaultState;
