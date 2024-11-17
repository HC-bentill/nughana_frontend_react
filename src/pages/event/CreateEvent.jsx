import React from "react";
import Select from "react-select";
import Flatpickr from "react-flatpickr";
import { countryCode } from "../../assets/core/data";
import Button from "../../components/button/_component";
import UploadFile from "../../components/Upload/_component";
import { CreateAnEvent } from "../../api/event.service";
import { useForm } from "react-hook-form";

function CreateEvent({ closeModal }) {
  const fp = React.useRef(null);
  const [selectedCategory, setSelectedCategory] = React.useState(null);
  const [selectedDate, setSelectedDate] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [uploadedFileUrl, setUploadedFileUrl] = React.useState("");
  const [fileUrl, setFileUrl] = React.useState("");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const handleCountryCodeChange = (option) => {
    setSelectedCategory(option.value);
  };

  const eventDateOnChange = (selectedDate) => {
    setSelectedDate(selectedDate);
  };

  const onSubmit = (data) => {
    setLoading(true);
    let allFormData = {
      title: data.event_name,
      status: "publish",
      acf: {
        ...data,
        event_category: selectedCategory,
        event_date: selectedDate[0],
        event_image: fileUrl,
      },
    };
    console.log("a: ", data);
    // CreateAnEvent(allFormData)
    //   .then((res) => {
    //     console.log(res);
    //     setLoading(false);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //     setLoading(false);
    //   });
  };

  const handleFileUpload = (fileUrl) => {
    setUploadedFileUrl(fileUrl);
  };
  React.useEffect(() => {
    if (uploadedFileUrl) {
      setFileUrl(uploadedFileUrl);
    }
  }, [uploadedFileUrl]);
  return (
    <>
      <form
        className="w-[668px] max-sm:w-[410px]"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="p-8 bg-white rounded-t-[16px]">
          <h3 className="font-bold flex  justify-center text-[18px] text-[#1F2937]">
            Post Ad
          </h3>

          <UploadFile onUploadSuccess={handleFileUpload} />
          <div className="flex justify-between md:items-center max-sm:flex-col mt-9">
            <div className="flex flex-col">
              <label className="mb-1 font-semibold text-[14px] text-[#1F2937]">
                Event Name
              </label>
              <input
                type="text"
                placeholder="Event Name"
                {...register("event_name", { required: true })}
                className="w-[268px] max-sm:w-[370px] text-[12px] h-[49px] py-[14px] px-[16px] rounded-full border border-gray-300 focus:outline-none focus:border-gray-400"
              />
            </div>
            <div className="flex flex-col max-sm:mt-3">
              <label className="md:mb-1 font-semibold text-[14px] text-[#1F2937]">
                Select Category
              </label>
              <Select
                className="w-[268px] max-sm:w-[380px]"
                defaultValue={selectedCategory}
                onChange={handleCountryCodeChange}
                options={countryCode}
                placeholder="Select category"
              />
            </div>
          </div>
          <div className="flex flex-col mt-2">
            <label className="font-semibold text-[14px] text-[#1F2937]">
              Description
            </label>
            <input
              type="text"
              placeholder="Group Description"
              {...register("description", { required: true })}
              className="w-full max-sm:w-[370px] text-[12px] rounded-full h-[49px] py-[14px] px-[16px] border border-gray-300 focus:outline-none focus:border-gray-400"
            />
          </div>
          <div className="flex justify-between mt-8 max-sm:flex-col">
            <div className="max-sm:w-[370px]">
              <label className="mb-4 font-semibold text-[14px] text-[#1F2937]">
                Event Date
              </label>
              <Flatpickr
                className="bg-gray-50 mr-2 cursor-pointer border outline-0 border-gray-300 text-gray-900 text-sm rounded-lg block w-[268px] pl-10 p-2.5 "
                placeholder="Start Date"
                ref={fp}
                value={selectedDate}
                onChange={eventDateOnChange}
                // {...register("event_date", { required: true })}
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
              <label className="mb-1 font-semibold text-[14px] text-[#1F2937]">
                Event Location
              </label>
              <input
                type="text"
                placeholder="Location"
                {...register("event_location", { required: true })}
                className="w-[268px] max-sm:w-[370px] text-[12px] h-[49px] py-[1px] px-[16px] rounded-full border border-gray-300 focus:outline-none focus:border-gray-400"
              />
            </div>
          </div>
        </div>
        <div className="flex max-sm:justify-center  justify-end w-full bg-[#E5E7EB] rounded-b-[16px] p-3">
          <div
            onClick={closeModal}
            className="cursor-pointer border-[2px] h-[38px] py-[10px] px-[12px] bg-white mr-3 w-[75px] flex justify-center text-center items-center font-semibold text-[12px] border-[#E5E7EB] rounded-[40px]"
          >
            Cancel
          </div>
          <Button
            type={"submit"}
            classNames="text-white text-[12px] h-[38px] py-[6px] px-[36px] bg-black w-[114px]"
            name={"Post"}
            // isLoading={loading}
          />
        </div>
      </form>
    </>
  );
}

export default CreateEvent;
