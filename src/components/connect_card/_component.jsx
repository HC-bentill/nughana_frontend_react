import React from "react";
import heart from "../../assets/icons/heart.png";
import profileIcon from "../../assets/icons/connect_profile_icon.png";

function ConnectCard({ img, name }) {
  return (
    <>
      <div className="relative">
        <div className="block text-white rounded-lg">
          <img className="w-[208px]  rounded-lg" src={img} alt="" />
          <div className="absolute p-[9px] rounded-full top-3 left-3 backdrop-blur-xl">
            <img className="absolute top-3 left-3" src={heart} alt="heart" />
          </div>

          <div className="absolute bottom-0 backdrop-blur-sm mx-16 mb-5 rounded-full p-[4px] left-0 right-0 items-center flex justify-between">
            <img className="w-5 h-5" src={profileIcon} alt="profile" />
            <small className="mr-[2px]">{name}</small>
          </div>
        </div>
      </div>
    </>
  );
}

export default ConnectCard;
