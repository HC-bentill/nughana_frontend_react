import React from "react";
import { stayConn } from "../../assets/core/data";
import StayConnectedCard from "../../components/stay_conn_card/_component";

function StayConnected() {
  return (
    <>
      <section>
        <div className="flex justify-center">
          <div className="bg-[#101010] w-full text-white text-center p-20">
            <h3 className="text-3xl">
              Stay <span>connected</span> with the African
            </h3>
            <h3 className="text-3xl">culture</h3>
            <small>
              Here at NuGhana, we connect yhou to everything Ghana regardless of
              your location
            </small>
          </div>
        </div>
        <div className="flex items-center justify-center  bg-gradient-to-r from-[#000000] via-[#584512] to-[#000000] p-8">
          {stayConn.map((sc, i) => (
            <StayConnectedCard
              key={i}
              img={sc.img}
              title={sc.label}
              zIndex={sc.zIndex}
              imgW={sc.imgW}
              imgH={sc.imgH}
              desc={sc.desc}
            />
          ))}
        </div>
      </section>
    </>
  );
}

export default StayConnected;
