import React from "react";
import Messages from "../connections/Messages";
import { expats } from "../../assets/core/data";
import Chat from "../../components/chat/_component";

function ResourceCenter() {
  return (
    <>
      <div className="flex justify-between ml-8">
        <div className="font-semibold text-[18px]">
          <div className="flex items-center">
            <h2 className="mr-7">Resource center</h2>
          </div>
          <p className="mt-8">
            We connect expats to resources, these are the services we offer
          </p>
          <div className="grid grid-cols-4 gap-3 mt-8">
            {expats?.map((ex, i) => (
              <div
                key={i}
                className="border-[#C4C4C4] w-[227px] h-[151px] rounded-[16px] border-[2px] flex flex-col items-center p-8 justify-center"
              >
                <img
                  src={ex.icon}
                  className="bg-[#E2E8F4] p-[6px] rounded-full w-[34px] h-[34px]"
                  alt="icon"
                />
                <h3 className="text-[16px] mt-4 text-[#2B3760] font-medium">
                  {ex.name}
                </h3>
              </div>
            ))}
          </div>
          <p className="mt-8">Or chat with our virtual assistant</p>
          <Chat />
        </div>
        <Messages />
      </div>
    </>
  );
}

export default ResourceCenter;
