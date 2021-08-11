import classnames from 'classnames';
import React, { Children, ReactElement } from 'react';

import classes from '../data-table.module.scss';
import { DataTableClassNames, DataTableColumnProps } from '../types';
import { filterChildren } from '../utils';

interface DataTableHeaderProps<C> {
  children: ReactElement<C>[];
  classNames?: DataTableClassNames;
}

const DataTableHeader = <C extends DataTableColumnProps>({
  children,
  classNames,
}: DataTableHeaderProps<C>) => {
  const mandatoryColumns = filterChildren(children);

  return (
    <div className={classnames(classes.header, classes.row, classNames?.header, classNames?.row)}>
      {Children.map(mandatoryColumns, (child) => {
        const { flex = 1, label, value } = child.props;

        return (
          <div key={value} className={classes.cell} style={{ flex }}>
            {label}
          </div>
        );
      })}
    </div>
  );
};

export default DataTableHeader;
