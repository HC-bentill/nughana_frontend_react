import React from "react";
import Select from "react-select";
import Flatpickr from "react-flatpickr";
import { countryCode } from "../../assets/core/data";
import Button from "../../components/button/_component";
import UploadFile from "../../components/Upload/_component";

function CreateEvent({ closeModal }) {
  const fp = React.useRef(null);
  const [selectCode, setSelectedCode] = React.useState(null);

  const handleCountryCodeChange = (option) => {
    setSelectedCode(option);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <form className="w-[668px]" onSubmit={handleSubmit}>
        <div className="p-8 bg-white rounded-t-[16px]">
          <h3 className="font-bold flex mt-2 mb-8 justify-center text-[18px] text-[#1F2937]">
            Post Ad
          </h3>

          <UploadFile />
          <div className="flex items-center justify-between mt-9">
            <div className="flex flex-col">
              <label className="mb-1 font-semibold text-[14px] text-[#1F2937]">
                Event Name
              </label>
              <input
                type="text"
                placeholder="Ad Name"
                className="w-[268px] text-[12px] h-[49px] py-[14px] px-[16px] rounded-full border border-gray-300 focus:outline-none focus:border-gray-400"
              />
            </div>
            <div className="flex flex-col">
              <label className="mb-1 font-semibold text-[14px] text-[#1F2937]">
                Select Category
              </label>
              <Select
                className="w-[268px]"
                defaultValue={selectCode}
                onChange={handleCountryCodeChange}
                options={countryCode}
                placeholder="Select category"
              />
            </div>
          </div>
          <div className="flex flex-col mt-8">
            <label className="font-semibold text-[14px] text-[#1F2937]">
              Description
            </label>
            <input
              type="text"
              placeholder="Group Description"
              className="w-full text-[12px] rounded-full h-[49px] py-[14px] px-[16px] border border-gray-300 focus:outline-none focus:border-gray-400"
            />
          </div>
          <div className="flex justify-between mt-8">
            <div className="">
              <label className="mb-1 font-semibold text-[14px] text-[#1F2937]">
                Event Date
              </label>
              <Flatpickr
                className="bg-gray-50 mr-2 cursor-pointer border outline-0 border-gray-300 text-gray-900 text-sm rounded-lg block w-full pl-10 p-2.5 "
                placeholder="Start Date"
                ref={fp}
                name="start_date"
              />
              <button
                type="button"
                className="text-xs"
                onClick={() => {
                  if (!fp?.current?.flatpickr) return;
                  fp.current.flatpickr.clear();
                }}
              >
                Clear
              </button>
            </div>

            <div className="flex flex-col mr-9">
              <label className="mb-1 font-semibold text-[14px] text-[#1F2937]">
                Ad Name
              </label>
              <input
                type="text"
                placeholder="Amount in GHS"
                className="w-[268px] text-[12px] h-[49px] py-[14px] px-[16px] rounded-full border border-gray-300 focus:outline-none focus:border-gray-400"
              />
            </div>
          </div>
        </div>
        <div className="flex justify-end w-full bg-[#E5E7EB] rounded-b-[16px] p-4">
          <div
            onClick={closeModal}
            className="cursor-pointer border-[2px] h-[38px] py-[10px] px-[12px] bg-white mr-3 w-[75px] flex justify-center text-center items-center font-semibold text-[12px] border-[#E5E7EB] rounded-[40px]"
          >
            Cancel
          </div>
          <Button
            classNames="text-white text-[12px] h-[38px] py-[6px] px-[36px] bg-black w-[114px]"
            name={"Post"}
          />
        </div>
      </form>
    </>
  );
}

export default CreateEvent;
