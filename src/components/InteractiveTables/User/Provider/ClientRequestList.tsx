import { ColumnDef } from '@tanstack/react-table';
import { createCheckboxColumn } from '../../TableStructure/Columns/createCheckboxColumn';
import { createColumn } from '../../TableStructure/Columns/createColumn';
import { createActionsColumn } from '../../TableStructure/Columns/createActionsColumn';
import { Payment } from '../../TableStructure/DataStructure';
import ActualTable from '../../TableStructure/ActualTable';

export const columns: ColumnDef<Payment>[] = [
  createCheckboxColumn(),
  createColumn('name', 'Name'),
  createColumn('joiningDate', 'Joining Date'),
  createColumn('providerType', 'Provider Type'),
  createColumn('contactNumber', 'Contact Number'),
  createColumn('status', 'Status', true),
  createActionsColumn(),
];
export const data: Payment[] = [
  {
    id: 'ADSF35',
    name: 'Harris',
    joiningDate: 'May 28, 2024',
    providerType: 'Company',
    contactNumber: '01-12345',
    status: 'active',
  },
  {
    id: 'ADSF35',
    name: 'Testing',
    joiningDate: 'May 29, 2024',
    providerType: 'Freelance',
    contactNumber: '01-123456',
    status: 'active',
  },
];

const ProviderListTable = () => {
  return (
    <>
      <ActualTable data={data} columns={columns} />
    </>
  );
};

export default ProviderListTable;
