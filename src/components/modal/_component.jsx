import React, { memo } from "react";


export const Modal = memo(({ open, children, close, closeOnOverlay }) => {
  const closeModal = () => {
    close(!open);
  };

  window.onclick = function (e) {
    let target = e.target;

    if (target.matches("#modal-container")) {
      let modalContainer = document.getElementById("modal-container");
      if (closeOnOverlay && modalContainer && modalContainer.classList.contains("block")) {
        close(!open);
      }
    }
  };

  return (
    <div id="modal-container" className={`${open ? "block" : "hidden"} grid place-items-center duration-500 ease-in fixed z-[100] left-0 top-0 w-full h-full overflow-auto bg-[rgb(0,0,0)] bg-[rgba(0,0,0,0.4)]`}>
      <div className="modal-content">
        <span onClick={() => closeModal()} className="close color-[#aaa] float-right text-right text-2xl text-gray-500 no-underline cursor-pointer relative top-0 right-[5%] md:right-[18px]">
          &times;
        </span>
        {children}
      </div>
    </div>
  );
});
;
