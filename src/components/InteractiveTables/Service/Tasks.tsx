import { ColumnDef } from '@tanstack/react-table';
import { createCheckboxColumn } from '../TableStructure/Columns/createCheckboxColumn';
import { createColumn } from '../TableStructure/Columns/createColumn';
import { createActionsColumn } from '../TableStructure/Columns/createActionsColumn';
import ActualTable from '../TableStructure/ActualTable';
import { useEffect, useState } from 'react';
import { getData } from '@/services/api/APIs';
import toast from 'react-hot-toast';
import { RootState, useAppSelector } from '@/redux/store';
import { ITask } from 'types';

export const columns: ColumnDef<ITask>[] = [
  createCheckboxColumn<ITask>(),
  createColumn('taskName', 'TaskName'),
  createColumn('taskDescription', 'Description'),
  createColumn('clientName', 'Client Name'),
  createColumn('projectStatus', 'Status'),
  createActionsColumn<ITask>(),
];

const AllTasks = ({ userId }: { userId?: string }) => {
  const [data, setData] = useState();
  const { role } = useAppSelector((state: RootState) => state.task);
  const merchatKey = localStorage.getItem('merchantKey') || '';

  useEffect(() => {
    (async () => {
      let res;

      try {
        if (role === 'admin') {
          res = await getData('task/employerTask-accepted');
        }
        if (role === 'employer') {
          res = await getData(
            `task/employerTask-accepted?merchantKey=${merchatKey}`,
          );
        }
        if (res?.status === 200) {
          setData(res.data.Data);
        }
      } catch (error: any) {
        toast.error(error.message || 'Something went wrong');
      }
    })();
  }, []);

  return (
    <>
      <ActualTable
        initialUserFilter={userId}
        data={data}
        columns={columns}
        isHandleClick
        navigateURL="all-task/view"
      />
    </>
  );
};

export default AllTasks;
