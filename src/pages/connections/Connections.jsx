import React from "react";
import Search from "../../assets/images/svgs/search.svg?react";
import Tabs from "../../components/tab/_component";
import { connectionTrayItems } from "../../assets/core/data";
import ConnectionTray from "../../components/connection_tray/_component";

function Connections() {
  const tabOptions = [
    {
      label: "Your Connections",
      content: (
        <div className="">
          <p className="text-sm font-semibold">People you are connected to</p>

          {connectionTrayItems.map((ct, i) => (
            <div key={i}>
              <h3 className="text-[#424242] my-8 ml-6">{ct.section}</h3>
              {ct.tray.map((tray, j) => (
                <ConnectionTray
                  key={j}
                  profileImg={tray.img}
                  name={tray.name}
                  username={tray.username}
                />
              ))}
            </div>
          ))}
        </div>
      ),
    },
    {
      label: "All Connections",
      content: (
        <div className="">
          <p className="text-sm font-semibold">Explore connections</p>

          {connectionTrayItems.map((ct, i) => (
            <div key={i}>
              <h3 className="text-[#424242] my-8 ml-6">{ct.section}</h3>
              {ct.tray.map((tray, j) => (
                <ConnectionTray
                  key={j}
                  profileImg={tray.img}
                  name={tray.name}
                  username={tray.username}
                />
              ))}
            </div>
          ))}
        </div>
      ),
    },
    {
      label: "Favourite Connections",
      content: (
        <div className="">
          <p className="text-sm font-semibold">Your favourite connections</p>

          {connectionTrayItems.map((ct, i) => (
            <div key={i}>
              <h3 className="text-[#424242] my-8 ml-6">{ct.section}</h3>
              {ct.tray.map((tray, j) => (
                <ConnectionTray
                  key={j}
                  profileImg={tray.img}
                  name={tray.name}
                  username={tray.username}
                />
              ))}
            </div>
          ))}
        </div>
      ),
    },
  ];

  return (
    <>
      <div className="ml-8">
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
    </>
  );
}

export default Connections;
