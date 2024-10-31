import React from "react";
import bullet from "../../assets/images/svgs/bullet.svg";

function Piles({ name }) {
  return (
    <>
      <div className="p-1 bg-gray-300 rounded-full opacity-65">
        <div className="flex items-center justify-center text-sm list-disc">
          <img src={bullet} className="pr-2" alt="bullet" />
          {name}
        </div>
      </div>
    </>
  );
}

export default Piles;
