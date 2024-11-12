import React from "react";
import Button from "../../components/button/_component";
import { Modal } from "../../components/modal/_component";
import Messages from "../connections/Messages";
import { useNavigate } from "react-router-dom";
import link from "../../assets/icons/Link.png";
import profilePic from "../../assets/images/profile.png";
import profileBanner from "../../assets/images/profile-banner.png";
import ProfileForm from "./ProfileForm";
import ChangeProfileImage from "./ChangeProfileImage";
import ChangeBannerImage from "./ChangeBannerImage";

function EditProfile() {
  const [changeProfileImageModal, setChangeProfileImageModal] =
    React.useState(false);
  const [changeBannerImageModal, setChangeBannerImageModal] =
    React.useState(false);
  const navigate = useNavigate();
  return (
    <>
      <Modal
        open={changeProfileImageModal}
        close={() => setChangeProfileImageModal(false)}
      >
        <ChangeProfileImage
          closeModal={() => setChangeProfileImageModal(false)}
        />
      </Modal>
      <Modal
        open={changeBannerImageModal}
        close={() => setChangeBannerImageModal(false)}
      >
        <ChangeBannerImage
          closeModal={() => setChangeBannerImageModal(false)}
        />
      </Modal>

      <div className="flex justify-between">
        <div>
          <div className="flex items-center justify-between ml-2">
            <div className="flex items-center">
              <img
                onClick={() => navigate("/profile")}
                src={link}
                alt=""
                className="w-[40px] cursor-pointer h-[40px] mr-5"
              />
              <h3 className="text-[14px] font-semibold text-[#1A314D]">
                Edit Profile
              </h3>
            </div>
            <Button
              //   onClick={() => setChangeProfileImageModal(true)}
              classNames="bg-black mr-3 w-[173px] text-[12px] !px-5 !py-3 text-xs"
              name={"Save Changes"}
            />
          </div>
          <div className="flex justify-center text-center ml-5 py-8 w-[973px] h-[190px]">
            <div className="relative flex items-center">
              <img
                src={profileBanner}
                className="border-[7px] mt-4 w-[955px] h-[181px] border-white rounded-[15px] "
                alt=""
              />
              <div className="absolute left-0 flex items-center justify-center px-3 py-1 rounded-full top-3">
                <img
                  className="w-[114px] h-[114px] mx-6 border-[5px] border-white rounded-full"
                  src={profilePic}
                  alt="bullet"
                />
                <div className="flex">
                  <Button
                    onClick={() => setChangeProfileImageModal(true)}
                    classNames={
                      "font-semibold border-[1px] border-white mr-5 !rounded-[10px] flex items-center w-[164px] h-[38px] border-[1px] border-[#17172580] !px-2 text-[10px] bg-[#17172580]"
                    }
                    name={"Change Profile Image"}
                  />
                  <Button
                    onClick={() => setChangeBannerImageModal(true)}
                    classNames={
                      "font-semibold border-[1px] border-white !rounded-[10px] flex items-center w-[164px] h-[38px] border-[1px] border-[#17172580] !px-[6px] text-[10px] bg-[#17172580]"
                    }
                    name={"Change Banner Image"}
                  />
                </div>
              </div>
            </div>
          </div>
          {/* form here */}
          <ProfileForm />
        </div>
        <Messages />
      </div>
    </>
  );
}

export default EditProfile;
