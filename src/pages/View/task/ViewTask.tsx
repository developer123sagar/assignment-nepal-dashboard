import Breadcrumb from '@/components/Breadcrumbs/Breadcrumb';
import ViewTaskCard from '@/components/cards/ViewTaskCard';
import DefaultLayout from '@/layout/DefaultLayout';

const ViewTask = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Task View" />
      <ViewTaskCard />
    </DefaultLayout>
  );
};

export default ViewTask;
