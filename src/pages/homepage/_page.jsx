import React from "react";
import banner from "../../assets/images/banner.png";
import logo from "../../assets/images/svgs/logo.svg";
import { leftLinks, links, pilesItems } from "../../assets/core/data";
import Piles from "../../components/piles/_component";
import StayConnected from "./stay_connected";
import Welcome from "./welcome";
import WhatCanDo from "./what_can_do";
import CatchEveryEvent from "./catch_every_event";

function Homepage() {
  return (
    <>
      <section>
        <div className="relative">
          <div>
            <img className="object-fill w-full h-screen" src={banner} />
          </div>
          <div className="absolute top-0 w-full">
            <div className="flex items-center justify-between text-sm text-white ">
              <div>
                <img src={logo} className="object-cover w-[4.25rem]" />
              </div>
              <div>
                {links.map((ll, i) => (
                  <a className="mr-3" href={ll.href} key={i}>
                    {ll.label}
                  </a>
                ))}
              </div>
              <div className="">
                {leftLinks.map((ll, i) => (
                  <a className={`mr-3 ${ll.className}`} href={ll.href} key={i}>
                    {ll.label}
                  </a>
                ))}
              </div>
            </div>
            <div className="flex flex-col items-center justify-center w-1/2 p-24 border-[1px] border-none rounded-2xl m-auto backdrop-blur-lg">
              <div className="mb-8 text-4xl text-center text-white">
                <h3 className="custom-underline">Connecting you to</h3>
                <h3>Africa</h3>
              </div>
              <div className="grid grid-cols-3 gap-3">
                {pilesItems.map((pl, i) => (
                  <div className={i > 4 && pl.span} key={i}>
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
        <CatchEveryEvent />
      </section>
    </>
  );
}

export default Homepage;
