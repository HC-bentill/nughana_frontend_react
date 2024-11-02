// src/components/ZoomCarousel.js
import React, { useState } from "react";
import { stayConn } from "../../assets/core/data";

const items = [
  { id: 1, content: "Item 1" },
  { id: 2, content: "Item 2" },
  { id: 3, content: "Item 3" },
  { id: 4, content: "Item 4" },
  { id: 5, content: "Item 5" },
];

const ZoomCarousel = () => {
  const [highlightedIndex, setHighlightedIndex] = useState(2);

  const handleMouseEnter = (index) => {
    setHighlightedIndex(index);
  };

  const handleMouseLeave = () => {
    setHighlightedIndex(2); // Reset to center item on mouse leave
  };

  return (
    <div onMouseLeave={handleMouseLeave}>
      <div className="flex items-center md:justify-center overflow-x-scroll scrollbar-hidden">
        {stayConn.map((item, index) => {
          const distance = Math.abs(highlightedIndex - index);
          const scale = distance === 0 ? 1 : Math.max(0.7, 1 - distance * 0.2);
          const zIndex = highlightedIndex === index ? 1 : 0; // Set z-index for highlighted item

          return (
            <div
              key={index}
              className={`relative px-[180px] mx-[-52px] bg-top bg-cover bg-no-repeat  transition-transform duration-300 ease-in-out flex items-center justify-center rounded-[32px] h-[360px]`}
              style={{
                transform: `scale(${scale})`,
                zIndex,
                backgroundImage: `url(${item.img})`,
              }}
              onMouseEnter={() => handleMouseEnter(index)}
            >
              <div className="absolute text-white h-[140px] w-full border-[1px] border-none bottom-0 rounded-br-[32px] rounded-bl-[32px] backdrop-blur-lg bg-black/40">
                <div className=" ml-5 mt-5">
                  <p className="font-bold text-[20px]">{item.label}</p>
                  <p className="text-sm font-light mt-1">{item.desc}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ZoomCarousel;
