// columns/createBoxStatusColumn.tsx

import { ColumnDef } from '@tanstack/react-table';
import { ArrowUpDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Payment } from '../../TableStructure/DataStructure';

export const createBoxStatusColumn = (
  key: keyof Payment,
  headerName: string,
  isUppercase = false,
): ColumnDef<Payment> => ({
  accessorKey: key,
  header: ({ column }) => (
    <Button
      variant="ghost"
      onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
    >
      {headerName}
      <ArrowUpDown className="ml-2 h-4 w-4" />
    </Button>
  ),
  cell: ({ row }) => {
    const value = row.original[key];

    const backgroundColor = 'bg-gray-200 dark:bg-gray-800';

    return (
      <div className={`pl-4 ${backgroundColor} ${isUppercase ? 'uppercase' : ''}`}>
        {value}
      </div>
    );
  },
});
