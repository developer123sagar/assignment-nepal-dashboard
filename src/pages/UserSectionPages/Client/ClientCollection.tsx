import DefaultLayout from '@/layout/DefaultLayout';
import Breadcrumb from '@/components/Breadcrumbs/Breadcrumb';
import ProviderListTable from '../../../components/InteractiveTables/User/Provider/ClientList';
import ProviderRequestListTable from '../../../components/InteractiveTables/User/Provider/ClientList';
import ProviderTypeListTable from '../../../components/InteractiveTables/User/Provider/ClientList';

export const ProviderListPage = ({ userId }: { userId?: string }) => {
  console.log(userId);

  return (
    <>
      <DefaultLayout>
        <Breadcrumb pageName="Provider List" />
        <ProviderListTable />
      </DefaultLayout>
    </>
  );
};
export const ProviderRequestListPage = ({ userId }: { userId?: string }) => {
  console.log(userId);

  return (
    <>
      <DefaultLayout>
        <Breadcrumb pageName="Provider Request List" />
        <ProviderRequestListTable />
      </DefaultLayout>
    </>
  );
};
export const ProviderTypeListPage = ({ userId }: { userId?: string }) => {
  console.log(userId);

  return (
    <>
      <DefaultLayout>
        <Breadcrumb pageName="Provider Type List" />
        <ProviderTypeListTable />
      </DefaultLayout>
    </>
  );
};