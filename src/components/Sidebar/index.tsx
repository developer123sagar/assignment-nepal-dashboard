import { useEffect, useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../../images/logo/logo.png';
import SidebarMenu from './SidebarMenu';
import UnverifiedIcon from '../icons/UnverifiedIcon';
import DocumentIcon from '../icons/DocumentIcon';
import WorkerIcon from '../icons/Worker';
import {
  FaTachometerAlt,
  FaListAlt,
  FaCashRegister,
  FaBlog,
  FaBell,
  FaFileAlt,
  FaBuilding,
  FaUsers,
} from 'react-icons/fa';
import { GrUserWorker } from 'react-icons/gr';
import { RootState, useAppSelector } from '@/redux/store';

interface SidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: (arg: boolean) => void;
}

const menuSection = [
  {
    title: 'Dashboard',
    icon: <FaTachometerAlt size={25} />,
    path: '/dashboard',
  },
];

const serviceMenuSection = [
  // Category
  {
    title: 'All Task',
    icon: <FaListAlt size={25} />,
    path: '/all-task',
  },
];

const userMenuSection = [
  {
    title: 'Company',
    icon: <FaBuilding size={25} />,
    path: '/company',
    subItems: [
      {
        title: 'Company List',
        path: '/company/company-list',
        icon: <FaBuilding size={25} />,
      },
      {
        title: 'Company Request List',
        path: '/company/company-request-list',
        icon: <FaBuilding size={25} />,
      },
      // {
      //   title: 'Company Worker List',
      //   path: '/company/worker-list',
      //   icon: <CompanyIcon />,
      // },
      // {
      //   title: 'Company Client List',
      //   path: '/company/client-list',
      //   icon: <CompanyIcon />,
      // },
    ],
  },

  // Company
  {
    title: 'Worker',
    icon: <GrUserWorker size={25} />,
    path: '/worker',
    subItems: [
      {
        title: 'Worker List',
        path: '/worker/worker-list',
        icon: <WorkerIcon />,
      },
      {
        title: 'Worker Request List',
        path: '/worker/worker-request-list',
        icon: <WorkerIcon />,
      },
      {
        title: 'Worker Type List',
        path: '/worker/worker-type-list',
        icon: <WorkerIcon />,
      },
    ],
  },

  // Unverified User List
  {
    title: 'Unverified User List',
    path: '/unverified-user-list',
    icon: <UnverifiedIcon />,
  },
  {
    title: 'Client List',
    path: '/customer-list',
    icon: <FaUsers size={25} />,
  },
  {
    title: 'Watcher List',
    path: '/watcher-list',
    icon: <FaUsers size={25} />,
  },
];

const transactionMenuSection = [
  {
    title: 'Payment',
    path: '/subscriptions-payment',
    icon: <FaCashRegister size={25} />,
  },

  {
    title: 'Worker Earning',
    path: '/subscriptions-worker-earning',
    icon: <WorkerIcon />,
  },
];

const systemMenuSection = [
  {
    title: 'Blog',
    path: '/blog',
    icon: <FaBlog size={25} />,
  },
  {
    title: 'Push Notification',
    path: '/push-notification',
    icon: <FaBell size={25} />,
  },
  {
    title: 'Pages',
    path: '/pages',
    icon: <FaFileAlt size={25} />,
    subItems: [
      {
        title: 'Terms-and-conditions-page',
        path: '/pages/terms-and-conditions',
        icon: <FaFileAlt size={25} />,
      },
      {
        title: 'Privacy Policy',
        path: '/pages/privacy-policy',
        icon: <FaFileAlt size={25} />,
      },
      {
        title: 'Help and Support',
        path: '/pages/help-and-support',
        icon: <FaFileAlt size={25} />,
      },
      {
        title: 'Refund and Cancellation Page',
        path: '/pages/refund-and-cancellation-page',
        icon: <FaFileAlt size={25} />,
      },
      {
        title: 'Data Deletion Request Page',
        path: '/pages/data-deletation-request-page',
        icon: <FaFileAlt size={25} />,
      },
    ],
  },
  {
    title: 'Document',
    path: '/document',
    icon: <DocumentIcon />,

    subItems: [
      {
        title: 'Document List',
        path: '/document/document-list',
        icon: <DocumentIcon />,
      },
      {
        title: 'Add Document',
        path: '/document/add-document',
        icon: <DocumentIcon />,
      },
    ],
  },
  {
    title: 'Setting',
    path: '/pages/settings',
    icon: <DocumentIcon />,
  },
];

