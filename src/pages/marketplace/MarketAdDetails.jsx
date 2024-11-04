import React from "react";
import Button from "../../components/button/_component";
import { Modal } from "../../components/modal/_component";
import AllMarketPlace from "./AllMarketPlace";
import CreateAd from "./CreateAd";
import Messages from "../connections/Messages";
import { useNavigate } from "react-router-dom";
import link from "../../assets/icons/link.png";
import adBanner from "../../assets/images/adBanner.png";
import g_bullet from "../../assets/icons/g-bullet.png";
import adProfile from "../../assets/images/ad-profile.png";
import location from "../../assets/icons/location.png";
import globe from "../../assets/icons/globe.png";
import call from "../../assets/icons/call.png";
import goldWhatsapp from "../../assets/icons/gold-whatsapp.png";
import goldFb from "../../assets/icons/gold-fb.png";
import goldSnap from "../../assets/icons/gold-snap.png";
import goldInsta from "../../assets/icons/gold-insta.png";
import { dashboardFeaturedAd } from "../../assets/core/data";
import FeaturedAdCard from "../../components/featured_ad_card/_component";

function MarketAdDetails() {
  const [modalOpen, setModalOpen] = React.useState(false);

  const navigate = useNavigate();
  const tabOptions = [
    {
      label: "All",
      content: <AllMarketPlace />,
    },
    {
      label: "Finance",
      content: <div className="">Finance</div>,
    },
    {
      label: "Start up",
      content: <div className="">Start up</div>,
    },
    {
      label: "Entrepreneur",
      content: <div className="">Entrepreneur</div>,
    },
    {
      label: "Golfing",
      content: <div className="">Golfing</div>,
    },
    {
      label: "Sports",
      content: <div className="">Sports</div>,
    },
  ];
  return (
    <>
      <Modal open={modalOpen} close={() => setModalOpen(false)}>
        <CreateAd closeModal={() => setModalOpen(false)} />
      </Modal>
      <div className="flex">
        <div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <img
                onClick={() => navigate("/marketplace")}
                src={link}
                alt=""
                className="w-[40px] cursor-pointer h-[40px] mr-5"
              />
              <h3 className="text-[14px] font-semibold text-[#1A314D]">
                Ad Name
              </h3>
            </div>
            <Button
              //   onClick={() => setModalOpen(true)}
              classNames="bg-black mr-3 w-[173px] text-[12px] !px-5 !py-3 text-xs"
              name={"Contact Seller"}
            />
          </div>
          <div className="flex justify-center text-center ml-2 py-8 w-[973px] h-[190px]">
            <div className="relative">
              <img
                src={adBanner}
                className="border-[7px] border-white rounded-[15px] "
                alt=""
              />
              <div className="bg-[#FEF9C3] px-3 py-1 rounded-full absolute flex items-center left-3 top-3">
                <img className="w-1 h-1 mr-2" src={g_bullet} alt="bullet" />
                <small className="text-[#EAB308]">Electronics</small>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-3 mx-4 mt-16">
            <div className="col-span-2">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-extrabold text-[22px]">Ad Name</h3>
                <h3 className="font-extrabold text-[22px] text-[#AF7E00]">
                  GHS 1000.00
                </h3>
              </div>
              <div className="bg-white w-[617px] h-[243px] rounded-[15px]">
                <h3 className="p-4">Description</h3>
                <hr />
                <p className="p-4 text-[#44444F]">
                  Blabla it is a good product
                </p>
              </div>
            </div>
            <div className="p-8 bg-white rounded-[15px]">
              <h3 className="text-[#171725] text-[14px] font-medium">
                Ad Created by
              </h3>
              <div className="flex my-3">
                <img
                  src={adProfile}
                  className="mr-3 w-[42px] h-[42px]"
                  alt=""
                />
                <div>
                  <h3 className="text-[#171725] text-[14px]">
                    Kacy Mark Bartlett (you)
                  </h3>
                  <small className="text-[#92929D] text-[12px]">
                    12 April at 09:28 PM
                  </small>
                </div>
              </div>
              <div className="flex items-center">
                <img
                  className="w-[24px] mb-2 mr-4 h-[24px]"
                  src={location}
                  alt=""
                />
                <h3 className="text-[#171725] text-[14px]">Airport City.</h3>
              </div>
              <div className="flex items-center">
                <img
                  className="w-[24px] mb-2 mr-4 h-[24px]"
                  src={globe}
                  alt=""
                />
                <h3 className="text-[#171725] text-[14px]">dribble.com/kacy</h3>
              </div>
              <div className="flex items-center">
                <img
                  className="w-[24px] mb-2 mr-4 h-[24px]"
                  src={call}
                  alt=""
                />
                <h3 className="text-[#171725] text-[14px]">+233444444444</h3>
              </div>

              <div className="flex items-center justify-between mt-5">
                <img className="w-[28px] h-[28px]" src={goldWhatsapp} alt="" />
                <img className="w-[28px] h-[28px]" src={goldFb} alt="" />
                <img className="w-[28px] h-[28px]" src={goldSnap} alt="" />
                <img className="w-[28px] h-[28px]" src={goldInsta} alt="" />
              </div>
            </div>
          </div>
          <h3 className="mb-5 mt-12 ml-4 text-[18px] font-semibold">
            Similar Ads
          </h3>
          <div className="grid grid-cols-4 gap-4 mx-3">
            {dashboardFeaturedAd?.map((df, i) => (
              <div key={i} className="flex-shrink-0" style={{ width: "21%" }}>
                <FeaturedAdCard
                  footerDesc=" "
                  img={df.img}
                  footerIconsWith="w-[20px]"
                  footerImgs={df.footerImgs}
                  header={df.name}
                  desc={df.desc}
                  footerAction={
                    <a className="text-sm text-blue-500 underline" href="#">
                      View in maps
                    </a>
                  }
                />
              </div>
            ))}
          </div>
        </div>
        <Messages />
      </div>
    </>
  );
}

export default MarketAdDetails;
