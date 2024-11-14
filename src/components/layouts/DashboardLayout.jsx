import React from "react";
import { Outlet } from "react-router-dom";

import Sidemenu from "../sidemenu/Sidemenu";
import NavigationBar from "./NavigationBar";

export default function DashboardLayout() {
  return (
    <>
      <div className="relative">
        {/* navigation bar */}
        <NavigationBar />

        {/* body */}
        <div className="h-full bg-[#edf2f5] md:max-w-[90%] mx-auto min-h-screen p-[3px] md:mt-[60px] mt-[120px] relative overflow-hidden">
          <Sidemenu />
          <div className="py-6 md:pl-1 min-w-[90%] md:ml-[60px] ">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
}
