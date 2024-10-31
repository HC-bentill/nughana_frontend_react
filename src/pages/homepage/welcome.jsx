import React from "react";
import welcome from "../../assets/images/welcome.png";
import Button from "../../components/button/_component";
import Underline from "../../components/underline/_component";
import { imgs } from "../../assets/core/data";

function Welcome() {
  return (
    <>
      <div className=" bg-[#EEF2F5]">
        <div className="md:max-w-[1100px] mx-auto flex h-screen items-center justify-center">
          <div className="mr-24">
            <img src={welcome} className="object-contain" alt="welcome" />
          </div>

          <div>
            <h3 className="text-[43px] font-[500] ">Welcome to NuGhana</h3>
            <Underline className="flex justify-center m-auto mb-7 mr-5" />
            <div className="mb-4 text-sm">
              Here at NuGhana, we connect you to everything Ghana regardless of
              your location
            </div>
            <Button bgColor="bg-black" name="Join our community" />
            <div className="grid grid-cols-3 gap-3 text-xl mt-7">
              <div className="flex flex-col">
                <span className="font-semibold text-[23px] text-[#D68F0D]">300K+</span>
                <span>Users</span>
              </div>
              <div className="flex flex-col">
                <span className="font-semibold text-[23px] text-[#D68F0D]">200K+</span>
                <span>Communities</span>
              </div>
              <div className="flex flex-col">
                <span className="font-semibold text-[23px] text-[#D68F0D]">150+</span>
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
