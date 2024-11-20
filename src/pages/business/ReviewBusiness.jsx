import React from "react";
import starLine from "../../assets/images/star-line.png";
import Button from "../../components/button/_component";

function ReviewBusiness({ closeModal }) {
  const [rating, setRating] = React.useState(0);

  const handleRating = (index) => {
    setRating(index + 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <form className="" onSubmit={handleSubmit}>
        <div className="p-8  bg-white rounded-t-[16px] w-[380px] md:w-[668px]">
          <h3 className="font-bold flex mt-2 mb-8 justify-center text-[18px] text-[#1F2937]">
            Review Business
          </h3>
          <h3 className="flex mt-2 mb-8 justify-center text-[18px] text-[#1F2937]">
            Rate Business
          </h3>

          <div className="flex flex-col items-center space-y-2">
            <div className="flex space-x-1">
              {[...Array(5)].map((_, index) => (
                <>
                  <img
                    onClick={() => handleRating(index)}
                    className={`w-8 h-8 cursor-pointer ${
                      index < rating
                        ? "text-yellow-500"
                        : "text-yellow-500 opacity-40"
                    }`}
                    key={index}
                    src={starLine}
                    alt=""
                  />
                </>
              ))}
            </div>
          </div>
          <div className="flex items-center mt-9"></div>
          <div className="flex flex-col mt-8">
            <label className="font-semibold text-[14px] text-[#1F2937]">
              Your comment
            </label>
            <input
              type="text"
              placeholder="Write your comments"
              className="w-full text-[12px] rounded-full h-[49px] py-[14px] px-[16px] border border-gray-300 focus:outline-none focus:border-gray-400"
            />
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
            name={"Submit"}
          />
        </div>
      </form>
    </>
  );
}

export default ReviewBusiness;
