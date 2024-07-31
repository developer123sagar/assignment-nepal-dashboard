import DefaultLayout from '@/layout/DefaultLayout';
import Breadcrumb from '@/components/Breadcrumbs/Breadcrumb';

import PushNotifications from '@/components/InteractiveTables/System/PushNotifications';
import TermsAndConditions from '../../components/InteractiveTables/System/Pages/TermsAndConditions';
import PrivacyPolicy from '@/components/InteractiveTables/System/Pages/PrivacyPolicy';
import HelpAndSupport from '@/components/InteractiveTables/System/Pages/HelpAndSupport';
import RefundAndCancellation from '@/components/InteractiveTables/System/Pages/RefundAndCancellation';
import DataDeletationRequest from '@/components/InteractiveTables/System/Pages/DataDeletationRequest';
import DocumentList from '@/components/InteractiveTables/System/Document/DocumentList';
import AddDocument from '@/components/InteractiveTables/System/Document/AddDocument';
import AccountSettings from '@/components/AccountSettings';
import BlogTable from '@/components/InteractiveTables/System/Blog';
import AddBlogForm from '@/components/InteractiveTables/System/AddBlog';

export const BlogPage = ({ userId }: { userId?: string }) => {
  console.log(userId);

  return (
    <>
      <DefaultLayout>
        <Breadcrumb pageName="Blog List" />
        <BlogTable />
      </DefaultLayout>
    </>
  );
};

export const AddBlogFormPage = ({ userId }: { userId?: string }) => {
  console.log(userId);

  return (
    <>
      <DefaultLayout>
        <Breadcrumb pageName="Add Blog" />
        <AddBlogForm />
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

export const PushNotificationsPage = () => {
  return (
    <>
      <DefaultLayout>
        <Breadcrumb pageName="Add Push Notifications Page" />
        <PushNotifications />
      </DefaultLayout>
    </>
  );
};

export const TermsAndConditionsPage = () => {
  return (
    <>
      <DefaultLayout>
        <Breadcrumb pageName="Add Terms and Conditions Page" />
        <TermsAndConditions />
      </DefaultLayout>
    </>
  );
};

export const PrivacyPolicyPage = () => {
  return (
    <>
      <DefaultLayout>
        <Breadcrumb pageName="Privacy Policy Page" />
        <PrivacyPolicy />
      </DefaultLayout>
    </>
  );
};

export const HelpAndSupportPage = () => {
  return (
    <>
      <DefaultLayout>
        <Breadcrumb pageName="Help and Support Page" />
        <HelpAndSupport />
      </DefaultLayout>
    </>
  );
};

export const RefundAndCancellationPage = () => {
  return (
    <>
      <DefaultLayout>
        <Breadcrumb pageName="Refund and Cancellation Page" />
        <RefundAndCancellation />
      </DefaultLayout>
    </>
  );
};

export const DataDeletationRequestPage = () => {
  return (
    <>
      <DefaultLayout>
        <Breadcrumb pageName="Data Deletation Request Page" />
        <DataDeletationRequest />
      </DefaultLayout>
    </>
  );
};

export const DocumentListPage = () => {
  return (
    <>
      <DefaultLayout>
        <Breadcrumb pageName="Document List" />
        <DocumentList />
      </DefaultLayout>
    </>
  );
};

export const AddDocumentPage = () => {
  return (
    <>
      <DefaultLayout>
        <Breadcrumb pageName="Add Document Page" />
        <AddDocument />
      </DefaultLayout>
    </>
  );
};

export const AccountSettingsPage = () => {
  return (
    <>
      <DefaultLayout>
        <Breadcrumb pageName="Account Settings" />
        <AccountSettings />
      </DefaultLayout>
    </>
  );
};
