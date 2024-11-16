import React from "react";

function FeaturedCard({
  img,
  footerImgs,
  footerDesc,
  footerAction,
  footerActionLink,
  footerIconsWith,
  header,
  desc,
  footerImgsOverlay,
}) {
  return (
    <div className="max-sm:w-[340px] w-[240px] rounded-[15px] bg-white">
      <div className="relative overflow-hidden bg-no-repeat bg-cover">
        <img
          className="rounded-t-[15px] max-sm:w-full w-[260px] object-cover h-[125px]"
          src={img}
          alt="image"
        />
      </div>
      <div className="p-[8px] px-[18px] text-base">
        <h3 className="text-black text-[13px]">{header}</h3>
        <p className="text-[#92929D] shorten-text text-[11px] mt-[-5px]">
          {desc}
        </p>
        <div
          className={`${
            footerDesc == " " ? "" : "flex-col"
          } flex justify-between mt-4`}
        >
          <div className="flex items-center justify-between w-full gap-7">
            <div className="shrink-0">
              <div className="flex items-center ml-2 mb-[-4px]">
                {footerImgs?.map((fi, i) => (
                  <div
                    key={i}
                    className={`flex ${
                      footerImgsOverlay ? "ml-[-10px]" : " mr-4"
                    }`}
                  >
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
            <a target="_blank" href={footerActionLink}>
              {footerAction}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeaturedCard;
