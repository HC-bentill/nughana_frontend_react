import React from "react";

function MessagesCard({ img, name, msg, noOfMsg, otherClassNames }) {
  return (
    <>
      <div
        className={`flex gap-4 items-center justify-between mb-5 ${otherClassNames}`}
      >
        <img className="w-[42px]" src={img} alt="image" />
        <div>
          <h3 className="text-[13px]">{name}</h3>
          <p className="font-medium text-[11px] text-gray-400">{msg}</p>
        </div>
        <h3 className="bg-[#AF7E00] text-[9px] pt-[1px] flex justify-center items-center text-white rounded-full w-[20px] h-[20px] text-center">
          {noOfMsg}
        </h3>
      </div>
    </>
  );
}

export default MessagesCard;
