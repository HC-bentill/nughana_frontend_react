import React from "react";
import logo from "../../assets/images/svgs/logo.svg";
import { footerIcons, navLinks } from "../../assets/core/data";

function Footer() {
  return (
    <>
      <div className="flex justify-center p-12 mt-12 text-center text-white bg-black container">
        <div>
          <img
            src={logo}
            alt="logo"
            className="flex justify-center w-12 m-auto mb-8 text-center"
          />
          <h3 className="text-[14px] text-gray-400">Nu Ghana</h3>
          <div className="my-8 md:block flex-col flex justify-center space-y-7">
            {navLinks.map((ll, i) => (
              <a className="md:mr-14 text-[13px]" href={ll.href} key={i}>
                {ll.label}
              </a>
            ))}
          </div>
          <div className="flex justify-center mt-12">
            {footerIcons.map((fi, i) => (
              <a href={fi.href} key={i}>
                <img
                  className="p-2 mr-8 bg-white rounded-full"
                  src={fi.icon}
                  alt=""
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
