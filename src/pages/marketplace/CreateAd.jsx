import React from "react";
import Select from "react-select";
import fileImg from "../../assets/images/file.png";
import { countryCode } from "../../assets/core/data";
import Button from "../../components/button/_component";
import { useForm } from "react-hook-form";
import { useQuery } from "react-query";
import {
  CreateMarketplaceAd,
  GetMarketplaceCategories,
} from "../../api/marketplace.service";
import { FileUploader } from "react-drag-drop-files";
import { BiTrash } from "react-icons/bi";
import toast from "react-hot-toast";
import HtmlRenderer from "../../components/html_renderer/HtmlRendrer";
import { UploadFile } from "../../api/upload.service";
import { useNavigate } from "react-router-dom";
import { getItem } from "../../api/storage.service";

function CreateAd({ closeModal }) {
  const [selectCode, setSelectedCode] = React.useState(null);
  const [isLoading, setIsloading] = React.useState(false);
  const [file, setFile] = React.useState(null);
  const fileTypes = ["JPEG", "PNG"];
  const navigate = useNavigate();

  const marketplaceCategories = useQuery({
    retry: (count, err) => count < 3,
    queryKey: ["Mpc"],
    queryFn: () => GetMarketplaceCategories().then((res) => res?.data),
  });

  const handleCountryCodeChange = (option) => {
    setSelectedCode(option);
  };

  const [loading, setLoading] = React.useState(false);
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = (data) => {
    setIsloading(true);
    if(!file) {
      toast.error(<p className="text-[12px]">Please upload an image</p>);
      setIsloading(false);
      return;
    }

    let payload = {
      title: data?.ad_name,
      status: "publish",
      acf: {
        ad_name: data?.ad_name,
        category: data?.category,
        description: data?.description,
        ad_pricing: data?.ad_pricing,
        ad_image: file?.id,
        created_by: getItem("u_id"),
        phone: data?.phone,
        location: data?.location,
      },
    }; 

    CreateMarketplaceAd(payload)
      .then((response) => {
        setIsloading(false);
        if (response.status === 201) {
          toast.success(<p className="text-[12px]">Ad created successfully</p>);
          navigate(`/market-ad-details/${response.data?.id}`);
        } else {
          isLoading(false);
          toast.error(<p className="text-[12px]">An error occurred</p>);
          setFile(null);
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

  const handleChange = (file) => {
    setIsloading(true);

    const data = new FormData();
    data.append("file", file);

    UploadFile(data)
      .then((response) => {
        setIsloading(false);
        if (response.status === 201) {
          toast.success(<p className="text-[12px]">File uploaded successfully</p>);
          setFile({
            preview: URL.createObjectURL(file),
            id: response?.data?.id,
          });
        } else {
          isLoading(false);
          toast.error("An error occurred");
          setFile(null);
        }
      })
      .catch((err) => {
        setIsloading(false);
        toast.error(
          <p className="text-[12px]">
            {<HtmlRenderer htmlContent={err.response?.data?.message} /> ??
              "An error occured. Please try again !"}
          </p>
        );
      });
  };

  const handleRemoveImage = (e) => {
    if (window.confirm("Do you really want to remove image?")) {
      setFile(null);
    }
  };

  return (
    <>
      <form className="" onSubmit={handleSubmit(onSubmit)}>
        <div className="p-6 px-16  bg-white rounded-t-[16px] md:w-[540px]">
          <h3 className="font-bold flex mt-2 mb-5 justify-center text-[16px] text-[#1F2937]">
            Post Ad
          </h3>
          {/* border-2 pt-12 border-dashed rounded-lg pb-1 text-center border-[#E5E7EB] */}
          <div className="">
            {isLoading && (
              <p className="bg-yellow-600 text-[12px] text-white text-center py-2">
                Processing
              </p>
            )}
            {file?.preview ? (
              <div
                style={{ backgroundImage: `url(${file?.preview})` }}
                className="relative bg-no-repeat bg-center bg-cover rounded-lg pb-1 items-center border-[2px] border-[#f0f0f0] border-dashed h-[170px] w-full"
              >
                <p
                  className="text-xs font-extrabold cursor-pointer text-red-500 hover:text-red-700 absolute top-0 right-0 bg-white p-[3px]"
                  onClick={() => handleRemoveImage()}
                >
                  {file?.preview ? <BiTrash size={20} /> : ""}
                </p>
              </div>
            ) : (
              <FileUploader
                className="w-full"
                multiple={false}
                handleChange={handleChange}
                name="file"
                types={fileTypes}
              >
                <div className="flex flex-col justify-end rounded-lg pb-1 items-center border-[2px] border-[#f0f0f0] border-dashed h-[170px] w-full">
                  <img src={fileImg} className="w-[55px] object-contain" />
                  <p className="text-gray-500 mt-3 text-[12px] font-medium">
                    Drop your ad image here or{" "}
                    <span className="text-blue-500">browse</span>
                  </p>
                  <p className=" text-gray-400 text-[11px]">
                    Maximum size: 50MB
                  </p>
                </div>
              </FileUploader>
            )}
          </div>

          <div className="space-y-5 mt-5 mb-9">
            <div className="grid grid-cols-2 gap-2">
              <div className="flex flex-col gap-[4px]">
                <label className="font-semibold text-[11px] text-[#1F2937]">
                  Ad Name
                </label>
                <input
                  type="text"
                  placeholder="Ad Name"
                  className=" text-[11px] w-full py-[10px] px-[13px] rounded-full border border-gray-300 focus:outline-none focus:border-gray-400"
                  {...register("ad_name", { required: true })}
                />
                {errors.ad_name && (
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
                  {marketplaceCategories?.data?.length > 0 &&
                    marketplaceCategories?.data?.map((category) => (
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

            <div className="flex flex-col gap-[4px]">
              <label className="font-semibold text-[11px] text-[#1F2937]">
                Ad Pricing
              </label>
              <input
                type="text"
                placeholder="Amount in GHS"
                className="text-[11px] py-[10px] px-[13px] rounded-full border border-gray-300 focus:outline-none focus:border-gray-400"
                {...register("ad_pricing", { required: true })}
              />
              {errors.ad_pricing && (
                <span className="text-red-500 text-[11px]">
                  This field is required
                </span>
              )}
            </div>

            <div className="grid grid-cols-2 gap-2">
              <div className="flex flex-col gap-[4px]">
                <label className="font-semibold text-[11px] text-[#1F2937]">
                  Location
                </label>
                <input
                  type="text"
                  placeholder="Ad Description"
                  className="w-full text-[11px] rounded-full py-[10px] px-[13px] border border-gray-300 focus:outline-none focus:border-gray-400"
                  {...register("location", { required: true })}
                />
                {errors.location && (
                  <span className="text-red-500 text-[11px]">
                    This field is required
                  </span>
                )}
              </div>

              <div className="flex flex-col gap-[4px]">
                <label className="font-semibold text-[11px] text-[#1F2937]">
                  Phone Number
                </label>
                <input
                  type="text"
                  placeholder="Ad Description"
                  className="w-full text-[11px] rounded-full py-[10px] px-[13px] border border-gray-300 focus:outline-none focus:border-gray-400"
                  {...register("phone", {
                    required: "This field is required",
                    pattern: {
                      value:
                        /^[+]?[0-9]{1,4}[.\-\s]?[0-9]{1,4}[.\-\s]?[0-9]{1,4}[.\-\s]?[0-9]{1,9}$/,
                      message: "Please enter a valid phone number",
                    },
                  })}
                />
                {errors.phone && (
                  <span className="text-red-500 text-[11px]">
                    {errors?.phone?.message}
                  </span>
                )}
              </div>
            </div>

            <div className="flex flex-col gap-[4px]">
              <label className="font-semibold text-[11px] text-[#1F2937]">
                Description
              </label>
              <input
                type="text"
                placeholder="Ad Description"
                className="w-full text-[11px] rounded-full py-[10px] px-[13px] border border-gray-300 focus:outline-none focus:border-gray-400"
                {...register("description", { required: true })}
              />
              {errors.description && (
                <span className="text-red-500 text-[11px]">
                  This field is required
                </span>
              )}
            </div>
          </div>
        </div>

        <div className="flex gap-3 justify-end w-full bg-[#E5E7EB] rounded-b-[16px] p-4">
          <Button
            classNames="text-white text-[11px] py-[6px] px-[36px] bg-[#F9FAFB] w-[114px] !text-black"
            name={"Cancel"}
            onClick={closeModal}
          />
          <Button
            classNames="text-white text-[11px] py-[6px] px-[36px] bg-black w-[114px]"
            name={"Post"}
            type={"submit"}
          />
        </div>
      </form>
    </>
  );
}

export default CreateAd;
