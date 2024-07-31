import DefaultLayout from '@/layout/DefaultLayout';
import Breadcrumb from '@/components/Breadcrumbs/Breadcrumb';
import CompanyListTable from '../../../components/InteractiveTables/User/Company/CompanyList';
import CompanyTypeListTable from '../../../components/InteractiveTables/User/Company/CompanyList';
import SuperAddWorker from '@/components/InteractiveTables/User/Company/SuperAddWorker';
import SuperAddClient from '@/components/InteractiveTables/User/Company/SuperAddClient';
import SuperAddEmployer from '@/components/InteractiveTables/User/Company/SuperAddEmployer';
import SuperAddWatcher from '@/components/InteractiveTables/User/Company/SuperAddWatcher';
import CompanyRequestListTable from '@/components/InteractiveTables/User/Company/CompanyRequestList';

export const CompanyListPage = () => {
  return (
    <>
      <DefaultLayout>
        <Breadcrumb pageName="Company List" />
        <CompanyListTable />
      </DefaultLayout>
    </>
  );
};
export const CompanyRequestListPage = () => {
  return (
    <>
      <DefaultLayout>
        <Breadcrumb pageName="Company Request List" />
        <CompanyRequestListTable />
      </DefaultLayout>
    </>
  );
};

export const CompanyTypeListPage = () => {
  return (
    <>
      <DefaultLayout>
        <Breadcrumb pageName="Company Type List" />
        <CompanyTypeListTable />
      </DefaultLayout>
    </>
  );
};

export const SuperAdminAddWorkerPage = () => {
  return (
    <>
      <DefaultLayout>
        <Breadcrumb pageName="Add Worker" />
        <SuperAddWorker />
      </DefaultLayout>
    </>
  );
};

export const SuperAdminAddClientPage = () => {
  return (
    <>
      <DefaultLayout>
        <Breadcrumb pageName="Add Client" />
        <SuperAddClient />
      </DefaultLayout>
    </>
  );
};

export const SuperAdminAddEmployerPage = () => {
  return (
    <>
      <DefaultLayout>
        <Breadcrumb pageName="Add Company" />
        <SuperAddEmployer />
      </DefaultLayout>
    </>
  );
};
export const SuperAdminAddWatcherPage = () => {
  return (
    <>
      <DefaultLayout>
        <Breadcrumb pageName="Add Watcher" />
        <SuperAddWatcher />
      </DefaultLayout>
    </>
  );
};
