import React from "react";
import avatar from "../../assets/images/svgs/avatar.svg";
import Select from "react-select";
import { categories, countryCode } from "../../assets/core/data";
import Button from "../../components/button/_component";
import { useForm } from "react-hook-form";
import { CreateACommunity } from "../../api/communities.service";
import HtmlRenderer from "../../components/html_renderer/HtmlRendrer";
import toast from "react-hot-toast";

function CreateCommunity({ closeModal }) {
  const [seletedCategory, setSelectedCategory] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const handleCountryCodeChange = (option) => {
    setSelectedCategory(option.value);
  };

  const onSubmit = (data) => {
    setLoading(true);
    let allFormData = {
      ...data,
      type: seletedCategory,
    };
    CreateACommunity(allFormData)
      .then((res) => {
        if (res.status === 200) {
          setLoading(false);
          toast.success(
            <p className="text-[12px]">
              {<HtmlRenderer htmlContent={"Community created successfully"} />}
            </p>
          );
          reset();
          closeModal();
        } else {
          setLoading(false);
          toast.error(
            <p className="text-[12px]">
              {<HtmlRenderer htmlContent={res.data.message} />}
            </p>
          );
        }
      })
      .catch((err) => {
        setLoading(false);
        toast.error(
          <p className="text-[12px]">
            {<HtmlRenderer htmlContent={err.response?.data?.message} /> ??
              "An error occured. Please try again !"}
          </p>
        );
      });
  };
  return (
    <>
      <form className="" onSubmit={handleSubmit(onSubmit)}>
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
          <div className="grid grid-cols-2 max-sm:flex-col">
            <div className="flex flex-col mr-4">
              <label className="font-semibold text-[11px] text-[#1F2937]">
                Community Name
              </label>
              <input
                type="text"
                placeholder="Community Name"
                {...register("name", { required: true })}
                className="w-full max-sm:w-[370px] text-[11px] h-[39px] py-[10px] px-[13px] rounded-full border border-gray-300 focus:outline-none focus:border-gray-400"
              />
              {errors.name && (
                <span className="text-red-500 text-[11px]">
                  This field is required
                </span>
              )}
            </div>
            <div className="flex flex-col w-full max-sm:mt-3">
              <label className="font-semibold text-[11px] text-[#1F2937]">
                Select Category
              </label>
              <select
                className="text-[11px] w-full py-[10px] px-[13px] rounded-full border border-gray-300 focus:outline-none focus:border-gray-400"
                {...register("category", { required: true })}
                name="cars"
                id="cars"
              >
                <option value="">-- Select category</option>
                <option value="volvo">Cat 1</option>
                <option value="saab">Cat 2</option>
                <option value="mercedes">Cat 3</option>
                <option value="audi">Cat 4</option>
              </select>

              {errors.category && (
                <span className="text-red-500 text-[11px]">
                  This field is required
                </span>
              )}
            </div>
          </div>
          <div className="flex flex-col mt-8">
            <label className="font-semibold text-[11px] text-[#1F2937]">
              About Community
            </label>
            <input
              type="text"
              placeholder="Community Description"
              {...register("description", { required: true })}
              className="w-full text-[12px] rounded-full h-[39px] py-[3px] px-[13px] border border-gray-300 focus:outline-none focus:border-gray-400"
            />
            {errors.description && (
              <span className="text-red-500 text-[11px]">
                This field is required
              </span>
            )}
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
            type={"submit"}
            classNames="text-white text-[12px] h-[38px] py-[6px] px-[36px] bg-black w-[114px]"
            name={"Create"}
            isLoading={loading}
          />
        </div>
      </form>
    </>
  );
}

export default CreateCommunity;
