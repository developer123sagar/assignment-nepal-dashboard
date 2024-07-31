import React, { useState } from 'react';

interface TabProps {
  label: string;
  content: React.ReactNode;
}

const TabsStructure: React.FC<{ tabs: TabProps[] }> = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="flex border-b">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`py-2 px-4 border-b-2 transition-colors duration-300 ${
              activeTab === index
                ? 'border-blue-500 text-blue-500'
                : 'border-transparent text-gray-500 hover:text-blue-500'
            }`}
            onClick={() => setActiveTab(index)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="p-4">
        {tabs[activeTab].content}
      </div>
    </div>
  );
};

export default TabsStructure;
