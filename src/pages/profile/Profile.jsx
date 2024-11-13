import React from "react";
import profileBanner from "../../assets/images/profile-banner.png";
import Button from "../../components/button/_component";
import profilePic from "../../assets/images/profile.png";
import Messages from "../connections/Messages";
import BusinessSection from "./BusinessSection";
import EventsSection from "./EventsSection";
import AdsSection from "./AdsSection";
import { useNavigate } from "react-router-dom";

function Profile() {
  const navigate = useNavigate();
  return (
    <>
      <div className="flex justify-between ml-8">
        <div className="relative">
          <img
            className="w-[1010px] h-[260px] rounded-t-[15px]"
            src={profileBanner}
          />
          <Button
            onClick={() => navigate("/edit-profile")}
            classNames={
              "font-semibold !rounded-[10px] flex items-center absolute top-3 right-32 h-[38px] border-[1px] border-white border-[#17172580] text-[12px] bg-[#17172580]"
            }
            name={"Edit Profile"}
          />
          <div className="absolute flex items-center top-36 left-4">
            <img
              src={profilePic}
              className="object-contain mr-4 border-[5px] border-white rounded-full w-[156px] h-[156px]"
              alt=""
            />
            <div className="mb-5">
              <h3 className="font-semibold text-[24px] text-[#FAFAFB]">
                Kacy Mark Bartlett
              </h3>
              <h3 className="text-[#D5D5DC] font-normal text-[16px]">@kacy</h3>
            </div>
          </div>
          <div className="grid grid-cols-3 rounded-b-[15px] pt-2 h-16 w-[1010px] bg-white">
            <div></div>
            <div className="col-span-2">
              <div className="grid grid-cols-5">
                <div className="text-[#AF7E00]">
                  <h3 className="text-[14px]">Post</h3>
                  <p className="text-[16px] font-semibold">10,3K</p>
                  <hr className="border-t-[2px] -ml-4 mt-2 border-[#AF7E00] w-[72px] h-[3px]" />
                </div>
                <div>
                  <h3 className="text-[14px] text-[#92929D]">Connections</h3>
                  <p className="text-[16px] font-semibold text-[#44444F]">
                    2,464
                  </p>
                </div>
                <div>
                  <h3 className="text-[14px] text-[#92929D]">
                    Your communities
                  </h3>
                  <p className="text-[16px] font-semibold text-[#44444F]">
                    3,154
                  </p>
                </div>
                <div className="ml-3">
                  <h3 className="text-[14px] text-[#92929D]">Photos</h3>
                  <p className="text-[16px] font-semibold text-[#44444F]">35</p>
                </div>
                <div>
                  <h3 className="text-[14px] text-[#92929D]">Videos</h3>
                  <p className="text-[16px] font-semibold text-[#44444F]">24</p>
                </div>
              </div>
            </div>
          </div>

          <BusinessSection />
          <EventsSection />
          <AdsSection />
        </div>

        <Messages />
      </div>
    </>
  );
}

export default Profile;
