import React from 'react';

import DataTableBody from './components/data-table-body';
import DataTableHeader from './components/data-table-header';
import { DataTableColumnProps, DataTableData, DataTableProps } from './types';

export const buildDataColumn =
  <T extends DataTableData>() =>
  <K extends keyof T[number]>(_props: DataTableColumnProps<T, K>) =>
    null;

export const DataTable = <D extends DataTableData>({
  data,
  children,
  renderRow,
  classNames,
}: DataTableProps<D>) => (
  <div>
    <DataTableHeader children={children} classNames={classNames} />
    <DataTableBody data={data} renderRow={renderRow} classNames={classNames}>
      {children}
    </DataTableBody>
  </div>
);

export default DataTable;
