import React from "react";
import Select from "react-select";
import Flatpickr from "react-flatpickr";
import { countryCode } from "../../assets/core/data";

function ProfileForm() {
  const fp = React.useRef(null);
  const [selectCode, setSelectedCode] = React.useState(null);
  const handleCountryCodeChange = (option) => {
    setSelectedCode(option);
  };

  return (
    <>
      <div className="m-8 text-[14px] bg-white rounded-[15px]">
        <form action="">
          <h3 className="font-medium text-[#171725] py-6 px-8">
            Personal details
          </h3>
          <hr className="border-[1px] !px-0 border-[#E6E8EE]" />
          <div className="grid grid-cols-2 gap-4 p-8">
            <div className="flex flex-col mr-4">
              <label className="mb-1 font-semibold text-[12px] text-[#1F2937]">
                First Name
              </label>
              <input
                type="text"
                placeholder="  First Name"
                name="first_name"
                className="w-[400px] text-[12px] h-[49px] py-[14px] px-[16px] rounded-full border border-gray-300 focus:outline-none focus:border-gray-400"
              />
            </div>
            <div className="flex flex-col mr-4">
              <label className="mb-1 font-semibold text-[12px] text-[#1F2937]">
                Last Name
              </label>
              <input
                type="text"
                placeholder="Last Name"
                name="last_name"
                className="w-[400px] text-[12px] h-[49px] py-[14px] px-[16px] rounded-full border border-gray-300 focus:outline-none focus:border-gray-400"
              />
            </div>
            <div className="flex flex-col mr-4">
              <label className="mb-1 font-semibold text-[12px] text-[#1F2937]">
                Other Names
              </label>
              <input
                type="text"
                placeholder="Other Names"
                name="other_names"
                className="w-[400px] text-[12px] h-[49px] py-[14px] px-[16px] rounded-full border border-gray-300 focus:outline-none focus:border-gray-400"
              />
            </div>
            <div className="flex flex-col">
              <label className="mb-1 font-semibold text-[12px] text-[#1F2937]">
                Select Category
              </label>
              <Select
                className="!w-[408px] !h-[49px] !rounded-full "
                defaultValue={selectCode}
                onChange={handleCountryCodeChange}
                options={countryCode}
                placeholder="Select category"
              />
            </div>

            <div className="">
              <label className="mb-1 font-semibold text-[12px] text-[#1F2937]">
                Date of Birth
              </label>
              <Flatpickr
                className="bg-gray-50 mr-2 cursor-pointer border outline-0 border-gray-300 text-gray-900 text-sm rounded-full block w-[400px] py-[14px] px-[16px]"
                placeholder="Select date"
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
            <div className="flex flex-col">
              <label className="font-semibold text-[12px] text-[#1F2937]">
                Nationality
              </label>
              <Select
                className="!w-[409px] !h-[49px] !rounded-full"
                defaultValue={selectCode}
                onChange={handleCountryCodeChange}
                options={countryCode}
                placeholder="Select country"
              />
            </div>
          </div>

          {/* profile details */}
          <h3 className="font-medium text-[#171725] py-6 px-8">
            Profile Details
          </h3>
          <hr className="border-[1px] border-[#E6E8EE]" />
          <div className="flex flex-col px-8 py-6 mt-8">
            <label className="font-semibold text-[12px] text-[#1F2937]">
              Write your description here
            </label>
            <input
              type="text"
              placeholder="Group Description"
              className="w-full text-[12px] rounded-full h-[49px] py-[14px] px-[16px] border border-gray-300 focus:outline-none focus:border-gray-400"
            />
          </div>

          <h3 className="font-medium text-[#171725] py-6 px-8">
            Contact Details
          </h3>
          <hr className="border-[1px] border-[#E6E8EE]" />
          <div className="grid grid-cols-2 gap-4 p-8">
            <div className="flex flex-col mr-4">
              <label className="mb-1 font-semibold text-[12px] text-[#1F2937]">
                Mobile Number
              </label>
              <input
                type="number"
                placeholder="0000"
                name="first_name"
                className="w-[400px] text-[12px] h-[49px] py-[14px] px-[16px] rounded-full border border-gray-300 focus:outline-none focus:border-gray-400"
              />
            </div>
            <div className="flex flex-col mr-4">
              <label className="mb-1 font-semibold text-[12px] text-[#1F2937]">
                Email
              </label>
              <input
                type="text"
                placeholder="Email"
                name="first_name"
                className="w-[400px] text-[12px] h-[49px] py-[14px] px-[16px] rounded-full border border-gray-300 focus:outline-none focus:border-gray-400"
              />
            </div>

            <div className="flex flex-col mr-4">
              <label className="mb-1 font-semibold text-[12px] text-[#1F2937]">
                City
              </label>
              <input
                type="text"
                placeholder="Accra, Ghana"
                name="first_name"
                className="w-[400px] text-[12px] h-[49px] py-[14px] px-[16px] rounded-full border border-gray-300 focus:outline-none focus:border-gray-400"
              />
            </div>

            <div className="flex flex-col mr-4">
              <label className="mb-1 font-semibold text-[12px] text-[#1F2937]">
                Website
              </label>
              <input
                type="text"
                placeholder="Website link"
                name="first_name"
                className="w-[400px] text-[12px] h-[49px] py-[14px] px-[16px] rounded-full border border-gray-300 focus:outline-none focus:border-gray-400"
              />
            </div>

            <div className="flex flex-col mr-4">
              <label className="mb-1 font-semibold text-[12px] text-[#1F2937]">
                Snapchat
              </label>
              <input
                type="text"
                placeholder="Snapcat link"
                name="first_name"
                className="w-[400px] text-[12px] h-[49px] py-[14px] px-[16px] rounded-full border border-gray-300 focus:outline-none focus:border-gray-400"
              />
            </div>

            <div className="flex flex-col mr-4">
              <label className="mb-1 font-semibold text-[12px] text-[#1F2937]">
                Instagram
              </label>
              <input
                type="text"
                placeholder="Instagram link"
                name="first_name"
                className="w-[400px] text-[12px] h-[49px] py-[14px] px-[16px] rounded-full border border-gray-300 focus:outline-none focus:border-gray-400"
              />
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default ProfileForm;
