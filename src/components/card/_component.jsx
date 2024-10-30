import React from "react";

function Card({ img, header, bgColor, iconBgColor, passage }) {
  return (
    <>
      <div
        className={`${bgColor} text-center border-[1px] border-gray-400 rounded-2xl w-96 px-12 pb-[90px] pt-8 mr-12`}
      >
        <img
          className={`${iconBgColor} mx-auto w-16 rounded-full p-3`}
          src={img}
          alt=""
        />
        <h3 className="my-4 mt-12 text-xl">{header}</h3>
        <p className="text-[13px] font-light leading-10]">{passage}</p>
      </div>
    </>
  );
}

export default Card;
