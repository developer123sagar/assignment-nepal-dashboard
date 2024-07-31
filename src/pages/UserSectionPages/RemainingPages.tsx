import DefaultLayout from '@/layout/DefaultLayout';
import Breadcrumb from '@/components/Breadcrumbs/Breadcrumb';
import UnverifiedUserListTable from '@/components/InteractiveTables/User/UnverifiedUserList';
import CustomerListTable from '@/components/InteractiveTables/User/ClientList';

export const ClientListPage = () => {
  return (
    <>
      <DefaultLayout>
        <Breadcrumb pageName="Client List" />
        <CustomerListTable />
      </DefaultLayout>
    </>
  );
};

export const UnverifiedUserListPage = () => {
  return (
    <>
      <DefaultLayout>
        <Breadcrumb pageName="Unverified User List" />
        <UnverifiedUserListTable />
      </DefaultLayout>
    </>
  );
};
