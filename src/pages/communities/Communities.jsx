import React from "react";
import Button from "../../components/button/_component";
import PilesTab from "../../components/piles_tab/_component";
import {
  communitiesSideTray,
  connectionTrayItems,
} from "../../assets/core/data";
import ConnectionTray from "../../components/connection_tray/_component";
import AllCommunities from "./AllCommunities";
import Search from "../../assets/images/svgs/search.svg?react";

function Communities() {
  const tabOptions = [
    {
      label: "Alls",
      content: (
        <div className="">
          <AllCommunities />
        </div>
      ),
    },
    {
      label: "Finance",
      content: <div className="">Finance</div>,
    },
    {
      label: "Start up",
      content: <div className="">Start up</div>,
    },
    {
      label: "Entrepreneur",
      content: <div className="">Entrepreneur</div>,
    },
    {
      label: "Golfing",
      content: <div className="">Golfing</div>,
    },
    {
      label: "Sports",
      content: <div className="">Sports</div>,
    },
  ];
  return (
    <>
      <div className="flex">
        <div className="-mt-6 pt-5 px-5 mr-8 bg-white max-w-[235px]">
          <div className="border-[#E5E5E7] border rounded-[30px] flex items-center gap-2 w-[210px] h-[50px]">
            <img
              src={Search}
              alt="img"
              className="w-[20px] h-[20px] shadow-sm m-2"
            />
            <input
              className="text-sm font-light border-0 outline-none"
              type="text"
              placeholder="Search Communities"
            />
          </div>
          <h3 className="text-[18px] mt-6 font-semibold">Communities</h3>
          <div className="flex flex-col">
            {communitiesSideTray.map((cs, i) => (
              <div key={i} className="flex items-center">
                <img
                  className="w-[32px] h-[32px] mr-3 my-3"
                  src={cs.img}
                  alt="image"
                />
                <p className="text-[14px] font-normal">{cs.name}</p>
              </div>
            ))}
          </div>
        </div>
        <div>
          <div className="bg-[#FED28A] flex justify-center text-center ml-2 border-[7px] border-white rounded-[15px] py-8 w-[1070px] h-[194px]">
            <div>
              <h3 className="font-extrabold text-[22px]">
                Title for Community Banner
              </h3>
              <small className="font-semibold text-[12.7px]">
                Taglines needed
              </small>
              <div className="flex mt-8">
                <Button
                  classNames="bg-black mr-3 w-[186px] text-[12px] !px-5 !py-3 text-xs"
                  name={"Create a community"}
                />
                <Button
                  classNames="bg-[#FED28A] font-semibold !text-black w-[200px] text-[12px] border-[1px] border-black !px-5 !py-3 text-xs"
                  name={"View your communities"}
                />
              </div>
            </div>
          </div>
          <h3 className="mt-12 ml-4 font-semibold text-[18px]">
            Explore communities
          </h3>
          <PilesTab tabs={tabOptions} />
        </div>
      </div>
    </>
  );
}

export default Communities;
