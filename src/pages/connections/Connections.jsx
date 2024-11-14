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
      <div className="md:flex justify-between md:ml-8 md:px-0 gap-5">
        <div className="flex-1">
          <div className="md:flex items-center">
            <h2 className="font-bold text-[22px] mr-7 md:flex hidden">Connections</h2>
            <div className="border-[#E5E5E7] bg-[#ffffff] border rounded-[30px] flex items-center gap-2 md:w-72 w-[90%] md:mx-0 mx-auto">
              <img
                src={Search}
                alt="img"
                className="w-[24px] h-[24px] shadow-sm m-2"
              />
              <input
                className="text-sm font-light bg-[#ffffff] border-0 outline-none w-full"
                type="text"
                placeholder="Search Connections"
              />
            </div>
          </div>

          <Tabs tabs={tabOptions} />
        </div>
        <div className="hidden xl:block">
          <Messages />
        </div>
      </div>
    </>
  );
}

export default Connections;
