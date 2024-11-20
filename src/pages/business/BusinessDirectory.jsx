import React, { useEffect } from 'react';
import Button from '../../components/button/_component';
import PilesTab from '../../components/piles_tab/_component';
import Search from '../../assets/images/svgs/search.svg?react';
import { Modal } from '../../components/modal/_component';
import Messages from '../connections/Messages';
import { useNavigate } from 'react-router-dom';
import ListBusiness from './ListBusiness';
import AllBusinesses from './AllBusinesses';
import { GetMarketplaceCategories } from '../../api/marketplace.service';
import { getBusinessCategories, getBusinessDirectories, GetBusinessDirectoriesByCategoryById } from '../../api/business.service';
import { useQuery } from 'react-query';
import HtmlRenderer from '../../components/html_renderer/HtmlRendrer';
import BusinessCard from '../../components/business_card/_component';
import featuredBusiness from '../../assets/images/featured-business.png';
import call from '../../assets/icons/call.png';
import whatsapp from '../../assets/icons/whatsapp.png';
import mail from '../../assets/icons/mail.png';
import { Loader } from '../../components/loader/_component';

function BusinessDirectory() {
   const [modalOpen, setModalOpen] = React.useState(false);
   const [activeTab, setActiveTab] = React.useState(0);
   const navigate = useNavigate();

   const businessCategories = useQuery({
      retry: (count, err) => count < 3,
      queryKey: ['bC'],
      queryFn: () => getBusinessCategories().then((res) => res?.data),
   });

   const GetBusinessDirectories = useQuery({
      retry: (count, err) => count < 3,
      queryKey: ['GetBusinessDirectories', activeTab],
      queryFn: () => GetBusinessDirectoriesByCategoryById(activeTab).then((res) => res?.data),
   });

   useEffect(() => {
      window.scrollTo(0, 0);
   }, [activeTab]);

   return (
      <>
         <Modal open={modalOpen} close={() => setModalOpen(false)}>
            <ListBusiness closeModal={() => setModalOpen(false)} />
         </Modal>
         {GetBusinessDirectories?.isLoading || GetBusinessDirectories?.isFetching ? (
            <div className="flex justify-center items-center h-[100vh]">
               <Loader />
            </div>
         ) : (
            <div className="md:flex justify-between md:ml-3 md:px-0 px-4 gap-5">
               <div className="flex-1">
                  <div className="bg-[#FED28A] flex justify-center text-center border-[7px] border-white rounded-[15px] py-8">
                     <div>
                        <h3 className="font-extrabold text-[22px]">Business Directory</h3>
                        <small className="font-semibold text-[12.7px]">Taglines needed</small>
                        <div className="flex mt-6">
                           <Button onClick={() => setModalOpen(true)} classNames="bg-black mr-3 w-[186px] text-[12px] !px-5 !py-3 text-xs" name={'List a Business'} />
                        </div>
                     </div>
                  </div>

                  <div className="md:flex hidden gap-2 my-5">
                     <div className="border-[#E5E5E7] bg-[#ffffff] border rounded-[30px] flex items-center gap-2 md:w-60 w-[90%] md:mx-0 mx-auto md:mb-0 mb-7">
                        <img src={Search} alt="img" className="w-[20px] h-[20px] shadow-sm m-2" />
                        <input className="text-[12px] font-light bg-[#ffffff] border-0 outline-none w-full" type="text" placeholder="Search in Business Directory" />
                     </div>

                     <div className="overflow-x-auto flex gap-2 hide-scrollbar">
                        <button onClick={() => setActiveTab(0)} className={`text-[#1F2937] shrink-0 rounded-full border-[#9CA3AF] border-[0.5px] text-[12px] px-4 font-medium py-2 ${activeTab === 0 ? '!text-white !border-none bg-black rounded-full' : 'text-gray-600'}`}>
                           All
                        </button>
                        {businessCategories?.data?.length > 0 &&
                           businessCategories?.data?.map((tab, i) => (
                              <button key={i} onClick={() => setActiveTab(tab?.id)} className={`text-[#1F2937] shrink-0 rounded-full border-[#9CA3AF] border-[0.5px] text-[12px] px-4 font-medium py-2 ${activeTab === tab?.id ? '!text-white !border-none bg-black rounded-full' : 'text-gray-600'}`}>
                                 <HtmlRenderer htmlContent={tab?.name} />
                              </button>
                           ))}
                     </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:mt-0 mt-6 md:px-0 px-1">{GetBusinessDirectories?.data?.length > 0 && GetBusinessDirectories?.data?.map((am, i) => <BusinessCard otherClassNames={''} key={i} img={am?.acf?.business_image} footerImgs={[call, whatsapp, mail]} footerIconsWith={'w-[24px] mr-2'} header={am?.business_name} desc={am.desc} eventfooterDesc={'View in google maps'} name={am?.acf?.business_name} address={am?.acf?.address} id={am?.id} link={am?.acf?.google_map_link_to_business} />)}</div>
               </div>
               <Messages />
            </div>
         )}
      </>
   );
}

export default BusinessDirectory;
