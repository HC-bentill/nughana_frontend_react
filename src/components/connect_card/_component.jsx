import React from "react";
import heart from "../../assets/icons/heart.png";
import profileIcon from "../../assets/icons/connect_profile_icon.png";

function ConnectCard({ img, name }) {
  return (
    <>
      <div className="relative">
        <div className="block text-white rounded-lg">
          <img className="w-[208px] rounded-lg" src={img} alt="" />
          <div className="absolute p-[15px] rounded-full top-0 left-0 backdrop-blur-3xl">
            <img className="" src={heart} alt="heart" />
          </div>

          <div className="absolute w-[152px] bottom-0 left-5 right-0 backdrop-blur-sm mb-5 rounded-full p-[4px] justify-center flex">
            <img className="w-5 h-5 mr-2" src={profileIcon} alt="profile" />
            <small className="text-center mr-[2px]">{name}</small>
          </div>
        </div>
      </div>
    </>
  );
}

export default ConnectCard;
