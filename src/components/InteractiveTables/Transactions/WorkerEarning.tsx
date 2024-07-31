import { ColumnDef } from '@tanstack/react-table';
import { createCheckboxColumn } from '../TableStructure/Columns/createCheckboxColumn';
import { createColumn } from '../TableStructure/Columns/createColumn';
import { createActionsColumn } from '../TableStructure/Columns/createActionsColumn';
import { Payment } from '../TableStructure/DataStructure';
import ActualTable from '../TableStructure/ActualTable';

export const data: Payment[] = [
  {
    id: 'ADSF35',
    service: 'Harris',
    booking: 5,
    totalAmount: '20',
    workerTotalEarning: '$5000',
    paidAmount: '$750',
    dueAmount: '$500',
  },
];

export const columns: ColumnDef<Payment>[] = [
  createCheckboxColumn(),
  createColumn('service', 'Worker'),
  createColumn('booking', 'Booking'),
  createColumn('totalAmount', 'Total Amount'),
  createColumn('workerTotalEarning', 'Admin Earning'),
  createColumn('paidAmount', 'Paid Amount'),
  createColumn('dueAmount', 'Due Amount'),
  createActionsColumn(),
];

const WorkerEarningTable = ({ userId }: { userId?: string }) => {
  console.log(userId);

  return (
    <>
      <ActualTable initialUserFilter={userId} data={data} columns={columns} />
    </>
  );
};

export default WorkerEarningTable;
