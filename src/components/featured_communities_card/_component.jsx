import React from "react";

function FeaturedCard({
  img,
  footerImgs,
  footerDesc,
  footerAction,
  footerIconsWith,
  header,
  desc,
  footerImgsOverlay
}) {
  return (
    <div className="block w-[240px] rounded-[15px] bg-white text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white">
      <div className="relative overflow-hidden bg-no-repeat bg-cover">
        <img className="rounded-t-[15px]" src={img} alt="image" />
      </div>
      <div className="p-[8px] px-[18px] text-base">
        <h3 className="text-black text-[13px]">{header}</h3>
        <p className="text-[#92929D] text-[11px] mt-[-5px]">{desc}</p>
        <div
          className={`${
            footerDesc == " " ? "" : "flex-col"
          } flex justify-between mt-4`}
        >
          <div className="flex items-center w-full justify-between gap-7">
            <div className="shrink-0">
              <div className="flex items-center ml-2 mb-[-4px]">
                {footerImgs?.map((fi, i) => (
                  <div key={i} className={`flex ${footerImgsOverlay ? 'ml-[-10px]':' mr-4'}`}>
                    <img className={footerIconsWith} src={fi} alt="image" />
                  </div>
                ))}
              </div>

              {footerDesc == " " ? (
                ""
              ) : (
                <small className="text-black text-[9px] font-semibold">
                  {footerDesc}
                </small>
              )}
            </div>

            {footerAction}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeaturedCard;
