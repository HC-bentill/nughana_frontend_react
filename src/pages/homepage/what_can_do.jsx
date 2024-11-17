import React from "react";
import { whatCanDo } from "../../assets/core/data";
import Card from "../../components/card/_component";
import Button from "../../components/button/_component";
import ad from "../../assets/icons/ad.png";
import Underline from "../../components/underline/_component";

function WhatCanDo() {
  return (
    <>
      <div className="bg-[#EEF2F5] flex justify-center md:py-0 py-20 px-7 container">
        <div className="md:max-w-[1100px] mx-auto ">
          <h3 className="mb-3 text-[35px] md:text-[43px] font-[500] text-center ">
            What you can do
          </h3>
          <Underline className="flex justify-center m-auto w-44 mb-7" />
          <div className="md:flex w-full justify-center">
            <div className="md:flex grid place-content-center md:gap-0 gap-10">
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
          </div>
          <div className="text-center my-44">
            <h3 className="mb-3 text-[35px] md:text-[43px] font-[500] text-center">
              Afro Tango business
            </h3>
            <Underline className="m-auto mb-2 w-44" />
            <p className="font-light">
              Do you have a business you want to connect with Ghana?
            </p>

            <div className="grid md:grid-cols-2 md:p-20  md:px-20  px-14 mt-8 bg-white rounded-xl">
              <div className="text-left">
                <div className="md:mt-10 mt-14">
                  <div className="text-2xl md:text-3xl mb-7">
                    <h3 className="t">Business is easy</h3>
                    with <span className="text-[#E9B328]">Afro Tango</span>
                    <div className="text-[#E9B328]">Connect</div>
                  </div>
                  <div className="grid place-items-center md:block">
                    <Button classNames="bg-black md:w-auto w-full" name="Join our community" />
                  </div>{" "}
                </div>
              </div>
              <div className="md:flex items-center md:mt-0 mt-12">
                <div className="mr-8">
                  <div className="flex items-center mb-14">
                    <img
                      className="bg-[#FFDFA4] p-[10px] rounded-full"
                      src={ad}
                    />
                    <p className="text-[14px] font-[500] ml-4">
                      Post AD's seamlessly
                    </p>
                  </div>
                  <div className="flex items-center mb-14">
                    <img
                      className="bg-[#FFDFA4] p-[10px] rounded-full"
                      src={ad}
                    />
                    <p className="text-[14px] font-[500] ml-4">
                      Post AD's seamlessly
                    </p>
                  </div>
                  <div className="flex items-center mb-14">
                    <img
                      className="bg-[#FFDFA4] p-[10px] rounded-full"
                      src={ad}
                    />
                    <p className="text-[14px] font-[500] ml-4">
                      Post AD's seamlessly
                    </p>
                  </div>
                </div>
                <div>
                  <div className="flex items-center mb-14">
                    <img
                      className="bg-[#FFDFA4] p-[10px] rounded-full"
                      src={ad}
                    />
                    <p className="text-[14px] font-[500] ml-4">
                      Post AD's seamlessly
                    </p>
                  </div>
                  <div className="flex items-center mb-14">
                    <img
                      className="bg-[#FFDFA4] p-[10px] rounded-full"
                      src={ad}
                    />
                    <p className="text-[14px] font-[500] ml-4">
                      Post AD's seamlessly
                    </p>
                  </div>
                  <div className="flex items-center mb-14">
                    <img
                      className="bg-[#FFDFA4] p-[10px] rounded-full"
                      src={ad}
                    />
                    <p className="text-[14px] font-[500] ml-4">
                      Post AD's seamlessly
                    </p>
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
