import React from "react";
import HomeIcon from "../../assets/icons/Home_active.png";
import HomeInactiveIcon from "../../assets/icons/Home_inactive.png";
import { sidemenuIcons } from "../../assets/core/data";
import { useLocation, useNavigate, useParams } from "react-router-dom";

export default function Sidemenu() {
  const navigate = useNavigate();
  let location = useLocation();
  return (
    <div className="bg-[#fff]  py-2 flex-col items-center justify-between shrink-0 fixed z-30 min-h-screen hidden md:block">
      <img
        onClick={() => navigate("/")}
        src={location?.pathname === "/" ? HomeIcon : HomeInactiveIcon}
        alt="img"
        className={`${
          location?.pathname === "/dashboard" ? "" : ""
        } cursor-pointer w-[48px] h-[48px] object-contain shadow-sm m-2`}
      />
      <div className="h-[1px] my-3 bg-[#E5E5E7]"></div>
      <div className="space-y-5">
        {sidemenuIcons?.map((item, idx) => (
          <img
            onClick={() => navigate(item.route)}
            key={idx}
            src={
              location?.pathname === item.route
                ? item.activeIcon
                : item.inactiveIcon
            }
            alt="img"
            className="cursor-pointer w-[48px] h-[48px] object-contain shadow-sm m-2"
          />
        ))}
      </div>
    </div>
  );
}
