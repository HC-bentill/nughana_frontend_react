import React from "react";
import banner from "../../assets/images/banner.png";
import logo from "../../assets/images/svgs/logo.svg";
import { imgs, links, pilesItems, pilesItems2, rightLinks } from "../../assets/core/data";
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

function Homepage() {
  return (
    <>
      <section>
        <div className="relative">
          <div>
            <img className="object-fill w-full h-screen" src={banner} />
          </div>
          <div className="absolute top-0 w-full">
            <div className="flex items-center justify-between md:max-w-[1100px] pt-5 mx-auto text-sm text-white">
              <div>
                <img src={logo} className="object-contain w-[3.55rem]" />
              </div>
              <div>
                {links.map((ll, i) => (
                  <a className="mr-5" href={ll.href} key={i}>
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
            <div className="md:max-w-[1100px] mt-24 p-[150px] border-[1px] border-none rounded-[32px] m-auto backdrop-blur-sm bg-[#ece9e914]">
              <div className="mb-8 text-5xl text-center text-white">
                <h3 className="custom-underline">Connecting you to</h3>
                <Underline className="flex w-[230px] m-auto" />

                <h3>Africa</h3>
              </div>
              <div className="flex items-center justify-center gap-3">
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
              <div className="flex items-center justify-center gap-3 pt-3">
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
    </>
  );
}

export default Homepage;
