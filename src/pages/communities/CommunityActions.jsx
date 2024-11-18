import React from "react";
import Button from "../../components/button/_component";
import profile from "../../assets/images/prof.png";
import profile2 from "../../assets/images/prof1.png";

function CommunityActions() {
  return (
    <div className="p-8 bg-white rounded-[15px] h-[257px] w-[335px] mb-3">
      <div className="flex items-center">
        <img
          className="rounded-[16px] w-[72px] h-[72px] border-[4px] border-[#EAEAEA]"
          src={profile}
          alt=""
        />
        <div>
          <h3 className="text-[#171725] text-[14px]">UI/UX Community</h3>
          <h3 className="text-[#B5B5BE] text-[14px]">@ui_community</h3>
        </div>
      </div>
      <hr className="border-t-[0.1px] my-3 border-[#E7E7E7]" />
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-[16px]">0</h3>
          <h3 className="text-[#92929D] text-[12px]">Post</h3>
        </div>
        <div className="">
          <img className="w-[30px] h-[30px]" src={profile2} alt="" />
          <h3 className="text-[10px]">1 members</h3>
        </div>
        <Button
          classNames={"!p-2 bg-black w-[100px] !text-[10px]"}
          name={"View Members"}
        />
      </div>
      <Button
        classNames={"!px-0 bg-black w-full mt-7 !text-[10px]"}
        name={"Delete Community"}
      />
    </div>
  );
}

export default CommunityActions;
