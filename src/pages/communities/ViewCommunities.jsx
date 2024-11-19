import React from "react";
import Button from "../../components/button/_component";
import AllCommunities from "./AllCommunities";
import Search from "../../assets/images/svgs/search.svg?react";
import { Modal } from "../../components/modal/_component";
import CreateCommunity from "./CreateCommunity";
import { useNavigate } from "react-router-dom";
import link from "../../assets/icons/Link.png";
import CommunitiesSidePanel from "./CommunitiesSidePanel";

function ViewCommunities() {
  const [modalOpen, setModalOpen] = React.useState(false);
  const navigate = useNavigate();

  return (
    <>
      <Modal open={modalOpen} close={() => setModalOpen(false)}>
        <CreateCommunity closeModal={() => setModalOpen(false)} />
      </Modal>
      <div className="flex">
        <div className="-mt-6 max-sm:hidden pt-5 px-5 mr-8 bg-white max-w-[235px]">
          <div className="border-[#E5E5E7] border rounded-[30px] flex items-center gap-2 w-[210px] h-[50px]">
            <img
              src={Search}
              alt="img"
              className="w-[20px] h-[20px] shadow-sm m-2"
            />
            <input
              className="text-sm font-light border-0 outline-none"
              type="text"
              placeholder="Search Communities"
            />
          </div>
          <h3 className="text-[18px] mt-6 font-semibold">Communities</h3>
          <div className="flex flex-col">
            <CommunitiesSidePanel />
          </div>
        </div>
        <div>
          <div className="flex items-center mb-8">
            <img
              onClick={() => navigate("/communities")}
              src={link}
              alt=""
              className="w-[40px] cursor-pointer h-[40px] mr-5"
            />
            <h3 className="text-[14px] font-semibold text-[#1A314D]">
              My Communities
            </h3>
          </div>
          <div className="bg-[#FED28A] max-sm:hidden flex justify-center text-center ml-2 border-[7px] border-white rounded-[15px] py-8 w-[1070px] h-[194px]">
            <div>
              <h3 className="font-extrabold text-[22px]">
                Communities you have created
              </h3>
              <small className="font-semibold text-[12.7px]">
                34 communities created by you
              </small>
              <div className="flex justify-center mt-8">
                <Button
                  onClick={() => setModalOpen(true)}
                  classNames="bg-black mr-3 w-[186px] text-[12px] !px-5 !py-3 text-xs"
                  name={"Create a community"}
                />
              </div>
            </div>
          </div>
          <div className="md:hidden flex ml-3 flex-col max-sm:max-w-[400px]">
            <div className="bg-[#FED28A] rounded-t-[15px] text-center p-8">
              <h3 className="font-extrabold text-[22px]">
                Communities you have created
              </h3>
              <small className="font-semibold text-[12.7px]">
                34 communities created by you
              </small>
            </div>
            <div className="flex justify-center p-8 bg-white">
              <Button
                onClick={() => setModalOpen(true)}
                classNames="bg-black mr-3 w-[186px] text-[12px] !px-5 !py-3 text-xs"
                name={"Create a community"}
              />
            </div>
          </div>
          <div className="mt-8">
            <AllCommunities />
          </div>
        </div>
      </div>
    </>
  );
}

export default ViewCommunities;
