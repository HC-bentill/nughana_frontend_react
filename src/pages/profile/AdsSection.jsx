import React from "react";
import { dashboardFeaturedBusiness } from "../../assets/core/data";
import location from "../../assets/icons/location.png";
import globe from "../../assets/icons/globe.png";
import call from "../../assets/icons/call.png";
import goldWhatsapp from "../../assets/icons/gold-whatsapp.png";
import goldFb from "../../assets/icons/gold-fb.png";
import goldSnap from "../../assets/icons/gold-snap.png";
import goldInsta from "../../assets/icons/gold-insta.png";
import FeaturedCard from "../../components/featured_communities_card/_component";
import Button from "../../components/button/_component";

function AdsSection() {
  return (
    <div className="grid grid-cols-3 mt-16">
      <div></div>

      <div className="flex flex-col max-w-[604px] col-span-2 gap-4 ml-8">
        <div className="flex items-center justify-between">
          <h3 className="text-[16px] font-semibold">Your ads</h3>
          <div className="flex items-center">
            <Button
              //   onClick={() => setModalOpen(true)}
              classNames="bg-black mr-3 w-[151px] text-[12px] !px-5 !py-3 text-xs"
              name={"Post an AD"}
            />{" "}
            <h3 className="text-[#B87C01] text-[14px] font-medium">View all</h3>
          </div>
        </div>
        <div className="flex gap-2 overflow-x-auto hide-scrollbar">
          {dashboardFeaturedBusiness?.map((df, i) => (
            <div key={i} className="flex-shrink-0">
              <FeaturedCard
                footerDesc=" "
                img={df.img}
                footerIconsWith="w-[15px]"
                footerImgsOverlay={false}
                footerImgs={df.footerImgs}
                header={df.name}
                desc={df.desc}
                footerAction={
                  <a
                    className="text-[8px] text-blue-400 underline font-semibold"
                    href="#"
                  >
                    View in maps
                  </a>
                }
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AdsSection;
