import React, { useState } from "react";

const PilesTab = ({ tabs, section, showSection, tabHeader }) => {
  const [activeTab, setActiveTab] = useState(tabs[0].label);

  return (
    <>
      <div>
        <div className={`flex items-center p-4 max-sm:grid max-sm:grid-cols-3`}>
          {showSection && <div>{section}</div>}
          {tabs.map((tab, i) => (
            <button
              key={i}
              onClick={() => setActiveTab(tab.label)}
              className={`text-[#1F2937] max-sm:mb-3 mr-3 rounded-full border-[#9CA3AF] border-[2px] text-[12px] px-4 font-medium py-2 ${
                activeTab === tab.label
                  ? "!text-white !border-none bg-black rounded-full"
                  : "text-gray-600"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="p-4">
          <h3 className="font-semibold text-[18px] ">{tabHeader}</h3>
          {tabs.map((tab) =>
            activeTab === tab.label ? (
              <div key={tab.label} className="tab-content">
                {tab.content}
              </div>
            ) : null
          )}
        </div>
      </div>
    </>
  );
};

export default PilesTab;
