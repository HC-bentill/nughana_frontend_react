import React from "react";
import Select from "react-select";
import Flatpickr from "react-flatpickr";
import { countryCode } from "../../assets/core/data";
import Button from "../../components/button/_component";
import UploadFile from "../../components/Upload/_component";
import { CreateAnEvent, GetEventsCategories } from "../../api/event.service";
import { useForm } from "react-hook-form";
import { getItem } from "../../api/storage.service";
import toast from "react-hot-toast";
import { useQuery } from "react-query";

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

  const eventDateOnChange = (selectedDate) => {
    setSelectedDate(selectedDate);
  };

  const eventsCategories = useQuery({
    retry: (count, err) => count < 3,
    queryKey: ["events-categories"],
    queryFn: () => GetEventsCategories().then((res) => res?.data),
  });

  const onSubmit = (data) => {
    if (!fileUrl) {
      toast.error("Please upload an image");
      return;
    }
    if (!selectedDate) {
      toast.error("Please select a date");
      return;
    }
    setLoading(true);
    let allFormData = {
      title: data.event_name,
      status: "publish",
      acf: {
        ...data,
        event_category: data?.category,
        event_date: selectedDate[0],
        event_image: fileUrl,
        phone: "05462835768",
        location: data.event_location,
        created_by: [Number(getItem("u_id"))],
      },
    };
    CreateAnEvent(allFormData)
      .then((res) => {
        if (response.status === 201) {
          setLoading(false);
          toast.success(
            <p className="text-[12px]">
              {<HtmlRenderer htmlContent={"Event created successfully"} />}
            </p>
          );
          reset();
          closeModal();
        } else {
          setLoading(false);
          toast.error(<p className="text-[12px]">An error occurred</p>);
          setFile(null);
        }
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
        toast.error(
          <p className="text-[12px]">
            {<HtmlRenderer htmlContent={res.data.message} />}
          </p>
        );
      });
  };

  const handleFileUpload = (fileUrl) => {
    setUploadedFileUrl(fileUrl);
  };
  React.useEffect(() => {
    if (uploadedFileUrl) {
      setFileUrl(uploadedFileUrl);
    } else {
      setFileUrl("");
    }
  }, [uploadedFileUrl]);
  return (
    <>
      <form
        className="w-[540px] max-sm:w-[410px] !text-[11px]"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="p-8 space-y-5 bg-white rounded-t-[16px]">
          <h3 className="font-bold flex  justify-center text-[18px] text-[#1F2937]">
            Create Event
          </h3>

          <UploadFile onUploadSuccess={handleFileUpload} />
          <div className="grid grid-cols-2 gap-2">
            <div className="flex flex-col gap-[4px]">
              <label className="font-semibold text-[11px] text-[#1F2937]">
                Event Name
              </label>
              <input
                type="text"
                placeholder="Event Name"
                {...register("event_name", { required: true })}
                className="w-full max-sm:w-[370px] text-[11px] h-[39px] py-[10px] px-[13px] rounded-full border border-gray-300 focus:outline-none focus:border-gray-400"
              />
              {errors.event_name && (
                <span className="text-red-500 text-[11px]">
                  This field is required
                </span>
              )}
            </div>

            <div className="flex flex-col gap-[4px]">
              <label className="font-semibold text-[11px] text-[#1F2937]">
                Select Category
              </label>
              <select
                className="text-[11px] w-full py-[10px] px-[13px] rounded-full border border-gray-300 focus:outline-none focus:border-gray-400"
                {...register("category", { required: true })}
              >
                <option value="">-- Select category</option>
                {eventsCategories?.data?.length > 0 &&
                  eventsCategories?.data?.map((category) => (
                    <option key={category.id} value={category.id}>
                      {category.name}
                    </option>
                  ))}
              </select>
              {errors.category && (
                <span className="text-red-500 text-[11px]">
                  This field is required
                </span>
              )}
            </div>
          </div>

          <div className="flex flex-col mt-2">
            <label className="font-semibold text-[11px] text-[#1F2937]">
              Description
            </label>
            <input
              type="text"
              placeholder="Group Description"
              {...register("description", { required: true })}
              className="w-full max-sm:w-[370px] text-[11px] rounded-full h-[39px] py-[10px] px-[13px] border border-gray-300 focus:outline-none focus:border-gray-400"
            />
            {errors.description && (
              <span className="text-red-500 text-[11px]">
                This field is required
              </span>
            )}
          </div>
          <div className="grid grid-cols-2 gap-4 mt-8 max-sm:flex-col">
            <div className="max-sm:w-[370px]">
              <label className="mb-4 font-semibold text-[11px] text-[#1F2937]">
                Event Date
              </label>
              <Flatpickr
                className="bg-gray-50 mr-2 cursor-pointer border outline-0 border-gray-300 text-gray-900 text-[11px] rounded-lg block w-full !pl-5 !p-[7px] "
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
              <label className="font-semibold text-[11px] text-[#1F2937]">
                Event Location
              </label>
              <input
                type="text"
                placeholder="Location"
                {...register("event_location", { required: true })}
                className="w-full max-sm:w-[370px] text-[11px] h-[39px] py-[1px] px-[16px] rounded-full border border-gray-300 focus:outline-none focus:border-gray-400"
              />
              {errors.location && (
                <span className="text-red-500 text-[11px]">
                  This field is required
                </span>
              )}
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
            classNames="text-white text-[11px] h-[38px] py-[6px] px-[36px] bg-black w-[114px]"
            name={"Post"}
            isLoading={loading}
          />
        </div>
      </form>
    </>
  );
}

export default CreateEvent;
