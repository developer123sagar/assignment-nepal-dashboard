// columns/createColumn.tsx

import { ColumnDef } from '@tanstack/react-table';
import { ArrowUpDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { formatDate } from '@/helpers';
import { Link } from 'react-router-dom';

// Function to generate user URL
// const generateUserUrl = (value: string) => `/user/${value}`;

export const createColumn = <T extends Record<string, any>>(
  key: keyof T,
  headerName: string,
  isUppercase = false,
): ColumnDef<T> => ({
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
    console.log(value);
    if (key === 'status' && value === 'active') {
      return (
        <div className={`pl-4 ${isUppercase ? 'uppercase' : ''}`}>
          {String(value)}
        </div>
      );
    } else if (key === 'status' && !value) {
      return (
        <div className="pl-4">
          <Switch />
        </div>
      );
    } else if (key === 'joinDate' || key === 'createdDateTime') {
      const value = row.original['joinDate'] || row.original['createdDateTime'];
      return <div className="pl-4">{formatDate(value)}</div>;
    } else if (key === 'projectAmount') {
      const value = row.original['projectAmount'];
      return <div className="pl-4">Rs. {value}</div>;
    } else if (key === 'verify') {
      return (
        <div className="pl-4">
          <Switch />
        </div>
      );
    } else if (key === 'history') {
      const userValue = row.original['user'];
      const historyValue = row.original['history'];
      const url = historyValue ? `/history/${userValue}` : '';

      return (
        <div className={`pl-4 ${isUppercase ? 'uppercase' : ''}`}>
          {historyValue ? (
            <Link
              to={url}
              className="text-white font-medium bg-blue-800 p-1 rounded-md dark: hover:underline"
            >
              {String(value)}
            </Link>
          ) : (
            String(value)
          )}
        </div>
      );
    } else if (key === 'name' || key === 'user' || key === 'categoryName') {
      const merchantKey = row.original['merchantKey'];
      const url = key === 'name' ? `/name/${merchantKey}` : `/user/${value}`;

      return (
        <div className={`pl-4 ${isUppercase ? 'uppercase' : ''}`}>
          <Link
            to={url}
            className="text-white font-medium bg-blue-800 p-1 rounded-md dark: hover:underline capitalize"
          >
            {String(value)}
          </Link>
        </div>
      );
    }

    return (
      <div
        className={`pl-4 ${key === 'employerName' && 'capitalize'} ${
          isUppercase ? 'uppercase' : ''
        }`}
      >
        {String(value)}
      </div>
    );
  },
});
