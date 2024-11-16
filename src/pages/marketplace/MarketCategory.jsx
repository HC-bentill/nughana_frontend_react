import React, { useEffect } from "react";
import Button from "../../components/button/_component";
import { communitiesSideTray } from "../../assets/core/data";
import Search from "../../assets/images/svgs/search.svg?react";
import { Modal } from "../../components/modal/_component";
import { Link, useNavigate, useParams } from "react-router-dom";
import link from "../../assets/icons/Link.png";
import AllCommunities from "../communities/AllCommunities";
import CreateAd from "./CreateAd";
import MarketCategoryAds from "./MarketCategoryAds";
import Messages from "../connections/Messages";
import { useQuery } from "react-query";
import { GetAdsByCategoryById, GetMarketplaceCategory } from "../../api/marketplace.service";
import HtmlRenderer from "../../components/html_renderer/HtmlRendrer";
import { Loader } from "../../components/loader/_component";
import { get } from "react-hook-form";

function MarketCategory() {
  const [modalOpen, setModalOpen] = React.useState(false);
  const navigate = useNavigate();
  let { id } = useParams();

  const marketplaceCategory = useQuery({
    retry: (count, err) => count < 3,
    queryKey: ["Mpc1"],
    queryFn: () => GetMarketplaceCategory(id).then((res) => res?.data),
  });

  const GetAdsByCategory = useQuery({
    retry: (count, err) => count < 3,
    queryKey: ["MpcbyId"],
    queryFn: () => GetAdsByCategoryById(id).then((res) => res?.data),
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);


  return (
    <>
      <Modal open={modalOpen} close={() => setModalOpen(false)}>
        <CreateAd closeModal={() => setModalOpen(false)} />
      </Modal>
      {marketplaceCategory?.isLoading || GetAdsByCategory?.isLoading || GetAdsByCategory?.isFetching ? (
        <div className="flex justify-center items-center h-[100vh]">
          <Loader />
        </div>
      ) : (
        <div className="md:flex justify-between md:ml-3 md:px-0 gap-10">
          <div className="flex-1">
            <div className="flex items-center mb-8">
              <Link to="/marketplace">
                <img
                  onClick={() => navigate(-1)}
                  src={link}
                  alt=""
                  className="w-[40px] cursor-pointer h-[40px] mr-5"
                />
              </Link>

              <h3 className="text-[14px] font-semibold text-[#1A314D]">
                <HtmlRenderer htmlContent={marketplaceCategory?.data?.name} />
              </h3>
            </div>
            <div className="bg-[#FED28A] flex justify-center text-center border-[7px] border-white rounded-[15px] py-8 h-[194px]">
              <div>
                <h3 className="font-extrabold text-[22px]">
                  <HtmlRenderer htmlContent={marketplaceCategory?.data?.name} />
                </h3>
                <small className="text-[11px]">
                  {marketplaceCategory?.data?.description}
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
            <div className="flex gap-2 my-5">
              <div className="border-[#E5E5E7] bg-[#ffffff] border rounded-[30px] flex items-center gap-2 md:w-52 w-[90%] md:mx-0 mx-auto md:mb-0 mb-7">
                <img
                  src={Search}
                  alt="img"
                  className="w-[20px] h-[20px] shadow-sm m-2"
                />
                <input
                  className="text-[12px] font-light bg-[#ffffff] border-0 outline-none w-full"
                  type="text"
                  placeholder="Search in Marketplace"
                />
              </div>
            </div>
            <MarketCategoryAds category={marketplaceCategory?.data?.name} ads={GetAdsByCategory?.data} />
          </div>
          <div className="hidden xl:block">
            <Messages />
          </div>
        </div>
      )}
    </>
  );
}

export default MarketCategory;
