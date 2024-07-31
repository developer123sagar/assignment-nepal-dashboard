import { getWatcherList } from '@/services/api/APIs';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import ActualTable from '../../TableStructure/ActualTable';
import { ColumnDef } from '@tanstack/react-table';
import { IClient } from 'types';
import { createCheckboxColumn } from '../../TableStructure/Columns/createCheckboxColumn';
import { createActionsColumn } from '../../TableStructure/Columns/createActionsColumn';
import { createColumn } from '../../TableStructure/Columns/createColumn';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

export const columns: ColumnDef<IClient>[] = [
  createCheckboxColumn<IClient>(),
  createColumn('name', 'Name'),
  createColumn('email', 'Email'),
  createColumn('createdDateTime', 'Joining Date'),
  createActionsColumn<IClient>(),
];

const WatcherListTable = () => {
  const [data, setData] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      try {
        const res = await getWatcherList();
        if (res.status === 200) {
          setData(res.data.data);
        }
      } catch (error: any) {
        toast.error(error.message || 'Something went wrong');
      }
    })();
  }, []);
  console.log(data)

  return (
    <>
      <ActualTable
        data={data}
        columns={columns}
        button={
          <Button onClick={() => navigate('/watcher-list/add')}>
            Add Watcher
          </Button>
        }
      />
    </>
  );
};

export default WatcherListTable;
