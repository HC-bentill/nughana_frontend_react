import React from "react";
import bullet from "../../assets/icons/bullet.png";
import g_bullet from "../../assets/icons/g-bullet.png";

function FeaturedAdCard({
  img,
  footerImgs,
  footerDesc,
  footerAction,
  footerIconsWith,
  header,
  desc,
}) {
  return (
    <>
      <div className="w-[232px] flex flex-col mb-8">
        <div className="relative">
          <img src={img} alt="image" />
          <div className="bg-[#FEF9C3] px-3 py-1 rounded-full absolute flex items-center left-2 top-2">
            <img className="w-1 h-1 mr-2" src={g_bullet} alt="bullet" />
            <small className="text-[#EAB308]">Electronics</small>
          </div>
        </div>
        <div className="px-4 py-8 bg-white rounded-b-xl">
          <div className="flex justify-between">
            <div className="">
              <h3 className="text-md">Lip gloss</h3>
              <h3 className="text-sm text-[#92929D] ">Description here</h3>
            </div>
          </div>
          <div className="flex items-center mt-7">
            <h3 className="text-[#AF7E00] font-semibold">GHS 950,000</h3>
          </div>
          <div className="flex text-[#92929D] items-center justify-between text-sm">
            <h3>Makola</h3>
            <div className="flex items-center">
              <img className="mr-1" src={bullet} alt="bullet" />
              <h3 className="text-xs font-semibold">4 hours ago</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FeaturedAdCard;
