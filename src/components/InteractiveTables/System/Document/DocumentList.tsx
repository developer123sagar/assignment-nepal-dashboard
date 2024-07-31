import { ColumnDef } from '@tanstack/react-table';
import { createCheckboxColumn } from '../../TableStructure/Columns/createCheckboxColumn';
import { createColumn } from '../../TableStructure/Columns/createColumn';
import { createActionsColumn } from '../../TableStructure/Columns/createActionsColumn';
import { Payment } from '../../TableStructure/DataStructure';
import ActualTable from '../../TableStructure/ActualTable';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export const columns: ColumnDef<Payment>[] = [
  createCheckboxColumn(),
  createColumn('name', 'Name'),
  createColumn('status', 'Required', true),
  createColumn('status', 'Status', true),
  createActionsColumn(),
];

export const data: Payment[] = [
  {
    id: 'emiel',
    name: "John",
  },
];

const DocumentList = ({ userId }: { userId?: string }) => {
  console.log(userId);

  return (
    <>
      <div className="flex justify-between items-center mb-4 bg-gray-3 dark:bg-graydark p-5 rounded-2xl">
        <span className="text-2xl text-black">Document List</span>

        <Link to="/add-document">
          <Button variant="default" size="lg">
            Add Document
          </Button>
        </Link>
      </div>
      <ActualTable initialUserFilter={userId} data={data} columns={columns} />
    </>
  );
};

export default DocumentList;
