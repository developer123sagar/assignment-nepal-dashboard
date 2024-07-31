import Breadcrumb from '@/components/Breadcrumbs/Breadcrumb';
import DefaultLayout from '@/layout/DefaultLayout';
import WatcherListTable from './WatcherListTable';

const WatcherListPage = () => {
  return (
    <>
      <DefaultLayout>
        <Breadcrumb pageName="Watcher List" />
        <WatcherListTable />
      </DefaultLayout>
    </>
  );
};

export default WatcherListPage;
