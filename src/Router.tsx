import { Route, Routes } from 'react-router-dom';
import EachUserDashboard from './components/EachUserDashboard/EachUserDashboard';

// transaction section
import { PaymentPage } from './pages/TransactionSectionPages/TransactionCollection';
import { WorkerEarningPage } from './pages/TransactionSectionPages/TransactionCollection';

import PageTitle from './components/PageTitle';
import SignIn from './pages/Authentication/SignIn';
import SignUp from './pages/Authentication/SignUp';
import Calendar from './pages/Calendar';

import Chart from './pages/Chart';
import ECommerceSecond from './pages/Dashboard/ECommerceSecond';
import FormElements from './pages/Form/FormElements';
import FormLayout from './pages/Form/FormLayout';
import Profile from './pages/Profile';
import Settings from './pages/Settings';
import Tables from './pages/Tables';

import NotFoundPage from './pages/NotFoundPage';

// User
import {
  CompanyListPage,
  SuperAdminAddClientPage,
  SuperAdminAddEmployerPage,
  SuperAdminAddWatcherPage,
  SuperAdminAddWorkerPage,
} from './pages/UserSectionPages/Company/CompanyCollection';
import { CompanyRequestListPage } from './pages/UserSectionPages/Company/CompanyCollection';
import { CompanyTypeListPage } from './pages/UserSectionPages/Company/CompanyCollection';

import { WorkerListPage } from './pages/UserSectionPages/Worker/WorkerCollection';
import { WorkerRequestListPage } from './pages/UserSectionPages/Worker/WorkerCollection';
import { WorkerTypeListPage } from './pages/UserSectionPages/Worker/WorkerCollection';

import { ClientListPage } from './pages/UserSectionPages/RemainingPages';
import { UnverifiedUserListPage } from './pages/UserSectionPages/RemainingPages';

import {
  AddCategoryFormPage,
  AddonListPage,
  AddSubCategoryFormPage,
  CategoryPage,
  PackageListPage,
  ServiceListPage,
  SubCategoryPage,
} from './pages/ServiceSectionPages/ServiceCollections';

import {
  AddBlogFormPage,
  AddDocumentPage,
  BlogPage,
  DataDeletationRequestPage,
  DocumentListPage,
  HelpAndSupportPage,
  PrivacyPolicyPage,
  PushNotificationsPage,
  RefundAndCancellationPage,
  TermsAndConditionsPage,
} from './pages/SystemSectionPages/SystemCollections';
import AccountSettingsPage from './pages/AccountSettingsPage';
import ChatPage from './pages/ChatPage';
import WatcherListPage from './components/InteractiveTables/User/watcher/WatcherListPage';
import ViewTask from './pages/View/task/ViewTask';
import EditCompanyRequest from './components/InteractiveTables/User/Company/EditCompanyRequest';

// Top bar menu
const topPaths = [
  {
    key: 'accountSettings',
    path: '/pages/settings',
    element: <AccountSettingsPage />,
  },
  {
    key: 'chatSection',
    path: '/pages/chatSection',
    element: <ChatPage />,
  },
];

// Main Pages Paths
const mainPagesPaths = [
  {
    key: 'signin',
    path: '/',
    element: (
      <>
        <PageTitle title="Signin | Assignment Nepal - Dashboard Powered By Silicontech" />
        <SignIn />
      </>
    ),
    errorElement: <NotFoundPage />,
  },
  {
    key: 'signup',
    path: '/auth/signup',
    element: (
      <>
        <PageTitle title="Signup | Assignment Nepal - Dashboard Powered By Silicontech" />
        <SignUp />
      </>
    ),
  },
  {
    key: 'dashboard',
    path: '/dashboard',
    element: (
      <>
        <PageTitle title="eCommerce Dashboard | Assignment Nepal - Dashboard Powered By Silicontech" />
        <ECommerceSecond />
      </>
    ),
  },
  {
    key: 'calendar',
    path: '/calendar',
    element: (
      <>
        <PageTitle title="Calendar | Assignment Nepal - Dashboard Powered By Silicontech" />
        <Calendar />
      </>
    ),
  },
  {
    key: 'profile',
    path: '/profile',
    element: (
      <>
        <PageTitle title="Profile | Assignment Nepal - Dashboard Powered By Silicontech" />
        <Profile />
      </>
    ),
  },
  {
    key: 'formElements',
    path: '/forms/form-elements',
    element: (
      <>
        <PageTitle title="Form Elements | Assignment Nepal - Dashboard Powered By Silicontech" />
        <FormElements />
      </>
    ),
  },
  {
    key: 'formLayout',
    path: '/forms/form-layout',
    element: (
      <>
        <PageTitle title="Form Layout | Assignment Nepal - Dashboard Powered By Silicontech" />
        <FormLayout />
      </>
    ),
  },
  {
    key: 'tables',
    path: '/tables',
    element: (
      <>
        <PageTitle title="Tables | Assignment Nepal - Dashboard Powered By Silicontech" />
        <Tables />
      </>
    ),
  },
  {
    key: 'settings',
    path: '/settings',
    element: (
      <>
        <PageTitle title="Settings | Assignment Nepal - Dashboard Powered By Silicontech" />
        <Settings />
      </>
    ),
  },
  {
    key: 'chart',
    path: '/chart',
    element: (
      <>
        <PageTitle title="Basic Chart | Assignment Nepal - Dashboard Powered By Silicontech" />
        <Chart />
      </>
    ),
  },
  {
    key: 'authSignin',
    path: '/auth/signin',
    element: (
      <>
        <PageTitle title="Signin | Assignment Nepal - Dashboard Powered By Silicontech" />
        <SignIn />
      </>
    ),
  },
];

