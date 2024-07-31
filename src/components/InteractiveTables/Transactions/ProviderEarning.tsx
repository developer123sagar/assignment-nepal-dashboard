// Columns.tsx

import { ColumnDef } from '@tanstack/react-table';
import { createCheckboxColumn } from '../TableStructure/Columns/createCheckboxColumn';
import { createColumn } from '../TableStructure/Columns/createColumn';
import { createActionsColumn } from '../TableStructure/Columns/createActionsColumn';
import { createBoxStatusColumn } from '../TableStructure/Columns/createBoxStatusColumn';
import { Payment } from '../TableStructure/DataStructure';
import ActualTable from '../TableStructure/ActualTable';

export const columns: ColumnDef<Payment>[] = [
  createCheckboxColumn(),
  createColumn('service', 'Provider'),
  createColumn('booking', 'Booking'),
  createColumn('totalEarning', 'Total Earning'),
  createColumn('adminEarning', 'Admin Earning'),
  createColumn('providerEarning', 'Provider Earning'),
  createColumn('workerTotalEarning', 'Worker Total Earning'),
  createBoxStatusColumn('providerPayDue', 'Provider Pay Due'),
  createBoxStatusColumn('providerPaidAmount', 'Provider Paid Amount'),
  createActionsColumn(),
];

export const data: Payment[] = [
  {
    id: 'ADSF35',
    service: 'Harris',
    booking: 5,
    totalEarning: '20',
    adminEarning: '$5000',
    providerEarning: '$750',
    workerTotalEarning: '$750',
    providerPayDue: '$500',
    providerPaidAmount: '$50',
  },
];

const ProviderEarningTable = ({ userId }: { userId?: string }) => {
  console.log(userId);

  return (
    <>
      <ActualTable initialUserFilter={userId} data={data} columns={columns} />
    </>
  );
};

export default ProviderEarningTable;
