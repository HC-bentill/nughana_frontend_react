import React, { useEffect, useRef, useState } from "react";
import NuGhanaLogo from "../../assets/images/svgs/logo.svg?react";
import Search from "../../assets/images/svgs/search.svg?react";
import BellIcon from "../../assets/icons/bell.svg?react";
import ThreeDotsMenu from "../../assets/icons/ThreeDotsMenu.png";
import HomeMobile from "../../assets/icons/Home_mobile.png";
import EventAd from "../../assets/icons/eventAd.png";
import SupportIcon from "../../assets/icons/customer_service.png";

import Dropdown from "../../assets/icons/dropdown.svg?react";
import { profileMenuNavigation, sidemenuIcons } from "../../assets/core/data";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";
import { BsChevronRight } from "react-icons/bs";
import MobileMenuItem from "../mobileMenuItem/MobileMenuItem";
import RoundedLeftChev from "../../assets/icons/rounded_chev_left.png";

const NavigationBar = () => {
  const navigate = useNavigate();
  let location = useLocation();
  const [handleNav, setHandleNav] = useState(false);
  const [handleMenuNav, setHandleMenuNav] = useState(false);

  // Create a ref for the sidebar container
  const sidenavRef = useRef(null);

  // Toggle the navigation visibility
  const handleProfileNavToggle = () => setHandleNav(!handleNav);
  const handleMenuNavToggle = () => setHandleMenuNav(!handleMenuNav);

  // Close the navigation when clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event) => {
      // If click is outside the sidenav
      if (sidenavRef.current && !sidenavRef.current.contains(event.target)) {
        setHandleNav(false);
      }
    };

    // Add the event listener when the component mounts
    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup the event listener when the component unmounts
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <div className="z-50 fixed w-full top-0">
        <div className="border-b-[0.5px] border-[#bfbfbf64] bg-[white]">
          <div className="flex items-center md:gap-0 gap-4 justify-between py-3 mx-auto md:max-w-[90%] md:px-0 px-7">
            <div className="">
              <img
                onClick={() => navigate("/dashboard")}
                src={NuGhanaLogo}
                alt="img"
                className="w-[40px] h-[40px] md:ml-[18px] shadow-sm"
              />
            </div>
            <div className="border-[#E5E5E7] border rounded-[30px] flex items-center gap-2 w-52 md:w-72">
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
            <div className="flex items-center md:gap-5">
              <div className="bg-[#F9FAFB] p-[1px] rounded-full">
                <img
                  src={BellIcon}
                  alt="img"
                  className="w-[12px] md:block hidden cursor-pointer h-[12px] object-contain shadow-sm m-2"
                />
              </div>
              <div
                className="flex items-center"
                onClick={() => handleProfileNavToggle()}
              >
                <div className="bg-red-400 rounded-full px-[1.5px] py-[2px] cursor-pointer">
                  <div className="bg-transparent border-[2px] border-white rounded-full px-[10px] py-[2px] cursor-pointer">
                    d
                  </div>
                </div>
                <img
                  src={Dropdown}
                  alt="img"
                  className="w-[12px] md:block hidden  h-[12px] object-contain shadow-sm m-2"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* mobile only top menu */}
      <div className=" bg-[white] w-full md:hidden block fixed top-[63px] z-20">
        <div className="flex items-center justify-between py-2 px-8 pt-3">
          <div className="flex flex-col items-center">
            <img
              onClick={() => navigate("/dashboard")}
              src={HomeMobile}
              alt="img"
              className="cursor-pointer object-contain"
            />
            <p className="text-[8px] pt-1">Home</p>
          </div>

          {sidemenuIcons?.slice(0, 3).map((item, idx) => (
            <div className="flex flex-col items-center">
              <img
                onClick={() => navigate(item.route)}
                key={idx}
                src={item.mobileIcon}
                alt="img"
                className="cursor-pointer object-contain"
              />
              <p className="text-[8px] pt-1">{item.label}</p>
            </div>
          ))}
          <div
            className="flex flex-col items-center mt-2 cursor-pointer"
            onClick={() => handleMenuNavToggle()}
          >
            <img
              onClick={() => handleProfileNavToggle}
              src={ThreeDotsMenu}
              alt="img"
              className="cursor-pointer object-contain"
            />
            <p className="text-[8px] pt-5 mt-[-5px]">More</p>
          </div>
        </div>
      </div>

      {/* responsive profile nav */}
      <div
        id="mySidenav"
        ref={sidenavRef}
        className={`h-full fixed top-0 right-0 bg-[white] overflow-x-hidden z-30 shadow ${
          handleNav ? "w-[75%]" : "w-0"
        }`}
      >
        <div className="text-black items-center flex justify-end py-3 px-5 mt-[60px]">
          <div>
            <AiOutlineClose
              size={"1em"}
              onClick={handleProfileNavToggle}
              className="cursor-pointer mt-2"
              color="black"
            />
          </div>
        </div>
        <div className="mt-0 text-[14px] h-full w-[86%] mx-auto">
          <div className="flex gap-3 items-center bg-[#F8F9FA] border border-gray-100 rounded-[20px] p-[25px]">
            <div className="bg-red-400 rounded-full px-[1px] py-[2px] cursor-pointer">
              <div className="bg-transparent border-[2px] border-white rounded-full px-[20px] py-[14px] cursor-pointer">
                d
              </div>
            </div>
            <div>
              <p className="text-[16px]">Kacy M. Barlet</p>
              <p className="text-[13px] text-[#AF7E00]">View my profile</p>
            </div>
          </div>

          <div className="pt-5">
            {profileMenuNavigation?.map((item, idx) => (
              <MobileMenuItem
                key={idx}
                icon={item.icon}
                label={item.label}
                badge={item.badge}
                onSelect={handleProfileNavToggle}
              />
            ))}
            <img alt="img" src={EventAd} className="my-4" />
            <MobileMenuItem icon={SupportIcon} label={"Support"} badge={9}  onSelect={handleProfileNavToggle}/>
          </div>
        </div>
      </div>

      {/* responsive menu nav */}
      <div
        className={`h-full fixed top-0 right-0 bg-[white] overflow-x-hidden z-30 shadow ${
          handleMenuNav ? "w-[100%]" : "w-0"
        }`}
      >
        <div className="mt-[96px] text-[14px] w-[86%] mx-auto">
          <div className="flex justify-between items-center">
            <img
              onClick={handleMenuNavToggle}
              className="cursor-pointer"
              src={RoundedLeftChev}
              alt=""
            />
            <p className="font-semibold text-[16px]">Menu</p>
            <div></div>
          </div>

          <div className="pt-5 font-light">
            <div className="border-b-[1px] border-t-[1px] border-gray-100 py-1">
              <MobileMenuItem
                icon={HomeMobile}
                label={'Home'}
                href={'/dashboard'}
                onSelect={handleMenuNavToggle}
              />
            </div>
            {sidemenuIcons?.map((item, idx) => (
              <div className="border-b-[1px] border-gray-100 py-1">
                <MobileMenuItem
                  key={idx}
                  icon={item.mobileIcon}
                  label={item.label}
                  href={item.route}
                  onSelect={handleMenuNavToggle}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default NavigationBar;
