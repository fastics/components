import classNames from 'classnames';
import { Children, ReactElement } from 'react';

import classes from '../data-table.module.scss';
import { DataTableColumnProps } from '../types';
import { filterChildren } from '../utils';

interface DataTableHeaderProps<C> {
  children: ReactElement<C>[];
  className?: string;
}

const DataTableHeader = <C extends DataTableColumnProps>({
  children,
  className,
}: DataTableHeaderProps<C>) => {
  const mandatoryColumns = filterChildren(children);

  return (
    <div className={classNames(classes.header, classes.row, className)}>
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
