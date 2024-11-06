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
        <div className="px-4 py-8 bg-white rounded-b-xl">
          <div className="flex items-center">
            <div className="mr-5">
              <h3 className="text-[#92929D] text-sm">APR</h3>
              <h3 className="text-lg font-semibold">27</h3>
            </div>
            <div className="-mt-[3px] text-xs">
              <h3 className="mb-2 font-semibold">Event Name</h3>
              <div className="flex text-[#92929D]">
                <h3 className="mr-2">Thu 10.00</h3>
                <h3>Hartono Mall, YK</h3>
              </div>
            </div>
          </div>
          <div className="flex items-center mt-7">
            {footerImgs?.map((fi, i) => (
              <div
                key={i}
                className={`flex ${footerDesc == " " ? "mr-3" : ""}`}
              >
                <img className={footerIconsWith} src={fi} alt="image" />
              </div>
            ))}
            <h3 className="text-[12px] text-[#696974]">{eventfooterDesc}</h3>
          </div>
          <h3 className="mt-2 text-xs font-semibold">{dashboardfooterDesc}</h3>
        </div>
      </div>
    </>
  );
}

export default FeaturedEventCard;
