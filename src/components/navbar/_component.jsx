import React, { useState } from "react";
import { links, navLinks, rightLinks } from "../../assets/core/data";
import logo from "../../assets/images/svgs/logo.svg";
import { useNavigate } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";
import menuIcon from "../../assets/icons/hamburger.png";

function Navbar() {
  const navigate = useNavigate();
  const [handleNav, setHandleNav] = useState(false);

  const handleNavToggle = () => {
    setHandleNav(!handleNav);
  };
  return (
    <>
      <div className="absolute top-0 w-full z-30">
        <div className="flex items-center justify-between md:max-w-[1100px] py-[13px] mx-auto text-[13px] text-white px-4 md:bg-transparent md:backdrop-blur-0 backdrop-blur-lg bg-[#ece9e92f]">
          <div>
            <img
              src={logo}
              className="object-contain md:w-[3.55rem] w-[2.55rem]"
              onClick={() => navigate("/")}
            />
          </div>
          <img
            src={menuIcon}
            onClick={handleNavToggle}
            className="object-contain md:hidden block"
          />
          <div className="hidden md:block">
            {navLinks.map((ll, i) => (
              <a className="mr-5" href={ll.href} key={i}>
                {ll.label}
              </a>
            ))}
          </div>
          <div className="hidden md:block">
            {rightLinks.map((ll, i) => (
              <a className={`mr-3 ${ll.className}`} href={ll.href} key={i}>
                {ll.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* <div className="absolute top-0 z-30 w-full px-56">
        <div className="flex items-center justify-between md:max-w-[1100px] pt-5 mx-auto text-[13px] text-white">
          <div className="cursor-pointer" onClick={() => navigate("/")}>
            <img src={logo} className="object-cover w-[3.25rem]" />
          </div>
          <div>
            {navLinks.map((ll, i) => (
              <a className="mr-3" href={ll.href} key={i}>
                {ll.label}
              </a>
            ))}
          </div>
          <div className="">
            {rightLinks.map((ll, i) => (
              <a className={`mr-3 ${ll.className}`} href={ll.href} key={i}>
                {ll.label}
              </a>
            ))}
          </div>
        </div>
      </div> */}

      {/* responsive nav */}
      <div
        id="mySidenav"
        className={`h-full fixed top-0 right-0 bg-[#121212] overflow-x-hidden z-[100] ${
          handleNav ? "w-1/2" : "w-0"
        }`}
      >
        <div className="text-black items-center flex justify-end py-3 px-5">
          <div>
            <AiOutlineClose
              size={"1.7em"}
              onClick={handleNavToggle}
              className="cursor-pointer mt-2"
              color="#FFF"
            />
          </div>
        </div>
        <div className="mt-0 text-[14px]">
          {navLinks.map((ll, i) => (
            <a className="block text-white py-3 px-5" href={ll.href} key={i}>
              {ll.label}
            </a>
          ))}
          {rightLinks.map((ll, i) => (
            <a className="block text-white py-3 px-5" href={ll.href} key={i}>
              {ll.label}
            </a>
          ))}
        </div>
      </div>
    </>
  );
}

export default Navbar;
