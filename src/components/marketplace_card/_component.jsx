import React from "react";
import Button from "../button/_component";
import HtmlRenderer from "../html_renderer/HtmlRendrer";

function MarketPlaceCard({ img, onClick, name }) {
  return (
    <>
      <div className="relative">
        <img src={img} className="w-[313px] h-[169px]" alt="" />
        <div className="absolute bottom-0 flex items-center justify-between w-full">
          <div className="m-4">
            <h3 className="font-semibold text-[12px] text-white">
              <HtmlRenderer htmlContent={name} />
            </h3>
            <small className="font-normal text-white text-[9px]">700+ items</small>
          </div>
          <Button
            onClick={onClick}
            name={"view"}
            classNames={
              "border-[0.5px] !text-[11px] font-semibold m-3 flex items-center py-[6px] px-[20px]  border-white rounded-full"
            }
          />
        </div>
      </div>
    </>
  );
}

export default MarketPlaceCard;
