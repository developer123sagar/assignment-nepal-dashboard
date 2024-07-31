import DefaultLayout from '@/layout/DefaultLayout';
import Breadcrumb from '@/components/Breadcrumbs/Breadcrumb';
// importing tables
import ProviderEarningTable from '@/components/InteractiveTables/Transactions/ProviderEarning';
import PaymentTable from '@/components/InteractiveTables/Transactions/Payment';
import WorkerEarningTable from '@/components/InteractiveTables/Transactions/WorkerEarning';

export const ClientEarningPage = () => {
  return (
    <>
      <DefaultLayout>
        <Breadcrumb pageName="Provider Earning" />
        <ProviderEarningTable />
      </DefaultLayout>
    </>
  );
};

export const PaymentPage = ({ userId }: { userId?: string }) => {
  console.log(userId);

  return (
    <>
      <DefaultLayout>
        <Breadcrumb pageName="Payment List" />
        <PaymentTable />
      </DefaultLayout>
    </>
  );
};

export const WorkerEarningPage = ({ userId }: { userId?: string }) => {
  console.log(userId);

  return (
    <>
      <DefaultLayout>
        <Breadcrumb pageName="Worker Earning Table" />
        <WorkerEarningTable />
      </DefaultLayout>
    </>
  );
};
