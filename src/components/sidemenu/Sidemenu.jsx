import React from "react";
import HomeIcon from "../../assets/icons/Home_active.png";
import HomeInactiveIcon from "../../assets/icons/Home_inactive.png";
import { sidemenuIcons } from "../../assets/core/data";
import { useLocation, useNavigate, useParams } from "react-router-dom";

export default function Sidemenu() {
  const navigate = useNavigate();
  let location = useLocation();
  return (
    <div className="bg-[#fff] ml-[3px] py-2 flex-col items-center justify-between">
      <img
        onClick={() => navigate("/dashboard")}
        src={location?.pathname === "/dashboard" ? HomeIcon : HomeInactiveIcon}
        alt="img"
        className="cursor-pointer w-[48px] h-[48px] object-contain shadow-sm m-2"
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
