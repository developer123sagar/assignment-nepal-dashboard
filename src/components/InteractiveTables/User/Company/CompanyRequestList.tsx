// Columns.tsx

import { ColumnDef } from '@tanstack/react-table';
import { createColumn } from '../../TableStructure/Columns/createColumn';
import { createActionsColumn } from '../../TableStructure/Columns/createActionsColumn';
import ActualTable from '../../TableStructure/ActualTable';
import { useEffect, useState } from 'react';
import { getData } from '@/services/api/APIs';
import toast from 'react-hot-toast';
import { IEmployer } from 'types';

export const columns: ColumnDef<IEmployer>[] = [
  createColumn('name', 'Name'),
  createColumn('Vat_no', 'Vat'),
  createColumn('joinDate', 'Joining Date'),
  createColumn('email', 'Email'),
  createColumn('status', 'Status'),
  createActionsColumn<IEmployer>(),
];

const CompanyRequestListTable = () => {
  const [data, setData] = useState();
  useEffect(() => {
    (async () => {
      try {
        const res = await getData('employer/pending');
        if (res.status === 200) {
          setData(res.data.data);
        }
      } catch (error: any) {
        toast.error(error.message || 'Something went wrong');
      }
    })();
  }, []);

  return (
    <>
      <ActualTable
        data={data}
        columns={columns}
        isHandleClick
        navigateURL="company/company-request-list/edit"
      />
    </>
  );
};

export default CompanyRequestListTable;
