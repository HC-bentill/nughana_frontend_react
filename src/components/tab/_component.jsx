import React, { useState } from "react";

const Tabs = ({ tabs, showBadge, otherClassNames }) => {
  const [activeTab, setActiveTab] = useState(tabs[0].label);

  return (
    <div>
      <div
        className={`${otherClassNames} flex justify-around p-4 bg-gray-100 border-b border-[#E5E7EB]`}
      >
        {tabs.map((tab) => (
          <button
            key={tab.label}
            onClick={() => setActiveTab(tab.label)}
            className={`text-gray-800 text-sm w-52 mr-8 font-medium py-2 ${
              activeTab === tab.label
                ? "!text-[#FEB828] w-52 border-b-2 border-[#FEB828]"
                : "text-gray-600"
            }`}
          >
            {tab.label}
            {showBadge && (
              <span className="ml-3 text-[#EAB308] bg-[#FEF9C3] rounded-lg p-[3px] text-[10px]">
                {tab.badge}
              </span>
            )}
          </button>
        ))}
      </div>

      <div className="p-4">
        {tabs.map((tab) =>
          activeTab === tab.label ? (
            <div key={tab.label} className="tab-content">
              {tab.content}
            </div>
          ) : null
        )}
      </div>
    </div>
  );
};

export default Tabs;
