import React, { useEffect } from 'react';
import Button from '../../components/button/_component';
import { Modal } from '../../components/modal/_component';
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
import { dashboardFeaturedEvents } from '../../assets/core/data';
import CreateAd from '../marketplace/CreateAd';
import FeaturedEventCard from '../../components/featured_evernts_card/_component';
import { GetEvent } from '../../api/event.service';
import { useQuery } from 'react-query';
import moment from 'moment';
import { Loader } from '../../components/loader/_component';
import AllEvents from './AllEvents';
import HtmlRenderer from '../../components/html_renderer/HtmlRendrer';

function EventDetails() {
   const { id } = useParams();
   const [modalOpen, setModalOpen] = React.useState(false);

   const navigate = useNavigate();
   const event = useQuery({
      retry: (count, err) => count < 3,
      // staleTime: Infinity,
      queryKey: ['event'],
      refetchOnWindowFocus: false,
      queryFn: () => GetEvent(id).then((res) => res),
      // onSuccess: (data) => onProductFetchSuccess(data),
   });

   useEffect(() => {
      window.scrollTo(0, 0);
   }, [id]);

   let eventData = event && event.data && event.data.data;

   const imgTag = eventData && eventData.acf?.created_by?.user_avatar;
   const imgMatch = imgTag && imgTag.match(/src='([^']+)'/);

   return (
      <>
         <Modal open={modalOpen} close={() => setModalOpen(false)}>
            <CreateAd closeModal={() => setModalOpen(false)} />
         </Modal>

         {event?.isLoading || event?.isFetching ? (
            <div className="flex justify-center items-center h-[100vh]">
               <Loader />
            </div>
         ) : (
            <>
               <div className="md:flex justify-between md:ml-3 md:px-0 px-4 gap-5">
                  <div className="flex-1">
                     <div className="flex items-center justify-between max-sm:mb-8">
                        <div className="flex items-center">
                           <img onClick={() => navigate('/events')} src={link} alt="" className="w-[40px] cursor-pointer h-[40px] mr-5" />
                           <h3 className="text-[14px] font-semibold text-[#1A314D]">{eventData && eventData.acf.event_name}</h3>
                        </div>
                        <Button
                           //   onClick={() => setModalOpen(true)}
                           classNames="bg-black flex justify-center m-auto max-sm:hidden mr-3 w-[173px] text-[12px] !px-5 !py-3 text-xs"
                           name={'Register'}
                        />
                     </div>
                     <div className="hidden md:block border-[6px] border-white h-[180px] mt-4 rounded-[15px] relative bg-center bg-no-repeat bg-contain" style={{ backgroundImage: `url(${eventData && eventData.acf.event_image})` }}>
                        <div className="bg-[#FEF9C3] px-3 py-1 rounded-full absolute flex items-center left-2 top-2">
                           <img className="w-1 h-1 mr-2" src={g_bullet} alt="bullet" />
                           <small className="text-[#EAB308] text-[12px]">
                              <HtmlRenderer htmlContent={eventData?.acf?.event_category?.name} />
                           </small>
                        </div>
                     </div>
                     {/* <div className="max-sm:hidden flex justify-center text-center mt-9 py-8 h-[190px]">
                        <div className="relative">
                           <img src={eventData && eventData.acf.event_image} className="border-[7px] border-white h-[181px] w-[985px] rounded-[15px] " alt="" />
                           <div className="bg-[#FEF9C3] px-3 py-1 rounded-full absolute flex items-center left-3 top-3">
                              <img className="w-1 h-1 mr-2" src={g_bullet} alt="bullet" />
                              <small className="text-[#EAB308]">Event</small>
                           </div>
                        </div>
                     </div> */}
                     <div className="flex flex-col py-3 ml-2 md:hidden">
                        <div className="relative">
                           <img src={eventData && eventData.acf.event_image} className="border-[7px] object-fill h-[149px] w-full border-white rounded-t-[15px] " alt="" />
                           <div className="bg-[#FEF9C3] px-3 py-1 rounded-full absolute flex items-center left-3 top-3">
                              <img className="w-1 h-1 mr-2" src={g_bullet} alt="bullet" />
                              <small className="text-[#EAB308] text-[11px]"> <HtmlRenderer htmlContent={eventData?.acf?.event_category?.name} /></small>
                           </div>
                        </div>
                        <div className="flex justify-center bg-white p-8 w-full">
                           <Button
                              //   onClick={() => setModalOpen(true)}
                              classNames="bg-black mr-3 w-[173px] text-[12px] !px-5 !py-3 text-xs"
                              name={'Register'}
                           />
                        </div>
                     </div>
                     <div className="grid md:grid-cols-3 gap-5 mt-5">
                        <div className="col-span-2">
                           <div className="flex items-center justify-between mb-6">
                              <h3 className="font-extrabold shorten-text max-w-[250px] text-[16px]">{eventData && eventData.acf.event_name}</h3>
                              <h3 className="font-extrabold text-[16px] text-[#AF7E00]">{moment(eventData && eventData.acf.event_date, ['MM/DD/YYYY', 'DD/MM/YYYY']).format('Do MMMM YYYY')}</h3>
                           </div>
                           <div className="bg-white h-[243px] rounded-[15px]">
                              <h3 className="p-4 text-[12px]">Description</h3>
                              <hr />
                              <p className="p-4 text-[#44444F] text-[12px]">{eventData && eventData.acf.description}</p>
                           </div>
                        </div>
                        <div className="md:col-span-1 col-span-2">
                           <div className="p-4 bg-white rounded-[15px]">
                              <h3 className="text-[#171725] text-[13px]">Event Created by</h3>
                              <div className="flex my-3">
                                 <img src={imgMatch && imgMatch[1]} className="mr-3 w-[34px] h-[34px] rounded-full" alt="" />
                                 <div>
                                    <h3 className="text-[#171725] text-[12px]">{eventData && eventData.acf.created_by.user_firstname == '' ? eventData && eventData.acf.created_by.user_nicename : eventData && eventData.acf.created_by.user_firstname + ' ' + eventData && eventData.acf.created_by.user_lastname}</h3>
                                    <small className="text-[#92929D] text-[10px]">{moment(eventData && eventData.acf.created_by.user_registered, 'YYYY-MM-DD').format('D MMMM [at] hh:mm A')}</small>
                                 </div>
                              </div>
                              <div className="flex items-center mb-4">
                                 <img className="w-[18px] mr-4 h-[18px]" src={location} alt="" />
                                 <h3 className="text-[#171725] text-[12px]">{eventData && eventData.acf.event_location}</h3>
                              </div>
                              <div className="flex items-center mb-4">
                                 <img className="w-[18px] mr-4 h-[18px]" src={globe} alt="" />
                                 <h3 className="text-[#171725] text-[12px]">{eventData && eventData.acf.created_by.user_email}</h3>
                              </div>
                              <div className="flex items-center mb-4">
                                 <img className="w-[18px] mr-4 h-[18px]" src={call} alt="" />
                                 <h3 className="text-[#171725] text-[12px]">{eventData && eventData.acf.phone}</h3>
                              </div>

                              <div className="flex items-center gap-7 mt-5">
                                 <img className="w-[28px] h-[28px] max-sm:mr-3" src={goldWhatsapp} alt="" />
                                 <img className="w-[28px] h-[28px] max-sm:mr-3" src={goldFb} alt="" />
                                 <img className="w-[28px] h-[28px] max-sm:mr-3" src={goldSnap} alt="" />
                                 <img className="w-[28px] h-[28px] max-sm:mr-3" src={goldInsta} alt="" />
                              </div>
                           </div>
                        </div>
                     </div>
                     <h3 className="mb-5 mt-12 ml-4 text-[18px] font-semibold">Similar Events</h3>
                     <AllEvents />
                  </div>
                  <div className="hidden xl:block">
                     <Messages />
                  </div>
               </div>
            </>
         )}
      </>
   );
}
export default EventDetails;
