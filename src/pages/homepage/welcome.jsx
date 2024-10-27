import React from "react";
import welcome from "../../assets/images/welcome.png";
import Button from "../../components/button/_component";

function Welcome() {
  return (
    <>
      <div className="flex items-center justify-center bg-[#EEF2F5]">
        <div className="mr-8">
          <img src={welcome} alt="welcome" />
        </div>

        <div>
          <h3 className="text-6xl mb-7">Welcome to NuGhana</h3>
          <div className="mb-4 text-sm">
            Here at NuGhana, we connect you to everything Ghana regardless of
            your location
          </div>
          <Button bgColor="bg-black" name="Join our community" />
          <div className="grid grid-cols-3 gap-3 text-xl mt-7">
            <div className="flex flex-col">
              <span className="font-bold text-[#D68F0D]">300K+</span>
              <span>Users</span>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-[#D68F0D]">200K+</span>
              <span>Communities</span>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-[#D68F0D]">150+</span>
              <span>Events</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Welcome;
