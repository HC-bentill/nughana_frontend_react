import React from "react";

function Button({ name, classNames, onClick, type, isLoading }) {
  return (
    <button
      disabled={isLoading}
      type={!type ? "button" : type}
      onClick={onClick}
      className={`${classNames} text-[11px] md:text-[13px] rounded-full text-white px-7 py-3 font-light`}
    >
      {isLoading ? "Please Wait..." : name}
    </button>
  );
}

export default Button;
