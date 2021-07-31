import { ReactElement } from 'react';

import classes from '../data-table.module.scss';
import { DataTableColumnProps, DataTableData, DataTableProps } from '../types';
import { filterChildren } from '../utils';

interface DataTableBodyProps<D extends DataTableData> {
  data: D;
  children: ReactElement<DataTableColumnProps>[];
  renderRow?: DataTableProps<D>['renderRow'];
}

const DataTableBody = <D extends DataTableData>({
  data,
  children,
  renderRow,
}: DataTableBodyProps<D>) => {
  const mandatoryColumns = filterChildren(children);

  const Wrapper = renderRow ?? (({ children }) => <div className={classes.row}>{children}</div>);

  return (
    <div className={classes.content}>
      {data.map((item, index) => (
        <Wrapper key={index}>
          {mandatoryColumns.map((child) => {
            const { flex, formatValue, value, renderCell: RenderCell } = child.props;

            const formatCallback = (v: string | number) => v;
            const format = formatValue ?? formatCallback;

            return RenderCell ? (
              <RenderCell key={value} value={format(item[value])} />
            ) : (
              <div key={value} className={classes.cell} style={{ flex }}>
                {format(item[value])}
              </div>
            );
          })}
        </Wrapper>
      ))}
    </div>
  );
};

export default DataTableBody;
