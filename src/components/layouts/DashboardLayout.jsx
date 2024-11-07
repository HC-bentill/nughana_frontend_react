import React from "react";
import { Outlet } from "react-router-dom";
import NuGhanaLogo from "../../assets/images/svgs/logo.svg?react";
import Search from "../../assets/images/svgs/search.svg?react";
import BellIcon from "../../assets/icons/bell.svg?react";
import Dropdown from "../../assets/icons/dropdown.svg?react";
import Sidemenu from "../sidemenu/Sidemenu";

export default function DashboardLayout() {
  return (
    <>
      <div className="relative">
        {/* navigation bar */}
        <div className="border-b-[0.5px] border-[#bfbfbf] bg-[white] z-40 fixed w-full top-0">
          <div className="flex items-center justify-between py-3 mx-auto max-w-[90%] ">
            <div className="">
              <img
                src={NuGhanaLogo}
                alt="img"
                className="w-[40px] h-[40px] ml-[18px] shadow-sm"
              />
            </div>
            <div className="border-[#E5E5E7] border rounded-[30px] flex items-center gap-2 w-72">
              <img
                src={Search}
                alt="img"
                className="w-[20px] h-[20px] shadow-sm m-2"
              />
              <input
                className="text-[12px] font-light border-0 outline-none"
                type="text"
                placeholder="Search"
              />
            </div>
            <div className="flex items-center gap-5">
              <div className="bg-[#F9FAFB] p-[1px] rounded-full">
                <img
                  src={BellIcon}
                  alt="img"
                  className="w-[12px] cursor-pointer h-[12px] object-contain shadow-sm m-2"
                />
              </div>
              <div className="flex items-center">
                <div className="bg-red-400 rounded-full px-[1.5px] py-[1.5px] cursor-pointer">
                  <div className="bg-transparent border-[2px] border-white rounded-full px-[10px] py-[2px] cursor-pointer">
                    d
                  </div>
                </div>
                <img
                  src={Dropdown}
                  alt="img"
                  className="w-[12px] h-[12px] object-contain shadow-sm m-2"
                />
              </div>
            </div>
          </div>
        </div>

        {/* body */}
        <div className="h-full bg-[#edf2f5] max-w-[90%] mx-auto flex min-h-screen p-[3px] mt-[60px] relative">
          <Sidemenu />
          <div className="py-6 pl-1 min-w-[90%] ml-[60px]">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
}
