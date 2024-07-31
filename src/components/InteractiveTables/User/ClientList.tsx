// Columns.tsx

import { ColumnDef } from '@tanstack/react-table';
import { createCheckboxColumn } from '../TableStructure/Columns/createCheckboxColumn';
import { createColumn } from '../TableStructure/Columns/createColumn';
import { createActionsColumn } from '../TableStructure/Columns/createActionsColumn';
import ActualTable from '../TableStructure/ActualTable';
import { IClient } from 'types';
import { useEffect, useState } from 'react';
import { getClientList, getData } from '@/services/api/APIs';
import toast from 'react-hot-toast';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { RootState, useAppSelector } from '@/redux/store';

export const columns: ColumnDef<IClient>[] = [
  createCheckboxColumn<IClient>(),
  createColumn('name', 'Name'),
  createColumn('email', 'Email'),
  createColumn('phone', 'Phone'),
  createColumn('joinDate', 'Joining Date'),
  createActionsColumn<IClient>(),
];

const CustomerListTable = () => {
  const [data, setData] = useState();
  const navigate = useNavigate();
  const { role } = useAppSelector((state: RootState) => state.task);
  const merchatKey = localStorage.getItem('merchantKey') || '';

  useEffect(() => {
    (async () => {
      try {
        let res;
        if (role === 'admin') {
          res = await getClientList();
        }
        if (role === 'employer') {
          res = await getData(`client/list?merchantKey=${merchatKey}`);
        }
        console.log(res)
        if (res?.status === 200) {
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
        button={
          <Button onClick={() => navigate('/customer-list/add-customer')}>
            Add Client
          </Button>
        }
      />
    </>
  );
};

export default CustomerListTable;
