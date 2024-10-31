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
          <div className="bg-[#101010] w-full text-white text-center p-20">
            <div className="flex justify-center">
              <h3 className="text-5xl">Stay connected with the African</h3>
            </div>
            <div className="flex justify-center mr-60">
              <Underline className="w-56" />
            </div>

            <h3 className="text-5xl mb-7">culture</h3>
            <p className="">
            Here at NuGhana, we connect you to everything Ghana regardless of your location.
            </p>
          </div>
        </div>
        <div className="bg-gradient-to-r from-[#000000] via-[#584512] to-[#000000] p-14">

          <ZoomCarousel/>
        </div>
      </section>
    </>
  );
}

export default StayConnected;
