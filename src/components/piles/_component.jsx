import React from "react";
import bullet from "../../assets/images/svgs/bullet.svg";

function Piles({ name }) {
  return (
    <>
      <div className="px-1 py-2 bg-gray-400 rounded-full">
        <div className="flex items-center justify-center text-sm list-disc">
          <img src={bullet} className="pr-2" alt="bullet" />
          {name}
        </div>
      </div>
    </>
  );
}

export default Piles;
