import React from "react";

function Button({ name, bgColor }) {
  return (
    <button className={`${bgColor} rounded-full text-white px-5 py-2`}>
      {name}
    </button>
  );
}

export default Button;
