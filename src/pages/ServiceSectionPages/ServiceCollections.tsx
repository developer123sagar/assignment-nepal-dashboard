import DefaultLayout from '@/layout/DefaultLayout';
import Breadcrumb from '@/components/Breadcrumbs/Breadcrumb';

import SubCategoryTable from '@/components/InteractiveTables/Service/SubCategory';
import AddCategoryForm from '@/components/InteractiveTables/Service/AddCategory';
import AddSubCategoryForm from '@/components/InteractiveTables/Service/AddSubCategory';
import AllTasks from '@/components/InteractiveTables/Service/Tasks';

export const CategoryPage = ({ userId }: { userId?: string }) => {
  console.log(userId);

  return (
    <>
      <DefaultLayout>
        <Breadcrumb pageName="All Tasks" />
        <AllTasks />
      </DefaultLayout>
    </>
  );
};

export const AddCategoryFormPage = ({ userId }: { userId?: string }) => {
  console.log(userId);

  return (
    <>
      <DefaultLayout>
        <Breadcrumb pageName="Category List" />
        <AddCategoryForm />
      </DefaultLayout>
    </>
  );
};

export const SubCategoryPage = ({ userId }: { userId?: string }) => {
  console.log(userId);

  return (
    <>
      <DefaultLayout>
        <Breadcrumb pageName="Sub Category List" />
        <SubCategoryTable />
      </DefaultLayout>
    </>
  );
};

export const AddSubCategoryFormPage = ({ userId }: { userId?: string }) => {
  console.log(userId);

  return (
    <>
      <DefaultLayout>
        <Breadcrumb pageName="Add Sub Category List" />
        <AddSubCategoryForm />
      </DefaultLayout>
    </>
  );
};

export const ServiceListPage = ({ userId }: { userId?: string }) => {
  console.log(userId);

  return (
    <>
      <DefaultLayout>
        <Breadcrumb pageName="Service List" />
        {/* <ServiceListTable /> */}
      </DefaultLayout>
    </>
  );
};

export const AddServiceListFormPage = ({ userId }: { userId?: string }) => {
  console.log(userId);

  return (
    <>
      <DefaultLayout>
        <Breadcrumb pageName="Add Service List Page" />
        {/* <AddServiceListForm /> */}
      </DefaultLayout>
    </>
  );
};

export const PackageListPage = ({ userId }: { userId?: string }) => {
  console.log(userId);

  return (
    <>
      <DefaultLayout>
        <Breadcrumb pageName="Package List" />
        {/* <PackageListTable /> */}
      </DefaultLayout>
    </>
  );
};

export const AddPackageListFormPage = ({ userId }: { userId?: string }) => {
  console.log(userId);

  return (
    <>
      <DefaultLayout>
        <Breadcrumb pageName="Add Package List Page" />
        {/* <AddPackageListForm /> */}
      </DefaultLayout>
    </>
  );
};

export const AddonListPage = ({ userId }: { userId?: string }) => {
  console.log(userId);

  return (
    <>
      <DefaultLayout>
        <Breadcrumb pageName="Addon List" />
        {/* <AddonListTable /> */}
      </DefaultLayout>
    </>
  );
};

export const AddAddonListFormPage = ({ userId }: { userId?: string }) => {
  console.log(userId);

  return (
    <>
      <DefaultLayout>
        <Breadcrumb pageName="Add Addon List Page" />
        {/* <AddAddonListForm /> */}
      </DefaultLayout>
    </>
  );
};
