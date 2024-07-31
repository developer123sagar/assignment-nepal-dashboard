import DefaultLayout from '@/layout/DefaultLayout';
import Breadcrumb from '@/components/Breadcrumbs/Breadcrumb';
import WorkerListTable from '../../../components/InteractiveTables/User/Worker/WorkerList';
import WorkerRequestListTable from '../../../components/InteractiveTables/User/Worker/WorkerList';
import WorkerTypeListTable from '../../../components/InteractiveTables/User/Worker/WorkerList';

export const WorkerListPage = ({ userId }: { userId?: string }) => {
  console.log(userId);

  return (
    <>
      <DefaultLayout>
        <Breadcrumb pageName="Worker List" />
        <WorkerListTable />
      </DefaultLayout>
    </>
  );
};
export const WorkerRequestListPage = ({ userId }: { userId?: string }) => {
  console.log(userId);

  return (
    <>
      <DefaultLayout>
        <Breadcrumb pageName="Worker Request List" />
        <WorkerRequestListTable />
      </DefaultLayout>
    </>
  );
};
export const WorkerTypeListPage = ({ userId }: { userId?: string }) => {
  console.log(userId);

  return (
    <>
      <DefaultLayout>
        <Breadcrumb pageName="Worker Type List" />
        <WorkerTypeListTable />
      </DefaultLayout>
    </>
  );
};