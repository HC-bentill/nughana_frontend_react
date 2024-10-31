import React from "react";

function Button({ name, classNames }) {
  return (
    <button className={`${classNames} rounded-full text-white px-7 py-3 font-light`}>
      {name}
    </button>
  );
}

export default Button;
