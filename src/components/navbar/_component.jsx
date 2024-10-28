import React from "react";
import { links, navLinks, rightLinks } from "../../assets/core/data";
import logo from "../../assets/images/svgs/logo.svg";

function Navbar() {
  return (
    <>
      <div>
        <div className="absolute top-0 w-full">
          <div className="flex items-center justify-between text-sm text-white ">
            <div>
              <img src={logo} className="object-cover w-[4.25rem]" />
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
      </div>
    </>
  );
}

export default Navbar;
