import React, { useState } from "react";
import Search from "../../assets/images/svgs/search.svg?react"; 

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
            className={`text-gray-800 text-[12px] shrink-0 font-medium py-2 ${
              activeTab === tab.label
                ? "!text-[#a97e24] border-b-2 border-[#a97e24]"
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

      <div className="">
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
