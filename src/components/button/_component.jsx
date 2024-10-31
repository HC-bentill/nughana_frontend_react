import React from "react";

function Button({ name, bgColor }) {
  return (
    <button className={`${bgColor} rounded-full text-white px-7 py-3 font-light`}>
      {name}
    </button>
  );
}

export default Button;
