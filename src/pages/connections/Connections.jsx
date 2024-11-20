import React, { useEffect, useState } from "react";
import Search from "../../assets/images/svgs/search.svg?react";
import Tabs from "../../components/tab/_component";
import YourConnections from "./YourConnections";
import AllConnections from "./AllConnections";
import FavouriteConnections from "./FavouriteConnections";
import Messages from "./Messages";
import { useQuery } from "react-query";
import { GetConnections } from "../../api/connections.service";
import { Loader } from "../../components/loader/_component";
import ConnectionTray from "../../components/connection_tray/_component";

let searchKeywordTimer;

function Connections() {
  const [searchWord, setSearchWord] = useState("");
  const [activeTab, setActiveTab] = useState(0);

  const tabOptions = [
    {
      label: "Your Connections",
      key: "personal",
      description: "People you are connected to",
    },
    {
      label: "All Connections",
      key: "all",
      description: "Explore Connections",
    },
    {
      label: "Favourite Connections",
      key: "following",
      description: "Your favourite connections",
    },
  ];

  const connections = useQuery({
    retry: (count, err) => count < 3,
    refetchOnWindowFocus: false,
    queryKey: ["connections", tabOptions[activeTab]?.key],
    queryFn: () =>
      GetConnections(tabOptions[activeTab]?.key, searchWord).then(
        (res) => res?.data
      ),
  });

  useEffect(() => {
    clearTimeout(searchKeywordTimer); // each time the keyword changes, clear the timer and start a new one
    searchKeywordTimer = setTimeout(() => {
      connections.refetch();
    }, 700);
  }, [searchWord, activeTab]);

  const groupByFirstLetter = (data) => {
    return data?.reduce((acc, ct) => {
      // Safely get the first and last names, with fallback values if they're undefined
      const firstName = `${
        ct?.xprofile?.groups["1"]?.fields["1"]?.value?.raw || ""
      } ${
        ct?.xprofile?.groups["1"]?.fields["2"]?.value?.raw || ""
      }`.toLowerCase();
      const firstLetter = firstName[0]?.toUpperCase() || "Other"; // Fallback to 'Other' if the name doesn't start with a letter
      if (!acc[firstLetter]) {
        acc[firstLetter] = [];
      }
      acc[firstLetter].push(ct);
      return acc;
    }, {});
  };

  const groupedData = groupByFirstLetter(connections?.data);

  return (
    <>
      <div className="md:flex justify-between md:ml-8 md:px-0 gap-5">
        <div className="lg:w-[55%] md:w-[96%] w-full">
          <div className="md:flex items-center">
            <h2 className="font-bold text-[22px] mr-7 md:flex hidden">
              Connections
            </h2>
            <div className="border-[#E5E5E7] bg-[#ffffff] border rounded-[30px] flex items-center gap-2 md:w-72 w-[90%] md:mx-0 mx-auto md:mb-0 mb-7">
              <img
                src={Search}
                alt="img"
                className="w-[24px] h-[24px] shadow-sm m-2"
              />
              <input
                className="text-sm font-light bg-[#ffffff] border-0 outline-none w-full"
                type="text"
                placeholder="Search Connections"
                onChange={(e) => setSearchWord(e.target.value)}
              />
            </div>
          </div>

          <div>
            <div className=" border-t pt-3 md:mt-6 mt-0 mb-6 md:px-0 px-4 border-b border-[#E5E7EB]  flex gap-9 overflow-x-scroll hide-scrollbar">
              {tabOptions.map((tab, i) => (
                <button
                  key={tab.label}
                  onClick={() => setActiveTab(i)}
                  className={`text-gray-800 text-[12px] shrink-0 font-medium py-2 ${
                    activeTab === i
                      ? "!text-[#a97e24] border-b-2 border-[#a97e24]"
                      : "text-gray-600"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            <div className="">
              <p className="text-[16px] font-semibold md:w-auto w-[94%] mx-auto my-7">
                {tabOptions[activeTab]?.description}
              </p>

              {connections?.isLoading || connections?.isFetching ? (
                <div className="inset-0 flex justify-center bg-opacity-70 items-center z-[99] min-h-[50vh]">
                  <Loader />
                </div>
              ) : (
                <div>
                  {Object.keys(groupedData)?.length > 0 ? (
                    <>
                      {" "}
                      {Object.keys(groupedData)
                        .sort()
                        .map((letter) => (
                          <div key={letter}>
                            <h3 className="text-[#424242] my-5 ml-4">
                              {letter}
                            </h3>
                            {groupedData[letter]?.map((ct, i) => (
                              <div key={i}>
                                <ConnectionTray
                                  profileImg={ct?.avatar_urls?.thumb}
                                  name={`${
                                    ct?.xprofile?.groups["1"]?.fields["1"]
                                      ?.value?.raw || ""
                                  } ${
                                    ct?.xprofile?.groups["1"]?.fields["2"]
                                      ?.value?.raw || ""
                                  }`}
                                  username={
                                    ct?.xprofile?.groups["1"]?.fields["3"]
                                      ?.value?.raw || "Unknown Username"
                                  }
                                />
                              </div>
                            ))}
                          </div>
                        ))}
                    </>
                  ) : (
                    <p className="text-center text-gray-500 text-[13px]">
                      No Connections Found
                    </p>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="hidden xl:block">
          <Messages />
        </div>
      </div>
    </>
  );
}

export default Connections;
