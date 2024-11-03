import React from "react";

function MessagesCard({ img, name, msg, noOfMsg, otherClassNames }) {
  return (
    <>
      <div
        className={`flex items-center justify-between mb-8 ${otherClassNames}`}
      >
        <img className="w-[48px] mr-3" src={img} alt="image" />
        <div>
          <h3 className="font-medium text-[14px]">{name}</h3>
          <p className="font-medium text-[12px] text-gray-400">{msg}</p>
        </div>
        <h3 className="ml-5 bg-[#AF7E00] text-[12px] pt-[1px] flex justify-center items-center text-white rounded-full w-[24px] h-[24px] text-center">
          {noOfMsg}{" "}
        </h3>
      </div>
    </>
  );
}

export default MessagesCard;
