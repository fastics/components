import { render } from '@testing-library/react';

import Icon from '../icon';
import Icons from '../icons';
import DataTable, { buildDataColumn } from './data-table';

const data = [{ name: 'John Doe', age: 23, gender: 'male' }] as const;

type Data = typeof data;

it('should render successfully', () => {
  const DataColumn = buildDataColumn<Data>();

  render(
    <DataTable data={data}>
      <DataColumn
        value="name"
        label="Name"
        formatValue={(value) => (
          <>
            <Icon icon={Icons.person} />
            <span>{value}</span>
          </>
        )}
      />
      <DataColumn value="age" label="Age" />
      <DataColumn value="gender" label="Gender" />
    </DataTable>,
  );
});
