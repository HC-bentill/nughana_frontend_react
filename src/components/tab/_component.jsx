import React, { useState } from "react";
import Search from "../../assets/images/svgs/search.svg?react"; 

const Tabs = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(tabs[0].label);

  return (
    <div>
      <div className=" border-t pt-3 md:mt-6 mt-0 mb-6 md:px-0 px-4 border-b border-[#E5E7EB]  flex gap-9 overflow-x-scroll hide-scrollbar">
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
          </button>
        ))}
      </div>

      {/* <div className="border-[#E5E5E7] bg-[#ffffff] border rounded-[30px] flex items-center gap-2 w-[90%] mx-auto md:hidden">
        <img
          src={Search}
          alt="img"
          className="w-[24px] h-[24px] shadow-sm m-2"
        />
        <input
          className="text-sm font-light bg-[#ffffff] !w-full border-0 outline-none"
          type="text"
          placeholder="Search Connections"
        />
      </div> */}

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
