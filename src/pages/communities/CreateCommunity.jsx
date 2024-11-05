import React from "react";
import avatar from "../../assets/images/svgs/avatar.svg";
import Select from "react-select";
import { countryCode } from "../../assets/core/data";
import Button from "../../components/button/_component";

function CreateCommunity({ closeModal }) {
  const [selectCode, setSelectedCode] = React.useState(null);
  const handleCountryCodeChange = (option) => {
    setSelectedCode(option);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <form className="" onSubmit={handleSubmit}>
        <div className="p-8 bg-white">
          <h3 className="font-bold flex mt-2 mb-8 justify-center text-[18px] text-[#1F2937]">
            Create a Community
          </h3>
          <div className="flex justify-center mb-8">
            <img src={avatar} className="w-[62px] h-[62px]" />
          </div>
          <div className="flex justify-center mb-5">
            <Button
              classNames={
                "font-semibold !rounded-[10px] text-[10px] bg-gray-400 text-white"
              }
              name={"Change Community Image"}
            />
          </div>
          <div className="flex items-center">
            <div className="flex flex-col mr-4">
              <label className="mb-1 font-semibold text-[14px] text-[#1F2937]">
                Community Name
              </label>
              <input
                type="text"
                placeholder="Community Name"
                className="w-[268px] text-[12px] h-[49px] py-[14px] px-[16px] rounded-full border border-gray-300 focus:outline-none focus:border-gray-400"
              />
            </div>
            <div className="flex flex-col">
              <label className="mb-1 font-semibold text-[14px] text-[#1F2937]">
                Select Category
              </label>
              <Select
                className="w-[268px] !h-[49px] !rounded-full"
                defaultValue={selectCode}
                onChange={handleCountryCodeChange}
                options={countryCode}
                placeholder="Select category"
              />
            </div>
          </div>
          <div className="flex flex-col mt-8">
            <label className="font-semibold text-[14px] text-[#1F2937]">
              About Community
            </label>
            <input
              type="text"
              placeholder="Community Description"
              className="w-full text-[12px] rounded-full h-[49px] py-[14px] px-[16px] border border-gray-300 focus:outline-none focus:border-gray-400"
            />
          </div>
        </div>
        <div className="flex justify-end w-full bg-[#E5E7EB] p-4">
          <div
            onClick={closeModal}
            className="cursor-pointer border-[2px] h-[38px] py-[10px] px-[12px] bg-white mr-3 w-[75px] flex justify-center text-center items-center font-semibold text-[12px] border-[#E5E7EB] rounded-[40px]"
          >
            Cancel
          </div>
          <Button
            classNames="text-white text-[12px] h-[38px] py-[6px] px-[36px] bg-black w-[114px]"
            name={"Create"}
          />
        </div>
      </form>
    </>
  );
}

export default CreateCommunity;
