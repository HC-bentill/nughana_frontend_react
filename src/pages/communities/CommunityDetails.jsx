import React from "react";
import Button from "../../components/button/_component";
import PilesTab from "../../components/piles_tab/_component";
import AllCommunities from "./AllCommunities";
import Search from "../../assets/images/svgs/search.svg?react";
import { Modal } from "../../components/modal/_component";
import CreateCommunity from "./CreateCommunity";
import { useNavigate, useParams } from "react-router-dom";
import {
  GetCommunities,
  GetCommunitiesCoverImage,
} from "../../api/communities.service";
import { useQuery } from "react-query";
import { Loader } from "../../components/loader/_component";
import CommunitiesSidePanel from "./CommunitiesSidePanel";
import FeaturedCard from "../../components/featured_communities_card/_component";
import GroupCreatedBy from "./GroupCreatedBy";
import AboutGroup from "./AboutGroup";
import CommunityActions from "./CommunityActions";

function CommunityDetails() {
  const { id } = useParams();
  const [modalOpen, setModalOpen] = React.useState(false);
  const navigate = useNavigate();

  const communities = useQuery({
    retry: (count, err) => count < 3,
    queryKey: ["communities"],
    queryFn: () => GetCommunities().then((res) => res),
  });

  const communityBanner = useQuery({
    retry: (count, err) => count < 3,
    queryKey: ["community-details"],
    queryFn: () => GetCommunitiesCoverImage(id).then((res) => res),
  });

  let banner =
    communityBanner && communityBanner.data && communityBanner.data.data;
  let allCommunities = communities && communities.data && communities.data.data;

  console.log("bb: ", banner);
  return (
    <>
      <Modal open={modalOpen} close={() => setModalOpen(false)}>
        <CreateCommunity closeModal={() => setModalOpen(false)} />
      </Modal>

      {communities?.isLoading ? (
        <div className="flex justify-center items-center h-[100vh]">
          <Loader />
        </div>
      ) : (
        <div className="flex">
          <div className="-mt-6 pt-5 max-sm:hidden px-5 mr-8 bg-white max-w-[235px]">
            <div className="border-[#E5E5E7] border rounded-[30px] flex items-center gap-2 w-[205px] h-[40px]">
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
          <div className="flex justify-between w-full">
            <div>
              <CommunityActions />
              <GroupCreatedBy />
              <AboutGroup />
            </div>

            <div className="w-[777px]">
              <div
                style={{ backgroundImage: `url(${banner?.image})` }}
                className=" max-sm:hidden flex justify-center text-center border-[7px] border-white rounded-[15px] py-8 h-[194px]"
              >
                <div>
                  <h3 className="font-extrabold text-[22px]">
                    Title for Community Banner
                  </h3>
                  <small className="font-semibold text-[12.7px]">
                    Taglines needed
                  </small>
                  <div className="flex mt-8">
                    <Button
                      onClick={() => setModalOpen(true)}
                      classNames="bg-black mr-3 w-[186px] text-[12px] !px-5 !py-3 text-xs"
                      name={"Create a community"}
                    />
                    <Button
                      onClick={() => navigate("/view-communities")}
                      classNames="bg-[#FED28A] font-semibold !text-black w-[200px] text-[12px] border-[1px] border-black !px-5 !py-3 text-xs"
                      name={"View your communities"}
                    />
                  </div>
                </div>
              </div>
              <div className="flex justify-center md:hidden item">
                <div>
                  <div className="bg-[#FED28A] rounded-t-[15px] text-center p-8">
                    <h3 className="font-extrabold text-[22px]">
                      Title for Community Banner
                    </h3>
                    <small className="font-semibold text-[12.7px]">
                      34 communities created by you
                    </small>
                  </div>
                  <div className="flex flex-col items-center justify-center w-full p-8 bg-white">
                    <Button
                      onClick={() => setModalOpen(true)}
                      classNames="bg-black mr-3 w-[200px] text-[12px] !px-5 !py-3 text-xs"
                      name={"Create a community"}
                    />
                    <Button
                      onClick={() => navigate("/view-communities")}
                      classNames="bg-white my-2 font-semibold !text-black w-[200px] text-[12px] border-[1px] border-black !px-5 !py-3 text-xs"
                      name={"View your communities"}
                    />
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4 mt-2 max-sm:grid-cols-1">
                <>
                  {allCommunities?.map((ac, i) => (
                    <div
                      onClick={() => navigate(`/community-details/${ac.id}`)}
                      key={i}
                      className="flex items-center justify-center cursor-pointer"
                    >
                      <FeaturedCard
                        img={ac.cover_url}
                        // footerImgs={ac.footerImgs}
                        footerIconsWith={"w-[24px]"}
                        header={ac.name}
                        desc={ac.description.raw}
                        footerDesc={"700+ members"}
                        footerActionLink={ac.link}
                        footerAction={
                          <Button
                            classNames="-mt-7 !px-4 !py-1 text-xs bg-black"
                            name="Join"
                          />
                        }
                      />
                    </div>
                  ))}
                </>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default CommunityDetails;
