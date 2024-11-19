import React from "react";
import { imgs, stayConn } from "../../assets/core/data";
import StayConnectedCard from "../../components/stay_conn_card/_component";
import Underline from "../../components/underline/_component";
import ZoomCarousel from "../../components/zoomCarousel/ZoomCarousel";

function StayConnected() {
  return (
    <>
      <section>
        <div className="flex justify-center">
          <div className="bg-[#101010] w-full text-white text-center md:py-20 md:px-20 px-4 py-20">
            <div className="flex justify-center">
              <h3 className="text-[29px] md:text-5xl">
                Stay connected with the African{" "}
                <span className="md:hidden">Culture</span>
              </h3>
            </div>
            <div className="flex justify-center md:mr-60 md:-mt-0 -mt-[47px]">
              <Underline className="md:w-56 w-[200px]" />
            </div>

            <h3 className="text-[29px] md:block hidden md:text-5xl mb-7">
              culture
            </h3>
            <p className="md:text-[14px] text-[13px] md:mt-0 mt-[80px]">
              Here at Afro Tango, we connect you to everything Ghana regardless of
              your location.
            </p>
          </div>
        </div>
        <div className="bg-gradient-to-r from-[#000000] via-[#584512] to-[#000000] md:py-14 md:py:14 px-4 py-10 ">
          <ZoomCarousel />
        </div>
      </section>
    </>
  );
}

export default StayConnected;
