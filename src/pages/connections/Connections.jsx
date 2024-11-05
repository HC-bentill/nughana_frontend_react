import React from "react";
import Search from "../../assets/images/svgs/search.svg?react";
import Tabs from "../../components/tab/_component";
import YourConnections from "./YourConnections";
import AllConnections from "./AllConnections";
import FavouriteConnections from "./FavouriteConnections";
import Messages from "./Messages";

function Connections() {
  const tabOptions = [
    {
      label: "Your Connections",
      content: (
        <>
          <YourConnections />
        </>
      ),
    },
    {
      label: "All Connections",
      content: (
        <>
          <AllConnections />
        </>
      ),
    },
    {
      label: "Favourite Connections",
      content: <FavouriteConnections />,
    },
  ];

  return (
    <>
      <div className="flex justify-between ml-8">
        <div className="">
          <div className="flex items-center">
            <h2 className="font-bold text-[22px] mr-7">Connections</h2>
            <div className="border-[#E5E5E7] bg-[#ffffff] border rounded-[30px] flex items-center gap-2 w-72">
              <img
                src={Search}
                alt="img"
                className="w-[24px] h-[24px] shadow-sm m-2"
              />
              <input
                className="text-sm font-light bg-[#ffffff] border-0 outline-none"
                type="text"
                placeholder="Search Connections"
              />
            </div>
          </div>

          <div className="bg-gray-100 border-b mt-8 border-[#E5E7EB] w-full" />
          <Tabs tabs={tabOptions} />
        </div>
        <Messages />
      </div>
    </>
  );
}

export default Connections;
