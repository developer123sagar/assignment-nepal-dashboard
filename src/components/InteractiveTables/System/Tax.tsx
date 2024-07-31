import { ColumnDef } from '@tanstack/react-table';
import { createCheckboxColumn } from '../TableStructure/Columns/createCheckboxColumn';
import { createColumn } from '../TableStructure/Columns/createColumn';
import { createActionsColumn } from '../TableStructure/Columns/createActionsColumn';
import { Payment } from '../TableStructure/DataStructure';
import ActualTable from '../TableStructure/ActualTable';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export const columns: ColumnDef<Payment>[] = [
  createCheckboxColumn(),
  createColumn('title', 'Title'),
  createColumn('value', 'Value'),
  createColumn('status', 'Status', true),
  createActionsColumn(),
];

export const data: Payment[] = [
  {
    id: '1',
    title: 'This is a title',
    value: '$50 Value',
  },
];

const TaxTable = ({ userId }: { userId?: string }) => {
  console.log(userId);

  return (
    <>
      <div className="flex justify-between items-center mb-4 bg-gray-3 dark:bg-graydark p-5 rounded-2xl">
        <span className="text-2xl text-black">Tax List</span>

        <Link to="/add-tax">
          <Button variant="default" size="lg">
            Add Tax
          </Button>
        </Link>
      </div>
      <ActualTable initialUserFilter={userId} data={data} columns={columns} />
    </>
  );
};

export default TaxTable;
