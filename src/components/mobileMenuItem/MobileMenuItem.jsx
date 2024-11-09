import React from "react";
import { BsChevronRight } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const MobileMenuItem = ({ icon, label, badge, href, onSelect }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    onSelect();
    navigate(href);
  };

  return (
    <div
      className="flex cursor-pointer items-center justify-between py-3"
      onClick={() => handleClick()}
    >
      <div className="flex items-center gap-3">
        <img src={icon} alt="img" className="object-contain h-5 w-5" />
        <p className="text-[#858997] text-[13px]">{label}</p>
      </div>

      <div className="flex items-center gap-6">
        {badge && (
          <div className="bg-[#FEF9C3] text-[#EAB308] rounded-full py-[1px] text-[8px] px-[6px]">
            9
          </div>
        )}
        <p className="text-[#858997] text-[13px]">
          <BsChevronRight />
        </p>
      </div>
    </div>
  );
};

export default MobileMenuItem;
