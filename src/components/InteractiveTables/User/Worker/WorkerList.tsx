import { ColumnDef } from '@tanstack/react-table';
import { createCheckboxColumn } from '../../TableStructure/Columns/createCheckboxColumn';
import { createColumn } from '../../TableStructure/Columns/createColumn';
import { createActionsColumn } from '../../TableStructure/Columns/createActionsColumn';
import ActualTable from '../../TableStructure/ActualTable';
import { useEffect, useState } from 'react';
import { getData, getWorkerList } from '@/services/api/APIs';
import toast from 'react-hot-toast';
import { IWorker } from 'types';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { RootState, useAppSelector } from '@/redux/store';

const columns: ColumnDef<IWorker>[] = [
  createCheckboxColumn<IWorker>(),
  createColumn('name', 'Name'),
  createColumn('joinDate', 'Joining Date'),
  createColumn('email', 'Email'),
  createColumn('employerName', 'Employer Name'),
  createColumn('verificationStatus', 'Status'),
  createActionsColumn<IWorker>(),
];

const employerCols: ColumnDef<any>[] = [
  createCheckboxColumn<IWorker>(),
  createColumn('name', 'Name'),
  createColumn('joinDate', 'Joining Date'),
  createColumn('email', 'Email'),
  createColumn('phone', 'Phone'),
  createColumn('employerName', 'Employer Name'),
  createActionsColumn<IWorker>(),
];

const WorkerList = () => {
  const [data, setData] = useState();
  const navigate = useNavigate();
  const { role } = useAppSelector((state: RootState) => state.task);
  const merchatKey = localStorage.getItem('merchantKey') || '';

  useEffect(() => {
    (async () => {
      try {
        let res;
        if (role === 'admin') {
          res = await getWorkerList();
        }
        if (role === 'employer') {
          res = await getData(`worker/list?merchantKey=${merchatKey}`);
        }
        if (res?.status === 200) {
          setData(res.data.data || res.data.Data);
        }
      } catch (error: any) {
        toast.error(error.message || 'Something went wrong');
      }
    })();
  }, []);

  console.log(data);

  return (
    <>
      <ActualTable
        data={data}
        columns={role === 'admin' ? columns : employerCols}
        button={
          <Button onClick={() => navigate('/worker/worker-list/add-worker')}>
            Add Workers
          </Button>
        }
      />
    </>
  );
};

export default WorkerList;
