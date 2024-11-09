import React from "react";

function FeaturedEventCard({
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
        <div className="px-4 py-2 bg-white rounded-b-[15px]">
          <div className="flex items-center">
            <div className="mr-5">
              <h3 className="text-[#92929D] text-[11px]">APR</h3>
              <h3 className="text-lg font-semibold">27</h3>
            </div>
            <div className="-mt-[3px] text-xs">
              <h3 className="mb-2 font-semibold text-[13px]">Event Name</h3>
              <div className="flex text-[#92929D] text-[11px] mt-[-5px]">
                <h3 className="mr-2">Thu 10.00</h3>
                <h3>Hartono Mall, YK</h3>
              </div>
            </div>
          </div>
          <div className="flex items-center mt-3 ml-2">
            {footerImgs?.map((fi, i) => (
              <div
                key={i}
                className={`flex ${footerDesc == " " ? "" : "ml-[-10px]"} mb-[-5px]`}
              >
                <img className={footerIconsWith} src={fi} alt="image" />
              </div>
            ))}
            <h3 className="text-[12px] text-[#696974]">{eventfooterDesc}</h3>
          </div>
          <h3 className="mt-2 text-[9px] font-semibold">{dashboardfooterDesc}</h3>
        </div>
      </div>
    </>
  );
}

export default FeaturedEventCard;
