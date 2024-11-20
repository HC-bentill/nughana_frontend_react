import React, { useEffect } from 'react';
import Button from '../../components/button/_component';
import { Modal } from '../../components/modal/_component';
import AllMarketPlace from './AllMarketPlace';
import CreateAd from './CreateAd';
import Messages from '../connections/Messages';
import { useNavigate, useParams } from 'react-router-dom';
import link from '../../assets/icons/Link.png';
import adBanner from '../../assets/images/adBanner.png';
import g_bullet from '../../assets/icons/g-bullet.png';
import adProfile from '../../assets/images/ad-profile.png';
import location from '../../assets/icons/location.png';
import globe from '../../assets/icons/globe.png';
import call from '../../assets/icons/call.png';
import goldWhatsapp from '../../assets/icons/gold-whatsapp.png';
import goldFb from '../../assets/icons/gold-fb.png';
import goldSnap from '../../assets/icons/gold-snap.png';
import goldInsta from '../../assets/icons/gold-insta.png';
import { dashboardFeaturedAd } from '../../assets/core/data';
import FeaturedAdCard from '../../components/featured_ad_card/_component';
import { useQuery } from 'react-query';
import { GetAd, GetAds } from '../../api/marketplace.service';
import { Loader } from '../../components/loader/_component';
import HtmlRenderer from '../../components/html_renderer/HtmlRendrer';
import moment from 'moment';

