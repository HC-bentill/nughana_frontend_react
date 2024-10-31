import React from "react";
import { links, navLinks, rightLinks } from "../../assets/core/data";
import logo from "../../assets/images/svgs/logo.svg";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  return (
    <>
      <div className="absolute top-0 z-30 w-full px-56">
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
      </div>
    </>
  );
}

export default Navbar;
