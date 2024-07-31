import React from 'react';
import TabsStructure from './TabsStructure';

const TabsCollections: React.FC = () => {
  const tabs = [
    { label: 'Tab 1', content: 'Content for Tab 1' },
    { label: 'Tab 2', content: 'Content for Tab 2' },
    { label: 'Tab 3', content: 'Content for Tab 3' },
    { label: 'Tab 4', content: 'Content for Tab 4' },
    { 
      label: 'Tab 5', 
      content: (
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Username</label>
            <input 
              type="text" 
              name="username" 
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" 
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input 
              type="email" 
              name="email" 
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" 
            />
          </div>
          <button 
            type="submit" 
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Submit
          </button>
        </form>
      )
    },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <TabsStructure tabs={tabs} />
    </div>
  );
};

export default TabsCollections;