function MarketAdDetails() {
   const [modalOpen, setModalOpen] = React.useState(false);
   const { id } = useParams();
   const navigate = useNavigate();

   const ads = useQuery({
      retry: (count, err) => count < 3,
      queryKey: ['getAds'],
      queryFn: () => GetAds().then((res) => res?.data),
   });

   const ad = useQuery({
      retry: (count, err) => count < 3,
      queryKey: ['getAd', id],
      queryFn: () => GetAd(id).then((res) => res?.data),
   });

   useEffect(() => {
      window.scrollTo(0, 0);
   }, [id]);

   const imgTag = ad?.data?.acf?.created_by?.user_avatar;
   const imgMatch = imgTag?.match(/src='([^']+)'/);

   const handleContactSeller = () => {
      window.location.href = `tel:${ad?.data?.acf?.phone}`;
   };

   return (
      <>
         <Modal open={modalOpen} close={() => setModalOpen(false)}>
            <CreateAd closeModal={() => setModalOpen(false)} />
         </Modal>
         {ads?.isLoading || ad?.isLoading || ad?.isFetching ? (
            <div className="flex justify-center items-center h-[100vh]">
               <Loader />
            </div>
         ) : (
            <div className="md:flex justify-between md:ml-3 md:px-0 px-4 gap-5">
               <div className="flex-1">
                  <div className="flex items-center justify-between">
                     <div className="flex items-center">
                        <img onClick={() => navigate(-1)} src={link} alt="" className="w-[40px] cursor-pointer h-[40px] mr-5" />
                        <h3 className="text-[14px] shorten-text max-w-[150px] font-semibold text-[#1A314D]">{ad?.data?.acf?.ad_name}</h3>
                     </div>
                     <Button onClick={handleContactSeller} classNames="bg-black mr-3 w-[173px] text-[12px] !px-5 !py-3 text-xs" name={'Contact Seller'} />
                  </div>
                  {/* <div className="flex justify-center text-center ml-2 py-8  h-[190px]">
              <div className="relative">
                <img
                  src={adBanner}
                  className="border-[7px] border-white rounded-[15px] "
                  alt=""
                />
                <div className="bg-[#FEF9C3] px-3 py-1 rounded-full absolute flex items-center left-4 top-4">
                  <img className="w-1 h-1 mr-2" src={g_bullet} alt="bullet" />
                  <small className="text-[#EAB308] text-[12px]"><HtmlRenderer htmlContent={ad?.data?.acf?.category?.name}/></small>
                </div>
              </div>
            </div> */}
                  <div className="border-[6px] border-white h-[180px] mt-4 rounded-[15px] relative bg-center bg-no-repeat bg-contain" style={{ backgroundImage: `url(${ad?.data?.acf?.ad_image})` }}>
                     <div className="bg-[#FEF9C3] px-3 py-1 rounded-full absolute flex items-center left-2 top-2">
                        <img className="w-1 h-1 mr-2" src={g_bullet} alt="bullet" />
                        <small className="text-[#EAB308] text-[12px]">
                           <HtmlRenderer htmlContent={ad?.data?.acf?.category?.name} />
                        </small>
                     </div>
                  </div>
                  <div className="grid md:grid-cols-3 gap-5 mt-5">
                     <div className="col-span-2">
                        <div className="flex items-center justify-between mb-6">
                           <h3 className="font-extrabold shorten-text max-w-[250px] text-[18px]">{ad?.data?.acf?.ad_name}</h3>
                           <h3 className="font-extrabold text-[18px] text-[#AF7E00]">GHS {ad?.data?.acf?.ad_pricing}</h3>
                        </div>
                        <div className="bg-white min-h-[243px] rounded-[15px]">
                           <h3 className="p-4 text-[12px]">Description</h3>
                           <hr />
                           <p className="p-4 text-[#44444F] text-[12px]">
                              <HtmlRenderer htmlContent={ad?.data?.acf?.description} />
                           </p>
                        </div>
                     </div>
                     <div className="md:col-span-1 col-span-2">
                        <div className="p-4 bg-white rounded-[15px]">
                           <h3 className="text-[#171725] text-[13px]">Ad Created by</h3>
                           <div className="flex my-3">
                              <img src={imgMatch[1]} className="mr-3 w-[34px] h-[34px] rounded-full" alt="" />
                              <div>
                                 <h3 className="text-[#171725] text-[12px]">{ad?.data?.acf?.created_by?.display_name}</h3>
                                 <small className="text-[#92929D] text-[10px]">{moment(ad?.data?.date).format('D MMMM [at] hh:mm A')}</small>
                              </div>
                           </div>
                           <div className="flex items-center mb-4">
                              <img className="w-[18px] mr-4 h-[18px]" src={location} alt="" />
                              <h3 className="text-[#171725] text-[12px]">{ad?.data?.acf?.location}</h3>
                           </div>
                           <div className="flex items-center mb-4">
                              <img className="w-[18px] mr-4 h-[18px]" src={globe} alt="" />
                              <h3 className="text-[#171725] text-[12px]">{ad?.data?.acf?.created_by?.user_email}</h3>
                           </div>
                           <div className="flex items-center mb-4">
                              {ad?.data?.acf?.phone && (
                                 <>
                                    {' '}
                                    <img className="w-[18px] mr-4 h-[18px]" src={call} alt="" />
                                    <h3 className="text-[#171725] text-[12px]">{ad?.data?.acf?.phone}</h3>
                                 </>
                              )}
                           </div>
                           <div className="flex items-center gap-7 mt-5">
                              <img className="w-[22px] h-[22px]" src={goldWhatsapp} alt="" />
                              <img className="w-[22px] h-[22px]" src={goldFb} alt="" />
                              <img className="w-[22px] h-[22px]" src={goldSnap} alt="" />
                              <img className="w-[22px] h-[22px]" src={goldInsta} alt="" />
                           </div>
                        </div>
                     </div>
                  </div>
                  <h3 className="mb-5 mt-12 ml-4 text-[18px] font-semibold">Similar Ads</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:mx-3">
                     {ads?.data?.map((df, i) => (
                        <FeaturedAdCard img={df?.acf?.ad_image} footerIconsWith="w-[20px]" header={df?.acf?.ad_name} desc={df.acf?.description} otherClassNames="w-full" price={df.acf?.ad_pricing} id={df.id} category={df.acf?.category?.name} createdAt={df?.date} location={df?.acf?.location} />
                     ))}
                  </div>
               </div>
               <div className="hidden xl:block">
                  <Messages />
               </div>
            </div>
         )}
      </>
   );
}

export default MarketAdDetails;
