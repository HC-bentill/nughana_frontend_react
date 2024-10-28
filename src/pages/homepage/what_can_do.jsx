import React from "react";
import { whatCanDo } from "../../assets/core/data";
import Card from "../../components/card/_component";
import Button from "../../components/button/_component";
import ad from "../../assets/icons/ad.png";

function WhatCanDo() {
  return (
    <>
      <div className="bg-[#EEF2F5] flex justify-center">
        <div>
          <h3 className="mb-3 text-3xl font-semibold text-center ">
            What you can do
          </h3>
          <div className="flex justify-center">
            {whatCanDo.map((wc, i) => (
              <Card
                key={i}
                bgColor={wc.bgColor}
                passage={wc.passage}
                iconBgColor={wc.iconBgColor}
                img={wc.icon}
                header={wc.title}
              />
            ))}
          </div>
          <div className="mt-12 text-center">
            <h3 className="mb-3 text-3xl font-semibold text-center ">
              NuGhana business
            </h3>
            <small>
              Do you have a business you want to connect with Ghana?
            </small>

            <div className="grid grid-cols-2 p-20 bg-white rounded-xl">
              <div className="text-left">
                <div className="text-3xl mb-7">
                  <h3 className="text-3xl">Business is easy</h3>
                  with <span className="text-[#E9B328]">NuGhana</span>
                  <div className="text-[#E9B328]">Connect</div>
                </div>
                <Button bgColor="bg-black" name="Join our community" />
              </div>
              <div className="flex items-center">
                <div className="mr-8">
                  <div className="flex items-center mb-14">
                    <img className="bg-[#FFDFA4] p-2 rounded-full" src={ad} />
                    Post AD's seamlessly
                  </div>
                  <div className="flex items-center mb-14">
                    <img className="bg-[#FFDFA4] p-2 rounded-full" src={ad} />
                    Post AD's seamlessly
                  </div>
                  <div className="flex items-center mb-14">
                    <img className="bg-[#FFDFA4] p-2 rounded-full" src={ad} />
                    Post AD's seamlessly
                  </div>
                </div>
                <div>
                  <div className="flex items-center mb-14">
                    <img className="bg-[#FFDFA4] p-2 rounded-full" src={ad} />
                    Post AD's seamlessly
                  </div>
                  <div className="flex items-center mb-14">
                    <img className="bg-[#FFDFA4] p-2 rounded-full" src={ad} />
                    Post AD's seamlessly
                  </div>
                  <div className="flex items-center mb-14">
                    <img className="bg-[#FFDFA4] p-2 rounded-full" src={ad} />
                    Post AD's seamlessly
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default WhatCanDo;
