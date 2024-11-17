import React from "react";
import uploading from "../../assets/gifs/uploader.gif";

function Uploading() {
  return (
    <>
      <div className="fixed left-0 right-0 flex items-center justify-center -mt-8">
        <img src={uploading} className="w-32" alt="" />
        <small className="-ml-8 text-gray-400 animate-pulse">Uploading</small>
      </div>
    </>
  );
}

export default Uploading;
