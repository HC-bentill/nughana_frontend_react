import React from "react";
import Button from "../button/_component";

function MarketPlaceCard({ img, onClick }) {
  return (
    <>
      <div className="relative">
        <img src={img} className="w-[313px] h-[219px]" alt="" />
        <div className="absolute bottom-0 flex items-center justify-between w-full">
          <div className="m-4">
            <h3 className="font-semibold text-[14px] text-white">
              Category Name
            </h3>
            <small className="font-normal text-[12px]">700+ items</small>
          </div>
          <Button
            onClick={onClick}
            name={"view"}
            classNames={
              "border-[2px] m-4 flex items-center py-[6px] px-[36px] text-[12px] font-semibold border-white rounded-full"
            }
          />
        </div>
      </div>
    </>
  );
}

export default MarketPlaceCard;
