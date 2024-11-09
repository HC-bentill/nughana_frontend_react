import React from "react";
import heart from "../../assets/icons/heart.png";
import profileIcon from "../../assets/icons/connect_profile_icon.png";

function ConnectCard({ img, name }) {
  return (
    <>
      <div
        className="rounded-[8px] h-[238px] w-[184px] bg-no-repeat relative"
        style={{
          backgroundImage: "url(" + img + ")",
        }}
      >
        <div className="absolute p-[4px] bg-[#00000050] rounded-full top-[10px] left-[10px]">
          <img className="w-[13px]" src={heart} alt="heart" />
        </div>
        <div className="absolute  bottom-[12px] left-0  w-full grid place-items-center rounded-full p-[4px]">
          <div className="items-center flex justify-between text-[11px] pr-[22px] gap-2 px-[4px] py-[5px] bg-[#00000067] rounded-full">
            <img
              className="w-6 h-6 rounded-full mr-2"
              src={profileIcon}
              alt="profile"
            />
            <small className="text-center text-white font-semibold mr-[2px]">Kacy M. Bartlett</small>
          </div>
        </div>
        {/* <div className="block text-white rounded-lg bg-cover bg-center bg-no-repeat">
          <img className="rounded-lg object-cover" src={img} alt="" />
          <div className="absolute p-[15px] rounded-full top-0 left-0 backdrop-blur-3xl">
            <img className="" src={heart} alt="heart" />
          </div>

          <div className="absolute w-[152px] bottom-0 left-5 right-0 backdrop-blur-sm mb-5 rounded-full p-[4px] justify-center flex">
            <img className="w-5 h-5 mr-2" src={profileIcon} alt="profile" />
            <small className="text-center mr-[2px]">{name}</small>
          </div>
        </div> */}
      </div>
    </>
  );
}

export default ConnectCard;
