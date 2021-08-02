import classnames from 'classnames';
import { ReactElement } from 'react';

import classes from '../data-table.module.scss';
import { DataTableClassNames, DataTableColumnProps, DataTableData, DataTableProps } from '../types';
import { filterChildren } from '../utils';

interface DataTableBodyProps<D extends DataTableData> {
  data: D;
  children: ReactElement<DataTableColumnProps>[];
  renderRow?: DataTableProps<D>['renderRow'];
  classNames?: DataTableClassNames;
}

const DataTableBody = <D extends DataTableData>({
  data,
  children,
  renderRow,
  classNames,
}: DataTableBodyProps<D>) => {
  const mandatoryColumns = filterChildren(children);

  const Wrapper =
    renderRow ??
    (({ children }) => <div className={classnames(classes.row, classNames?.row)}>{children}</div>);

  return (
    <div className={classes.content}>
      {data.map((item, index) => (
        <Wrapper key={index}>
          {mandatoryColumns.map((child) => {
            const { flex, formatValue, value, renderCell: RenderCell, className } = child.props;

            const formatCallback = (v: string | number) => v;
            const format = formatValue ?? formatCallback;

            return RenderCell ? (
              <RenderCell key={value} value={format(item[value], item)} />
            ) : (
              <div
                key={value}
                className={classnames(classes.cell, classNames?.cell, className)}
                style={{ flex }}
              >
                {format(item[value], item)}
              </div>
            );
          })}
        </Wrapper>
      ))}
    </div>
  );
};

export default DataTableBody;
