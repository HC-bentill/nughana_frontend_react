import React from "react";
import Button from "../../components/button/_component";
import UploadFile from "../../components/Upload/_component";

function ChangeBannerImage({ closeModal }) {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <form className="w-[668px]" onSubmit={handleSubmit}>
        <div className="py-8 px-24 bg-white rounded-t-[16px]">
          <h3 className="font-bold flex mt-2 mb-8 justify-center text-[18px] text-[#1F2937]">
            Upload Banner Image
          </h3>

          <UploadFile />
        </div>
        <div className="flex justify-end w-full bg-[#E5E7EB] rounded-b-[16px] p-4">
          <div
            onClick={closeModal}
            className="cursor-pointer rounded-lg border-[2px] h-[38px] py-[10px] px-[12px] bg-white mr-3 w-[75px] flex justify-center text-center items-center font-semibold text-[12px] border-[#E5E7EB]"
          >
            Cancel
          </div>
          <Button
            classNames="text-white rounded-lg text-[12px] h-[38px] py-[6px] px-[8px] bg-black w-[114px]"
            name={"Uplaod Image"}
          />
        </div>
      </form>
    </>
  );
}

export default ChangeBannerImage;
