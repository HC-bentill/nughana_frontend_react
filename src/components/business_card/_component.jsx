import React from "react";
import bullet from "../../assets/icons/bullet.png";
import star from "../../assets/icons/star.svg";

function BusinessCard({
  img,
  footerImgs,
  footerDesc,
  otherClassNames,
  footerIconsWith,
  eventfooterDesc,
  dashboardfooterDesc,
}) {
  return (
    <>
      <div className={`${otherClassNames} flex flex-col`}>
        <div>
          <img src={img} alt="image" />
        </div>
        <div className="px-4 py-8 bg-white rounded-b-xl">
          <div className="flex items-center">
            <div className="-mt-[3px] text-xs">
              <h3 className="mb-2 font-semibold">Name of place</h3>
              <div className="flex items-center text-[#92929D]">
                <h3 className="mr-2">Address </h3>
                <img className="w-[4px] mx-2 h-[4px]" src={bullet} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />

                <h3>5.0</h3>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between mt-7">
            <div className="flex">
              {footerImgs?.map((fi, i) => (
                <div
                  key={i}
                  className={`flex ${footerDesc == " " ? "mr-3" : ""}`}
                >
                  <img
                    className={`${footerIconsWith} bg-[#CECECE] p-[4px] rounded-full`}
                    src={fi}
                    alt="image"
                  />
                </div>
              ))}
            </div>

            <h3 className="text-[12px] underline text-[#4987FF]">
              {eventfooterDesc}
            </h3>
          </div>
          <h3 className="mt-2 text-xs font-semibold">{dashboardfooterDesc}</h3>
        </div>
      </div>
    </>
  );
}

export default BusinessCard;
