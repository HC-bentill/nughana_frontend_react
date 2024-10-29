import React from "react";
import banner from "../../assets/images/banner.png";
import logo from "../../assets/images/svgs/logo.svg";
import { imgs, links, pilesItems, rightLinks } from "../../assets/core/data";
import Piles from "../../components/piles/_component";
import StayConnected from "./stay_connected";
import Welcome from "./welcome";
import WhatCanDo from "./what_can_do";
import CatchEveryEvent from "./catch_every_event";
import News from "./news";
import ReadyToAssist from "./ready_to_assist";
import Footer from "./footer";

function Homepage() {
  return (
    <>
      <section>
        <div className="relative">
          <div>
            <img className="object-fill w-full h-screen" src={banner} />
          </div>
          <div className="absolute top-0 w-full">
            <div className="flex items-center justify-between px-56 text-sm text-white">
              <div>
                <img src={logo} className="object-cover w-[3.25rem]" />
              </div>
              <div>
                {links.map((ll, i) => (
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
            <div className="flex mt-24 flex-col items-center justify-center mx-56 p-24 border-[1px] border-none rounded-2xl m-auto backdrop-blur-lg">
              <div className="mb-8 text-5xl text-center text-white">
                <h3 className="custom-underline">Connecting you to</h3>
                <img
                  className="flex w-1/2 m-auto"
                  src={imgs.underline}
                  alt=""
                />
                <h3>Africa</h3>
              </div>
              <div className="grid grid-cols-3 gap-3">
                {pilesItems.map((pl, i) => (
                  <div className={i >= 3 ? "w-full" : ""} key={i}>
                    <Piles name={pl.label} />
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
          <News />
        </div>
        <ReadyToAssist />
        <Footer />
      </section>
    </>
  );
}

export default Homepage;
