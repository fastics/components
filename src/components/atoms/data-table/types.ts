import { ComponentType, ReactElement, ReactText } from 'react';

export type DataTableData = Readonly<Array<{ [k: string]: string | number }>>;

export interface DataTableColumnProps<
  D extends DataTableData = DataTableData,
  K extends keyof D[number] = keyof D[number],
> {
  label: string;
  value: K;
  formatValue?: (value: D[number][K]) => JSX.Element | ReactText;
  /**
   * @default 1
   */
  flex?: number;
  optional?: boolean;
  renderCell?: ComponentType<{ value: D[number][K] | JSX.Element }>;
}

export interface DataTableProps<D extends DataTableData> {
  data: D;
  children: ReactElement<DataTableColumnProps>[];
  renderRow?: ComponentType;
}

export type SortDirection = 'asc' | 'desc';
export type Sort<D extends DataTableData> = [keyof D[number], SortDirection];
