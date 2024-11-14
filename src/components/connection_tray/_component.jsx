import React from "react";
import call from "../../assets/icons/call.png";
import snap from "../../assets/icons/snap.png";
import fb from "../../assets/icons/fb.png";
import insta from "../../assets/icons/insta.png";
import whatsapp from "../../assets/icons/whatsapp.png";
import mail from "../../assets/icons/mail.png";

function ConnectionTray({ profileImg, name, username }) {
  return (
    <>
      <div className="flex items-center justify-between py-[12px] px-[25px] mb-1 bg-white rounded-[10px]">
        <div className="flex items-center">
          <img
            className="w-[52px] h-[52px] mr-3 rounded-full"
            src={profileImg}
            alt="profile image"
          />
          <div className="text-[13px] flex flex-col">
            <h3 className="font-medium  text-[#424242]">{name}</h3>
            <h3 className="text-[#202226] font-normal">@{username}</h3>
          </div>
        </div>

        <div className="flex">
          {/* <>
            <img
              src={call}
              alt=""
              className="w-[32px] p-2 rounded-full mr-4 bg-[#EFEFEF] h-[32px]"
            />
            <img
              src={snap}
              alt=""
              className="w-[32px] p-2 rounded-full mr-4 bg-[#EFEFEF] h-[32px]"
            />
            <img
              src={fb}
              alt=""
              className="w-[32px] p-2 rounded-full mr-4 bg-[#EFEFEF] h-[32px]"
            />
            <img
              src={insta}
              alt=""
              className="w-[32px] p-2 rounded-full mr-4 bg-[#EFEFEF] h-[32px]"
            />
            <img
              src={whatsapp}
              alt=""
              className="w-[32px] p-2 rounded-full mr-4 bg-[#EFEFEF] h-[32px]"
            />
            <img
              src={mail}
              alt=""
              className="w-[32px] p-2 rounded-full mr-4 bg-[#EFEFEF] h-[32px]"
            />
          </> */}
        </div>
      </div>
    </>
  );
}

export default ConnectionTray;
