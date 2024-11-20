import React from "react";
import bullet from "../../assets/icons/bullet.png";
import g_bullet from "../../assets/icons/g-bullet.png";
import HtmlRenderer from "../html_renderer/HtmlRendrer";
import { Link, useNavigate } from "react-router-dom";
import moment from "moment";

function FeaturedAdCard({
  img,
  price,
  header,
  desc,
  otherClassNames,
  category,
  id,
  createdAt,
  location
}) {
  const navigate = useNavigate(); 
  return (
    <>
      <div onClick={()=> navigate(`/market-ad-details/${id}`)} className={`${otherClassNames} flex cursor-pointer flex-col`}>
        <div className="relative">
          <img src={img} alt="image" className="md:h-[150px] h-[120px] object-cover w-full rounded-t-[15px]" />
          <div className="bg-[#FEF9C3] px-3 py-1 rounded-full absolute flex items-center left-2 top-2">
            <img className="w-1 h-1 mr-2" src={g_bullet} alt="bullet" />
            <small className="text-[#EAB308] text-[11px] shorten-text"><HtmlRenderer htmlContent={category ?? ''}/></small>
          </div>
        </div>
        <div className="px-3 py-4 bg-white rounded-b-[15px]">
          <div className="flex justify-between">
            <div className="">
              <h3 className="font-semibold text-[13px] shorten-text max-w-[100px]" title={header}>{header}</h3>
              <h3 className="text-[#92929D] text-[10px] shorten-text max-w-[100px]" title={desc}>{desc}</h3>
            </div>
          </div>
          <div className="flex items-center mt-3">
            <h3 className="text-[#AF7E00] font-semibold text-[13px]">
              GHS {price}
            </h3>
          </div>
          <div className="flex text-[#92929D] items-center justify-between text-[11px] mt-[2px]">
            <h3 className="shorten-text max-w-[70px]">{location ?? "Ghana"}</h3>
            <div className="flex items-center">
              <img className="mr-1" src={bullet} alt="bullet" />
              <h3 className="shorten-text">{moment(createdAt).fromNow()}</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FeaturedAdCard;
