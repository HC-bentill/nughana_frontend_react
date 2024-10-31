import React from "react";

function StayConnectedCard({ img, title, desc }) {
  return (
    <>
      <div className="relative py-3 -ml-3">
        <img
          className={`object-cover rounded-xl`}
          src={img}
          alt=""
        />
        <div className="absolute text-white p-1 w-full border-[1px] border-none bottom-0 rounded-lg backdrop-blur-lg">
          <div className="flex flex-col">
            <small className="font-bold">{title}</small>
            <small>{desc}</small>
          </div>
        </div>
      </div>
    </>
  );
}

export default StayConnectedCard;
