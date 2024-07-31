import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

interface SubMenuItem {
  title: string;
  path: string;
  icon?: React.ReactNode; // Added icon to SubMenuItem
}

interface MenuItem {
  title: string;
  icon: React.ReactNode;
  path: string;
  subItems?: SubMenuItem[];
}

interface SidebarMenuProps {
  sidebarExpanded: boolean;
  setSidebarExpanded: (expanded: boolean) => void;
  menuItems: MenuItem[];
  mainTitle: string;
}

const SidebarMenu = ({
  sidebarExpanded,
  setSidebarExpanded,
  menuItems,
  mainTitle,
}: SidebarMenuProps) => {
  const location = useLocation();
  const { pathname } = location;

  const SidebarLinkGroup = ({
    children,
    activeCondition,
  }: {
    children: (handleClick: () => void, open: boolean) => React.ReactNode;
    activeCondition: boolean;
  }) => {
    const [open, setOpen] = useState<boolean>(activeCondition);

    const handleClick = () => {
      setOpen(!open);
    };

    return <li>{children(handleClick, open)}</li>;
  };

  return (
    <div>
      {/* Menu Group Heading */}
      <h3 className="mb-4 ml-4 text-sm font-semibold dark:text-bodydark2">
        {mainTitle}
      </h3>
      <ul className="mb-6 flex flex-col gap-1.5">
        {menuItems.map((item, index) => {
          const isActive =
            pathname === item.path || pathname.includes(item.path);
          return (
            <SidebarLinkGroup
              key={index}
              activeCondition={isActive}
            >
              {(handleClick, open) => (
                <>
                  <NavLink
                    to={item.path}
                    className={`group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium duration-300 text-black dark:text-bodydark1 ease-in-out hover:bg-slate-600 hover:text-white dark:hover:bg-meta-4 ${
                      isActive && 'bg-slate-600 text-white dark:bg-meta-4'
                    }`}
                    onClick={(e) => {
                      if (item.subItems) {
                        e.preventDefault();
                        sidebarExpanded
                          ? handleClick()
                          : setSidebarExpanded(true);
                      }
                    }}
                  >
                    {item.icon}
                    {item.title}
                    {item.subItems && (
                      <svg
                        className={`absolute right-4 top-1/2 -translate-y-1/2 fill-current ${
                          open ? 'rotate-180' : ''
                        }`}
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M4.41107 6.9107C4.73651 6.58527 5.26414 6.58527 5.58958 6.9107L10.0003 11.3214L14.4111 6.91071C14.7365 6.58527 15.2641 6.58527 15.5896 6.91071C15.915 7.23614 15.915 7.76378 15.5896 8.08922L10.5896 13.0892C10.2641 13.4147 9.73651 13.4147 9.41107 13.0892L4.41107 8.08922C4.08563 7.76378 4.08563 7.23614 4.41107 6.9107Z"
                          fill=""
                        />
                      </svg>
                    )}
                  </NavLink>
                  {item.subItems && (
                    <div
                      className={`translate transform overflow-hidden ${
                        !open && 'hidden'
                      }`}
                    >
                      <ul className="mt-4 mb-5.5 flex flex-col gap-2.5 pl-6">
                        {item.subItems.map((subItem, subIndex) => (
                          <li key={subIndex}>
                            <NavLink
                              to={subItem.path}
                              className={`group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium duration-300 text-black dark:text-bodydark1 ease-in-out hover:bg-slate-600 hover:text-white dark:hover:bg-meta-4 ${
                                pathname === subItem.path && 'bg-slate-600 text-white dark:bg-meta-4'
                              }`}
                            >
                              {subItem.icon} {/* Added icon for subItem */}
                              {subItem.title}
                            </NavLink>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </>
              )}
            </SidebarLinkGroup>
          );
        })}
      </ul>
    </div>
  );
};

export default SidebarMenu;
