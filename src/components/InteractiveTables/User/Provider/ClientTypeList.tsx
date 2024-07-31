import { ColumnDef } from '@tanstack/react-table';
import { createCheckboxColumn } from '../../TableStructure/Columns/createCheckboxColumn';
import { createColumn } from '../../TableStructure/Columns/createColumn';
import { createActionsColumn } from '../../TableStructure/Columns/createActionsColumn';
import { Payment } from '../../TableStructure/DataStructure';
import ActualTable from '../../TableStructure/ActualTable';

export const columns: ColumnDef<Payment>[] = [
  createCheckboxColumn(),
  createColumn('name', 'Name'),
  createColumn('commission', 'Commission'),
  createColumn('status', 'Status', true),
  createActionsColumn(),
];
export const data: Payment[] = [
  {
    id: 'ADSF35',
    name: 'Harris',
    commission: '$ 5.00',
  },

  {
    id: 'ADSF35',
    name: 'Harris',
    commission: '$2.25',
  },
];

const ProviderTypeListTable = () => {
  return (
    <>
      <ActualTable data={data} columns={columns} />
    </>
  );
};

export default ProviderTypeListTable;
