import React from "react";

function FeaturedCard({
  img,
  footerImgs,
  footerDesc,
  footerAction,
  footerIconsWith,
  header,
  desc,
}) {
  return (
    <div className="block w-[260px] rounded-lg bg-white text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white">
      <div className="relative overflow-hidden bg-no-repeat bg-cover">
        <img className="rounded-t-lg" src={img} alt="image" />
      </div>
      <div className="p-2 text-base">
        <h3 className="text-black">{header}</h3>
        <p className="text-[#92929D]">{desc}</p>
        <div
          className={`${
            footerDesc == " " ? "" : "flex-col"
          } flex justify-between mt-16`}
        >
          <div className="flex items-center">
            {footerImgs?.map((fi, i) => (
              <div
                key={i}
                className={`flex ${footerDesc == " " ? "mr-3" : ""}`}
              >
                <img className={footerIconsWith} src={fi} alt="image" />
              </div>
            ))}
          </div>
          <div className="flex items-center justify-between">
            <div>
              {footerDesc == " " ? (
                ""
              ) : (
                <small className="text-black">{footerDesc}</small>
              )}
            </div>

            <div>{footerAction}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeaturedCard;
