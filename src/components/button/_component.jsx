import React from "react";

function Button({ name, classNames }) {
  return (
    <button className={`${classNames} rounded-full text-white px-5 py-[4px]`}>
      {name}
    </button>
  );
}

export default Button;
