import React, { useState } from "react";
import banner from "../../assets/images/banner.png";
import logo from "../../assets/images/svgs/logo.svg";
import menuIcon from "../../assets/icons/hamburger.png";
import {
  imgs,
  links,
  pilesItems,
  pilesItems2,
  rightLinks,
} from "../../assets/core/data";
import Piles from "../../components/piles/_component";
import StayConnected from "./stay_connected";
import Welcome from "./welcome";
import WhatCanDo from "./what_can_do";
import CatchEveryEvent from "./catch_every_event";
import News from "./news";
import ReadyToAssist from "./ready_to_assist";
import Footer from "./footer";
import Underline from "../../components/underline/_component";
import bullet from "../../assets/images/svgs/bullet.svg";
import Testimonials from "./testimonials";
import { AiOutlineClose } from "react-icons/ai";

function Homepage() {
  const [handleNav, setHandleNav] = useState(false);

  const handleNavToggle = () => {
    setHandleNav(!handleNav);
  };

  return (
    <>
      <section>
        <div className="relative">
          <div>
            <img
              className="md:object-fill object-cover w-full md:h-screen h-[90vh]"
              src={banner}
            />
          </div>
          <div className="absolute top-0 w-full">
            <div className="flex items-center justify-between md:max-w-[1100px] py-[13px] mx-auto text-[13px] text-white px-4 md:bg-transparent md:backdrop-blur-0 backdrop-blur-lg bg-[#ece9e92f]">
              <div>
                <img
                  src={logo}
                  className="object-contain md:w-[3.55rem] w-[2.55rem]"
                />
              </div>
              <img
                src={menuIcon}
                onClick={handleNavToggle}
                className="object-contain md:hidden block"
              />
              <div className="hidden md:block">
                {links.map((ll, i) => (
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
            <div className="md:max-w-[1100px] mt-24 p-[40px] md:p-[150px] border-[1px] border-none rounded-[32px] mx-4  md:mx-auto backdrop-blur-sm bg-[#ece9e914]">
              <div className="mb-8 text-[29px] md:text-5xl text-center text-white">
                <h3 className="custom-underline">Connecting you to</h3>
                <Underline className="flex w-[230px] m-auto" />

                <h3>Africa</h3>
              </div>
              <div className="flex items-center justify-center gap-3 flex-wrap">
                {pilesItems.map((pl, i) => (
                  <div>
                    <div className="px-[12px] py-[6px] bg-white rounded-full opacity-60">
                      <div className="flex text-[#2E2E2E] items-center justify-center text-[13px] list-disc">
                        <img src={bullet} className="pr-[5px]" alt="bullet" />
                        {pl.label}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex items-center justify-center gap-3 pt-3 flex-wrap">
                {pilesItems2.map((pl, i) => (
                  <div>
                    <div className="px-[13px] py-[6px] bg-white rounded-full opacity-60">
                      <div className="flex text-[#2E2E2E] items-center justify-center text-[13px] list-disc">
                        <img src={bullet} className="pr-[5px]" alt="bullet" />
                        {pl.label}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <StayConnected />
        <Welcome />
        <WhatCanDo />
        <div className="bg-[#EEF2F5]">
          <CatchEveryEvent />
          <Testimonials />
          {/* <News /> */}
        </div>
        <ReadyToAssist />
        <Footer />
      </section>

      {/* responsive nav */}
      <div
        id="mySidenav"
        className={`h-full fixed top-0 right-0 bg-[#121212] z-[100] ${
          handleNav ? "w-1/2" : "w-0"
        }`}
      >
        <div className="text-black items-center flex justify-end py-3 px-5">
          <div>
            <AiOutlineClose
              size={"1.7em"}
              onClick={handleNavToggle}
              className="cursor-pointe mt-2"
              color="#FFF"
            />
          </div>
        </div>
        <div className="mt-0 text-[14px]">
          {links.map((ll, i) => (
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

export default Homepage;
