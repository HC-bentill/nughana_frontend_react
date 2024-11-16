import React from "react";
import Button from "../../components/button/_component";
import PilesTab from "../../components/piles_tab/_component";
import Search from "../../assets/images/svgs/search.svg?react";
import { Modal } from "../../components/modal/_component";
import AllMarketPlace from "./AllMarketPlace";
import CreateAd from "./CreateAd";
import Messages from "../connections/Messages";
import { useNavigate } from "react-router-dom";

function MarketPlace() {
  const [modalOpen, setModalOpen] = React.useState(false);
  const tabOptions = [
    {
      label: "All",
      content: <AllMarketPlace />,
    },
    {
      label: "Finance",
      content: <div className="">Finance</div>,
    },
    {
      label: "Start up",
      content: <div className="">Start up</div>,
    },
    {
      label: "Entrepreneur",
      content: <div className="">Entrepreneur</div>,
    },
    {
      label: "Golfing",
      content: <div className="">Golfing</div>,
    },
    {
      label: "Sports",
      content: <div className="">Sports</div>,
    },
  ];
  const navigate = useNavigate();
  return (
    <>
      <Modal open={modalOpen} close={() => setModalOpen(false)}>
        <CreateAd closeModal={() => setModalOpen(false)} />
      </Modal>
      <div className="flex justify-between">
        <div>
          <div className="bg-[#FED28A] flex justify-center text-center ml-2 border-[7px] border-white rounded-[15px] py-8 w-[973px] h-[190px]">
            <div>
              <h3 className="font-extrabold text-[22px]">
                Title for Marketplace Banner
              </h3>
              <small className="font-semibold text-[12.7px]">
                Taglines needed
              </small>
              <div className="flex mt-6">
                <Button
                  onClick={() => setModalOpen(true)}
                  classNames="bg-black mr-3 w-[186px] text-[12px] !px-5 !py-3 text-xs"
                  name={"Post an Ad"}
                />
                <Button
                  onClick={() => navigate("/market-ad-details")}
                  classNames="bg-[#FED28A] font-semibold !text-black w-[200px] text-[12px] border-[1px] border-black !px-5 !py-3 text-xs"
                  name={"View your Ads"}
                />
              </div>
            </div>
          </div>
          <div className="flex">
            <PilesTab
              showSection={true}
              section={
                <>
                  <div className="border-[#E5E5E7] mr-8 bg-white border rounded-[30px] flex items-center gap-2 w-[217px] h-[50px]">
                    <img
                      src={Search}
                      alt="img"
                      className="w-[20px] h-[20px] shadow-sm m-1"
                    />
                    <input
                      className="text-sm font-light border-0 outline-none"
                      type="text"
                      placeholder="Search Communities"
                    />
                  </div>
                </>
              }
              tabs={tabOptions}
            />
          </div>
        </div>
        <Messages />
      </div>
    </>
  );
}

export default MarketPlace;
