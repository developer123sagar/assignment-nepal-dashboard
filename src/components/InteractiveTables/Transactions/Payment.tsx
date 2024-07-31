import { ColumnDef } from '@tanstack/react-table';
import { createCheckboxColumn } from '../TableStructure/Columns/createCheckboxColumn';
import { createColumn } from '../TableStructure/Columns/createColumn';
import { createActionsColumn } from '../TableStructure/Columns/createActionsColumn';
import { createBoxStatusColumn } from '../TableStructure/Columns/createBoxStatusColumn';
import { Payment } from '../TableStructure/DataStructure';
import ActualTable from '../TableStructure/ActualTable';

export const columns: ColumnDef<Payment>[] = [
  createCheckboxColumn(),
  createColumn('service', 'Service'),
  createColumn('user', 'User'),
  createColumn('paymentType', 'Payment Type'),
  createBoxStatusColumn('paidStatus', 'Status'),
  createColumn('contactNumber', 'Contact Number'),
  createColumn('status', 'Status', true),
  createActionsColumn(),
];
export const data: Payment[] = [
  {
    id: 'ADSF35',
    service: 'Window AC Installation',
    user: 'Harris',
    paymentType: 'stripe',
    paidStatus: 'advanced',
    dateTime: '2024',
    totalAmount: '$2.5',
    status: 'active',
    verify: '',
  },
];

const PaymentTable = ({ userId }: { userId?: string }) => {
  return (
    <>
      <ActualTable initialUserFilter={userId} data={data} columns={columns} />
    </>
  );
};

export default PaymentTable;
