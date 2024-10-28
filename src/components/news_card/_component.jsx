import React from "react";
import star from "../../assets/images/svgs/star.svg";

function NewsCard({ img, date, header, passage }) {
  return (
    <>
      <div className="flex items-center">
        <div className="mr-5">
          <img className="h-[248px] w-[223px] " src={img} />
        </div>
        <div className="w-1/2">
          <div>
            <span className="flex items-center text-sm">
              <img className="w-[20px] h-[20px]" src={star} alt="" /> Latest{" "}
              {date}
            </span>
          </div>
          <div className="text-[#AF7E00] text-xl">{header}</div>
          <div className="text-sm">{passage}</div>
        </div>
      </div>
    </>
  );
}

export default NewsCard;
