// Columns.tsx

import { ColumnDef } from '@tanstack/react-table';
import { createCheckboxColumn } from '../../TableStructure/Columns/createCheckboxColumn';
import { createColumn } from '../../TableStructure/Columns/createColumn';
import { createActionsColumn } from '../../TableStructure/Columns/createActionsColumn';
import { Payment } from '../../TableStructure/DataStructure';
import ActualTable from '../../TableStructure/ActualTable';
import { v4 as uuidv4 } from 'uuid';

export const columns: ColumnDef<Payment>[] = [
  createCheckboxColumn(),
  createColumn('name', 'Name'),
  createColumn('joiningDate', 'Joining Date'),
  createColumn('provider', 'Provider'),
  createColumn('contactNumber', 'Contact Number'),
  createColumn('address', 'Address'),
  createColumn('status', 'Status', true),
  createActionsColumn(),
];

export const data: Payment[] = [
  {
    id: uuidv4(),
    name: 'John Doe',
    joiningDate: '2024-05-30',
    provider: 'ABC Company',
    contactNumber: '123-456-7890',
    address: '123 Main Street, Cityville',
    status: 'active',
  },
];

import DefaultLayout from '@/layout/DefaultLayout';
import Breadcrumb from '@/components/Breadcrumbs/Breadcrumb';

const CompanyTypeListTable = ({ userId }: { userId?: string }) => {
  console.log(userId);

  return (
    <>
      <DefaultLayout>
        <Breadcrumb pageName="Company Type List" />
        <ActualTable initialUserFilter={userId} data={data} columns={columns} />
      </DefaultLayout>
    </>
  );
};

export default CompanyTypeListTable;
