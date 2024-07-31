import { ColumnDef } from '@tanstack/react-table';
import { createCheckboxColumn } from '../TableStructure/Columns/createCheckboxColumn';
import { createColumn } from '../TableStructure/Columns/createColumn';
import { createActionsColumn } from '../TableStructure/Columns/createActionsColumn';
import { Payment } from '../TableStructure/DataStructure';
import ActualTable from '../TableStructure/ActualTable';

export const columns: ColumnDef<Payment>[] = [
  createCheckboxColumn(),
  createColumn('name', 'Name'),
  createColumn('joiningDate', 'Joining Date'),
  createColumn('contactNumber', 'Contact Number'),
  createColumn('address', 'Address'),
  createColumn('status', 'Status', true),
  createActionsColumn(),
];
export const data: Payment[] = [
  {
    id: 'ADSF35',
    name: 'Harris',
    userType: 'Provider',
    joiningDate: 'May 28, 2024',
    providerType: 'Company',
    contactNumber: '01-12345',
    address: 'China',
    status: 'active',
    verify: '',
  },
  {
    id: 'ADSF35',
    name: 'Testing',
    userType: 'user',
    joiningDate: 'May 29, 2024',
    providerType: 'Freelance',
    contactNumber: '01-123456',
    address: 'China',
    status: 'active',
    verify: '',
  },
];

const UnverifiedUserListTable = () => {
  return (
    <>
      <ActualTable data={data} columns={columns} />
    </>
  );
};

export default UnverifiedUserListTable;
