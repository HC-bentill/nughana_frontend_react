import React from "react";
import welcome from "../../assets/images/welcome.png";
import Button from "../../components/button/_component";
import Underline from "../../components/underline/_component";
import { imgs } from "../../assets/core/data";

function Welcome() {
  return (
    <>
      <div className=" bg-[#EEF2F5] container">
        <div className="md:max-w-[1100px] mx-auto md:flex md:min-h-screen md:p-0 p-10 items-center justify-center">
          <div className="mr-24 md:block md:w-auto w-full">
            <img src={welcome} className="object-contain" alt="welcome" />
          </div>

          <div>
            <h3 className="text-[35px] md:text-[43px] font-[500] md:text-left text-center ">
              Welcome to NuGhana
            </h3>
            <Underline className="flex justify-center m-auto mb-7 mr-5" />
            <div className="mb-4 text-sm md:text-left text-center">
              Here at NuGhana, we connect you to everything Ghana regardless of
              your location
            </div>
            <div className="grid place-items-center md:block">
              <Button classNames="bg-black" name="Join our community" />
            </div>
            <div className="flex justify-between md:grid grid-cols-3 md:gap-3 text-xl mt-12 md:mt-7">
              <div className="flex flex-col">
                <span className="font-semibold md:text-left text-center text-[23px] text-[#D68F0D]">
                  300K+
                </span>
                <span>Users</span>
              </div>
              <div className="flex flex-col">
                <span className="font-semibold md:text-left text-center text-[23px] text-[#D68F0D]">
                  200K+
                </span>
                <span>Communities</span>
              </div>
              <div className="flex flex-col">
                <span className="font-semibold md:text-left text-center text-[23px] text-[#D68F0D]">
                  150+
                </span>
                <span>Events</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Welcome;
