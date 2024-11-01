import React from "react";

function FeaturedEventCard({
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
      <div className="w-[270px] flex flex-col">
        <div>
          <img src={img} alt="image" />
        </div>
        <div className="px-4 py-8 bg-white rounded-b-xl">
          <div className="flex justify-between">
            <div className="">
              <h3 className="text-[#92929D] text-sm">APR</h3>
              <h3 className="text-lg font-semibold">27</h3>
            </div>
            <div className="text-xs">
              <h3 className="mb-2 font-semibold">Event Name</h3>
              <div className="flex text-[#92929D]">
                <h3 className="mr-2">Thu 10.00</h3>
                <h3>Hartono Mall, YK</h3>
              </div>
            </div>
          </div>
          <div className="flex items-center mt-7">
            {footerImgs?.map((fi, i) => (
              <>
                <div className={`flex ${footerDesc == " " ? "mr-3" : ""}`}>
                  <img
                    className={footerIconsWith}
                    key={i}
                    src={fi}
                    alt="image"
                  />
                </div>
              </>
            ))}
          </div>
          <h3 className="mt-2 text-xs font-semibold">700+ registered</h3>
        </div>
      </div>
    </>
  );
}

export default FeaturedEventCard;