const Sidebar = ({ sidebarOpen, setSidebarOpen }: SidebarProps) => {
  const trigger = useRef<any>(null);
  const sidebar = useRef<any>(null);

  const { role } = useAppSelector((state: RootState) => state.task);

  const storedSidebarExpanded = localStorage.getItem('sidebar-expanded');
  const [sidebarExpanded, setSidebarExpanded] = useState(
    storedSidebarExpanded === null ? false : storedSidebarExpanded === 'true',
  );

  const getFilteredSystemMenuSection = () => {
    if (role === 'employer') {
      return systemMenuSection.filter(
        (item) =>
          item.title !== 'Document' &&
          item.title !== 'Setting' &&
          item.title !== 'Blog',
      );
    }
    return systemMenuSection;
  };
  const getFilteredCompanyMenuSection = () => {
    if (role === 'employer') {
      return userMenuSection.filter(
        (item) =>
          item.title !== 'Company' &&
          item.title !== 'Setting' &&
          item.title !== 'Blog',
      );
    }
    return userMenuSection;
  };

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }: MouseEvent) => {
      if (!sidebar.current || !trigger.current) return;
      if (
        !sidebarOpen ||
        sidebar.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setSidebarOpen(false);
    };
    document.addEventListener('click', clickHandler);
    return () => document.removeEventListener('click', clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }: KeyboardEvent) => {
      if (!sidebarOpen || keyCode !== 27) return;
      setSidebarOpen(false);
    };
    document.addEventListener('keydown', keyHandler);
    return () => document.removeEventListener('keydown', keyHandler);
  });

  useEffect(() => {
    localStorage.setItem('sidebar-expanded', sidebarExpanded.toString());
    if (sidebarExpanded) {
      document.querySelector('body')?.classList.add('sidebar-expanded');
    } else {
      document.querySelector('body')?.classList.remove('sidebar-expanded');
    }
  }, [sidebarExpanded]);

  return (
    <aside
      ref={sidebar}
      className={`absolute left-0 top-0 z-9999 flex h-screen w-72.5 flex-col overflow-y-hidden bg-white text-black duration-300 ease-linear dark:bg-boxdark lg:static lg:translate-x-0 ${
        sidebarOpen ? 'translate-x-0' : '-translate-x-full'
      }`}
    >
      {/* <!-- SIDEBAR HEADER --> */}
      <div className="flex items-center justify-between gap-2 px-6 py-5.5 lg:py-6.5 w-5/6">
        <NavLink to="/dashboard">
          <img src={Logo} alt="Logo" />
        </NavLink>

        <button
          ref={trigger}
          onClick={() => setSidebarOpen(!sidebarOpen)}
          aria-controls="sidebar"
          aria-expanded={sidebarOpen}
          className="block lg:hidden"
        ></button>
      </div>

      {/* <!-- Sidebar Menu --> */}
      <div className="no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear">
        <nav className="py-3 px-4 lg:mt-9 lg:px-6">
          {/* <!-- Menu Item Dashboard --> */}
          <div>
            <SidebarMenu
              sidebarExpanded={sidebarExpanded}
              setSidebarExpanded={setSidebarExpanded}
              menuItems={menuSection}
              mainTitle="MENU"
            />
          </div>
          <hr />

          {/* <!-- Service Item Dashboard --> */}
          <div>
            <SidebarMenu
              sidebarExpanded={sidebarExpanded}
              setSidebarExpanded={setSidebarExpanded}
              menuItems={serviceMenuSection}
              mainTitle="TASKS"
            />
          </div>
          <hr />

          {/* User Section Menu */}
          <div>
            <SidebarMenu
              sidebarExpanded={sidebarExpanded}
              setSidebarExpanded={setSidebarExpanded}
              menuItems={getFilteredCompanyMenuSection()}
              mainTitle="COMPANY"
            />
          </div>
          <hr />

          {/* Transaction Section Menu */}
          <div>
            <SidebarMenu
              sidebarExpanded={sidebarExpanded}
              setSidebarExpanded={setSidebarExpanded}
              menuItems={transactionMenuSection}
              mainTitle="TRANSACTION"
            />
          </div>
          <hr />

          {/* System Section Menu */}
          {role === 'admin' && (
            <div>
              <SidebarMenu
                sidebarExpanded={sidebarExpanded}
                setSidebarExpanded={setSidebarExpanded}
                menuItems={getFilteredSystemMenuSection()}
                mainTitle="SYSTEM"
              />
            </div>
          )}
          <hr />
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
