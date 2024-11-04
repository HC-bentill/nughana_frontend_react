import React from "react";
import Button from "../../components/button/_component";
import { communitiesSideTray } from "../../assets/core/data";
import Search from "../../assets/images/svgs/search.svg?react";
import { Modal } from "../../components/modal/_component";
import { useNavigate } from "react-router-dom";
import link from "../../assets/icons/link.png";
import AllCommunities from "../communities/AllCommunities";
import CreateAd from "./CreateAd";
import MarketCategoryAds from "./MarketCategoryAds";
import Messages from "../connections/Messages";

function MarketCategory() {
  const [modalOpen, setModalOpen] = React.useState(false);
  const navigate = useNavigate();

  return (
    <>
      <Modal open={modalOpen} close={() => setModalOpen(false)}>
        <CreateAd closeModal={() => setModalOpen(false)} />
      </Modal>
      <div className="flex">
        <div className="mx-2">
          <div className="flex items-center mb-8">
            <img
              onClick={() => navigate("/marketplace")}
              src={link}
              alt=""
              className="w-[40px] cursor-pointer h-[40px] mr-5"
            />
            <h3 className="text-[14px] font-semibold text-[#1A314D]">
              Category Name
            </h3>
          </div>
          <div className="bg-[#FED28A] flex justify-center text-center ml-2 border-[7px] border-white rounded-[15px] py-8 w-[985px] h-[194px]">
            <div>
              <h3 className="font-extrabold text-[22px]">Category Name</h3>
              <small className="font-semibold text-[12.7px]">
                Taglines needed
              </small>
              <div className="flex justify-center mt-8">
                <Button
                  onClick={() => setModalOpen(true)}
                  classNames="bg-black mr-3 w-[186px] text-[12px] !px-5 !py-3 text-xs"
                  name={"Post an Ad"}
                />
              </div>
            </div>
          </div>
          <MarketCategoryAds />
        </div>
        <Messages />
      </div>
    </>
  );
}

export default MarketCategory;
