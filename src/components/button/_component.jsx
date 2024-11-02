import React from "react";

function Button({ name, classNames }) {
  return (
    <button className={`${classNames} text-[14px] rounded-full text-white px-7 py-3 font-light`}>
      {name}
    </button>
  );
}

export default Button;
