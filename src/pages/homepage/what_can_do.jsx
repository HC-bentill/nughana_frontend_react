import React from "react";
import { whatCanDo } from "../../assets/core/data";
import Card from "../../components/card/_component";
import Button from "../../components/button/_component";
import ad from "../../assets/icons/ad.png";
import Underline from "../../components/underline/_component";

function WhatCanDo() {
  return (
    <>
      <div className="bg-[#EEF2F5] flex justify-center">
        <div className="md:max-w-[1100px] mx-auto ">
          <h3 className="mb-3 text-[43px] font-[500] text-center ">
            What you can do
          </h3>
          <Underline className="flex justify-center m-auto w-44 mb-7" />
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
          <div className="text-center my-44">
            <h3 className="mb-3 text-[43px] font-[500] text-center">
              NuGhana business
            </h3>
            <Underline className="m-auto mb-2 w-44" />
            <p className="font-light">
              Do you have a business you want to connect with Ghana?
            </p>

            <div className="grid grid-cols-2 p-20 mt-8 bg-white rounded-xl">
              <div className="text-left">
                <div className="mt-10">
                  <div className="text-3xl mb-7">
                    <h3 className="text-3xl">Business is easy</h3>
                    with <span className="text-[#E9B328]">NuGhana</span>
                    <div className="text-[#E9B328]">Connect</div>
                  </div>
                  <Button classNames="bg-black" name="Join our community" />
                </div>
              </div>
              <div className="flex items-center">
                <div className="mr-8">
                  <div className="flex items-center mb-14">
                    <img className="bg-[#FFDFA4] p-[10px] rounded-full" src={ad} />
                    <p className="text-[14px] font-[500] ml-4">Post AD's seamlessly</p>
                  </div>
                  <div className="flex items-center mb-14">
                    <img className="bg-[#FFDFA4] p-[10px] rounded-full" src={ad} />
                    <p className="text-[14px] font-[500] ml-4">Post AD's seamlessly</p>
                  </div>
                  <div className="flex items-center mb-14">
                    <img className="bg-[#FFDFA4] p-[10px] rounded-full" src={ad} />
                    <p className="text-[14px] font-[500] ml-4">Post AD's seamlessly</p>
                  </div>
                </div>
                <div>
                  <div className="flex items-center mb-14">
                    <img className="bg-[#FFDFA4] p-[10px] rounded-full" src={ad} />
                    <p className="text-[14px] font-[500] ml-4">Post AD's seamlessly</p>
                  </div>
                  <div className="flex items-center mb-14">
                    <img className="bg-[#FFDFA4] p-[10px] rounded-full" src={ad} />
                    <p className="text-[14px] font-[500] ml-4">Post AD's seamlessly</p>
                  </div>
                  <div className="flex items-center mb-14">
                    <img className="bg-[#FFDFA4] p-[10px] rounded-full" src={ad} />
                    <p className="text-[14px] font-[500] ml-4">Post AD's seamlessly</p>
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
