import React from "react";
import { galleryPhotos } from "../../assets/core/data";

function Photos() {
  return (
    <>
      <div className="grid grid-cols-2 gap-5">
        <img className="w-[496px]" src={galleryPhotos.gallery1} alt="" />
        <div className="grid grid-cols-2 gap-4">
          <img className="w-[496px]" src={galleryPhotos.gallery2} alt="" />
          <img className="w-[496px]" src={galleryPhotos.gallery3} alt="" />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-6 mt-3">
        <div className="grid w-full max-w-lg grid-cols-2 gap-4 mx-auto">
          <div className="col-span-1 row-span-1">
            <img
              src={galleryPhotos.gallery4}
              alt="Flowers"
              className="object-cover w-[238px] h-full"
            />
          </div>{" "}
          <div className="col-span-1 row-span-2">
            <img
              src={galleryPhotos.gallery5}
              alt="Lamp"
              className="object-cover w-[238px] h-full"
            />
          </div>
          <div className="col-span-1 row-span-1">
            <img
              src={galleryPhotos.gallery6}
              alt="Leaves"
              className="object-cover w-[238px] h-full"
            />
          </div>
        </div>

        <div className="grid">
          <img className="w-[496px]" src={galleryPhotos.gallery1} alt="" />
          <div className="grid grid-cols-2 mt-2">
            <img src={galleryPhotos.gallery4} alt="" />
            <img src={galleryPhotos.gallery6} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Photos;
