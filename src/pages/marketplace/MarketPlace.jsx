import React, { useState } from 'react';
import Button from '../../components/button/_component';
import PilesTab from '../../components/piles_tab/_component';
import Search from '../../assets/images/svgs/search.svg?react';
import { Modal } from '../../components/modal/_component';
import AllMarketPlace from './AllMarketPlace';
import CreateAd from './CreateAd';
import Messages from '../connections/Messages';
import { useNavigate } from 'react-router-dom';
import { allMarketPlace } from '../../assets/core/data';
import MarketPlaceCard from '../../components/marketplace_card/_component';
import { GetMarketplaceCategories } from '../../api/marketplace.service';
import { useQuery } from 'react-query';
import HtmlRenderer from '../../components/html_renderer/HtmlRendrer';
import market from '../../assets/images/market.png';
import { Loader } from '../../components/loader/_component';

function MarketPlace() {
   const [modalOpen, setModalOpen] = React.useState(false);
   const [activeTab, setActiveTab] = useState(0);

   const marketplaceCategories = useQuery({
      retry: (count, err) => count < 3,
      queryKey: ['Mpc'],
      refetchOnWindowFocus: false,
      queryFn: () => GetMarketplaceCategories().then((res) => res?.data),
   });

   const navigate = useNavigate();
   return (
      <>
         <Modal open={modalOpen} close={() => setModalOpen(false)}>
            <CreateAd closeModal={() => setModalOpen(false)} />
         </Modal>
         {marketplaceCategories?.isLoading || marketplaceCategories?.isFetching ? (
            <div className="flex justify-center items-center h-[100vh]">
               <Loader />
            </div>
         ) : (
            <div className="justify-between gap-5 md:flex md:ml-3 md:px-0">
               <div className="flex-1">
                  <div className="bg-[#FED28A] flex justify-center text-center border-[7px] border-white rounded-[15px] py-8">
                     <div>
                        <h3 className="font-extrabold text-[22px]">Title for Marketplace Banner</h3>
                        <small className="font-semibold text-[12.7px]">Taglines needed</small>
                        <div className="flex mt-6">
                           <Button onClick={() => setModalOpen(true)} classNames="bg-black mr-3 w-[186px] text-[12px] !px-5 !py-3 text-xs" name={'Post an Ad'} />
                           <Button onClick={() => navigate('/market-ad-details')} classNames="bg-[#FED28A] font-semibold !text-black w-[200px] text-[12px] border-[1px] border-black !px-5 !py-3 text-xs" name={'View your Ads'} />
                        </div>
                     </div>
                  </div>
                  <div className="flex gap-2 my-5">
                     <div className="border-[#E5E5E7] bg-[#ffffff] border rounded-[30px] flex items-center gap-2 md:w-52 w-[90%] md:mx-0 mx-auto md:mb-0 mb-7">
                        <img src={Search} alt="img" className="w-[20px] h-[20px] shadow-sm m-2" />
                        <input className="text-[12px] font-light bg-[#ffffff] border-0 outline-none w-full" type="text" placeholder="Search in Marketplace" />
                     </div>
                     <div className="flex gap-2 overflow-x-auto hide-scrollbar">
                        {marketplaceCategories?.data?.length > 0 &&
                           marketplaceCategories?.data?.map((tab, i) => (
                              <button key={i} onClick={() => setActiveTab(i)} className={`text-[#1F2937] shrink-0 rounded-full border-[#9CA3AF] border-[0.5px] text-[12px] px-4 font-medium py-2 ${activeTab === i ? '!text-white !border-none bg-black rounded-full' : 'text-gray-600'}`}>
                                 <HtmlRenderer htmlContent={tab?.name} />
                              </button>
                           ))}
                     </div>
                  </div>
                  <div className="grid grid-cols-3 gap-2">{marketplaceCategories?.data?.length > 0 && marketplaceCategories?.data?.map((am, i) => <MarketPlaceCard key={i} onClick={() => navigate(`/market-category/${am?.id}`)} img={market} name={am.name} />)}</div>
               </div>
               <div className="hidden xl:block">
                  <Messages />
               </div>
            </div>
         )}
      </>
   );
}

export default MarketPlace;
