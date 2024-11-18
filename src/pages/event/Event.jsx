import React from "react";
import Button from "../../components/button/_component";
import PilesTab from "../../components/piles_tab/_component";
import Search from "../../assets/images/svgs/search.svg?react";
import { Modal } from "../../components/modal/_component";
import Messages from "../connections/Messages";
import { useNavigate } from "react-router-dom";
import AllEvents from "./AllEvents";
import CreateEvent from "./CreateEvent";

function Event() {
  const [modalOpen, setModalOpen] = React.useState(false);
  const tabOptions = [
    {
      label: "All",
      content: <AllEvents />,
    },
    {
      label: "Sports",
      content: <div className="">Sports</div>,
    },
    {
      label: "Cooking",
      content: <div className="">Cooking</div>,
    },
    {
      label: "Business",
      content: <div className="">Business</div>,
    },
    {
      label: "Party",
      content: <div className="">Party</div>,
    },
    {
      label: "Night Party",
      content: <div className="">Night Party</div>,
    },
  ];
  const navigate = useNavigate();
  return (
    <>
      <Modal open={modalOpen} close={() => setModalOpen(false)}>
        <CreateEvent closeModal={() => setModalOpen(false)} />
      </Modal>
      <div className="flex justify-between">
        <div>
          <div className="bg-[#FED28A] max-sm:hidden flex justify-center text-center ml-2 border-[7px] border-white rounded-[15px] py-8 w-[973px] h-[190px]">
            <div>
              <h3 className="font-extrabold text-[22px]">Events</h3>
              <div className="flex mt-6">
                <Button
                  onClick={() => setModalOpen(true)}
                  classNames="bg-black mr-3 w-[186px] text-[12px] !px-5 !py-3 text-xs"
                  name={"Create Event"}
                />
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center ml-6 md:hidden">
            <div className="flex flex-col">
              <div className="bg-[#FED28A] rounded-t-[15px] w-[370px] text-center p-8">
                <h3 className="font-extrabold text-[22px]">Title</h3>
                <small className="font-semibold text-[12.7px]">
                  Taglines needed
                </small>
              </div>

              <div className="flex items-center justify-center w-full p-8 bg-white">
                <Button
                  onClick={() => setModalOpen(true)}
                  classNames="bg-black mr-3 w-[186px] text-[12px] !px-5 !py-3 text-xs"
                  name={"Create Event"}
                />
              </div>
            </div>
          </div>

          <div className="flex">
            <PilesTab
              tabHeader={"Featured events"}
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

export default Event;
