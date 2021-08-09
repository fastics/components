import { Children, ReactElement } from 'react';

import { DataTableColumnProps } from './types';

export const filterChildren = <C extends DataTableColumnProps>(children: ReactElement<C>[]) => {
  return Children.map(children, (child) => {
    if (!child) return null;
    if (child.props.optional) return null;
    return child;
  });
};