// Each User Dashboard Paths
const eachUserDashboardPaths = [
  { key: 'history', path: '/history/:userId', element: <EachUserDashboard /> },
  { key: 'name', path: '/name/:merchantKey', element: <EachUserDashboard /> },
  { key: 'user', path: '/user/:userId', element: <EachUserDashboard /> },
];

// Task Section Paths
const serviceSectionPaths = [
  {
    key: 'category',
    path: '/all-task',
    element: <CategoryPage />,
  },
  {
    key: 'viewtask',
    path: '/all-task/view/:id',
    element: <ViewTask />,
  },
  {
    key: 'add-category',
    path: '/add-category',
    element: <AddCategoryFormPage />,
  },
  {
    key: 'sub-category',
    path: '/sub-category',
    element: <SubCategoryPage />,
  },
  {
    key: 'add-sub-category',
    path: '/add-sub-category',
    element: <AddSubCategoryFormPage />,
  },
  {
    key: 'service-list',
    path: '/service/service-list',
    element: <ServiceListPage />,
  },
  {
    key: 'package-list',
    path: '/service/package-list',
    element: <PackageListPage />,
  },
  {
    key: 'addon-list',
    path: '/service/addon-list',
    element: <AddonListPage />,
  },
];

// User Section Paths
const userSectionPaths = [
  {
    key: 'companyList',
    path: '/company/company-list',
    element: <CompanyListPage />,
  },
  {
    key: 'companyList',
    path: '/company/company-request-list/edit/:id',
    element: <EditCompanyRequest />,
  },
  {
    key: 'companyRequestList',
    path: '/company/company-request-list',
    element: <CompanyRequestListPage />,
  },
  {
    key: 'companyTypeList',
    path: '/company/worker-list',
    element: <CompanyTypeListPage />,
  },
  {
    key: 'WorkerList',
    path: '/worker/worker-list',
    element: <WorkerListPage />,
  },
  {
    key: 'workerRequestList',
    path: '/worker/worker-request-list',
    element: <WorkerRequestListPage />,
  },
  {
    key: 'workerTypeList',
    path: '/worker/worker-type-list',
    element: <WorkerTypeListPage />,
  },
  {
    key: 'unverifiedUserList',
    path: '/unverified-user-list',
    element: <UnverifiedUserListPage />,
  },
  {
    key: 'customerList',
    path: '/customer-list',
    element: <ClientListPage />,
  },
  {
    key: 'watcherList',
    path: '/watcher-list',
    element: <WatcherListPage />,
  },
  {
    key: 'watcher-add',
    path: '/watcher-list/add',
    element: <SuperAdminAddWatcherPage />,
  },
  {
    key: 'add-worker',
    path: '/worker/worker-list/add-worker',
    element: <SuperAdminAddWorkerPage />,
  },
  {
    key: 'add-compnay',
    path: '/company/company-list/add-company',
    element: <SuperAdminAddEmployerPage />,
  },
  {
    key: 'add-client',
    path: '/customer-list/add-customer',
    element: <SuperAdminAddClientPage />,
  },
];

// Transaction Section Paths
const transactionSectionPaths = [
  {
    key: 'subscriptionsPayment',
    path: '/subscriptions-payment',
    element: <PaymentPage />,
  },
  {
    key: 'subscriptionsWorkerEarning',
    path: '/subscriptions-worker-earning',
    element: <WorkerEarningPage />,
  },
];
// System Section Paths

const systemSectionPaths = [
  {
    key: 'blog',
    path: '/blog',
    element: <BlogPage />,
  },
  {
    key: 'blog',
    path: '/add-blog',
    element: <AddBlogFormPage />,
  },
  {
    key: 'push-notification',
    path: '/push-notification',
    element: <PushNotificationsPage />,
  },
  {
    key: 'terms-and-conditions',
    path: '/pages/terms-and-conditions',
    element: <TermsAndConditionsPage />,
  },
  {
    key: 'privacy-policy',
    path: '/pages/privacy-policy',
    element: <PrivacyPolicyPage />,
  },
  {
    key: 'help-and-support',
    path: '/pages/help-and-support',
    element: <HelpAndSupportPage />,
  },
  {
    key: 'refund-and-cancellation-page',
    path: '/pages/refund-and-cancellation-page',
    element: <RefundAndCancellationPage />,
  },
  {
    key: 'data-deletation-request-page',
    path: '/pages/data-deletation-request-page',
    element: <DataDeletationRequestPage />,
  },
  {
    key: 'document-list',
    path: '/document/document-list',
    element: <DocumentListPage />,
  },
  {
    key: 'add-document',
    path: '/document/add-document',
    element: <AddDocumentPage />,
  },
];

const Router = () => {
  return (
    <Routes>
      {mainPagesPaths.map((route) => (
        <Route key={route.key} path={route.path} element={route.element} />
      ))}

      {eachUserDashboardPaths.map((route) => (
        <Route key={route.key} path={route.path} element={route.element} />
      ))}

      {serviceSectionPaths.map((route) => (
        <Route key={route.key} path={route.path} element={route.element} />
      ))}

      {userSectionPaths.map((route) => (
        <Route key={route.key} path={route.path} element={route.element} />
      ))}

      {transactionSectionPaths.map((route) => (
        <Route key={route.key} path={route.path} element={route.element} />
      ))}

      {systemSectionPaths.map((route) => (
        <Route key={route.key} path={route.path} element={route.element} />
      ))}

      {topPaths.map((route) => (
        <Route key={route.key} path={route.path} element={route.element} />
      ))}
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default Router;
