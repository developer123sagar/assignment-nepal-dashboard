import React, { useState } from 'react';
import DefaultLayout from '@/layout/DefaultLayout';
import ActualTable from '../InteractiveTables/TableStructure/ActualTable';
import { ColumnDef } from '@tanstack/react-table';
import { ICompanyWorker } from 'types';
import { createCheckboxColumn } from '../InteractiveTables/TableStructure/Columns/createCheckboxColumn';
import { createColumn } from '../InteractiveTables/TableStructure/Columns/createColumn';
import { createActionsColumn } from '../InteractiveTables/TableStructure/Columns/createActionsColumn';

const EachUserDashboard: React.FC = () => {
  // const { merchantKey } = useParams<{ merchantKey: string }>();
  const [data, setData] = useState([]);

  // const dispatch = useAppDispatch();

  // useEffect(() => {
  //   (async () => {
  //     try {
  //       const res = await getCompanyUserList(
  //         merchantKey!,
  //         selectedUser === 'CLIENT' ? 'client' : 'worker',
  //       );
  //       if (res.status === 200) {
  //         setData(res.data.data);
  //       }
  //     } catch (error: any) {
  //       toast.error(error.msg || 'Something went wrong');
  //     }
  //   })();
  // }, [selectedUser]);

  const columns: ColumnDef<any>[] = [
    createCheckboxColumn<ICompanyWorker>(),
    // createColumn(
    //   `${selectedUser === 'CLIENT' ? 'name' : 'name'}`,
    //   `${selectedUser === 'CLIENT' ? 'Client Name' : 'Employer Name'}`,
    // ),
    createColumn('phone', 'Phone'),
    createColumn('joinDate', 'Joining Date'),
    createColumn('email', 'Email'),
    createActionsColumn<ICompanyWorker>(),
  ];

  return (
    <DefaultLayout>
      <div className="flex gap-4 mb-5 items-center justify-between">
        {/* <div>
          {selectedUser === 'CLIENT' ? (
            <span className="font-bold text-xl">Company Client Lists</span>
          ) : (
            <span className="font-bold text-xl">Company Worker List</span>
          )}
        </div> */}
        {/* <div className="flex items-center gap-4">
          <Button
            onClick={() => dispatch(setSelectedUser('CLIENT'))}
            variant={'outline'}
          >
            Company Client
          </Button>
          <Button
            onClick={() => dispatch(setSelectedUser('WORKER'))}
            variant={'outline'}
          >
            Company Worker
          </Button>
        </div> */}
      </div>

      <div className="flex w-full">
        <div>
          <ActualTable data={data} columns={columns} />
        </div>
      </div>
    </DefaultLayout>
  );
};
export default EachUserDashboard;
