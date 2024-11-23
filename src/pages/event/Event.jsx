import React from 'react';
import Button from '../../components/button/_component';
import Search from '../../assets/images/svgs/search.svg?react';
import { Modal } from '../../components/modal/_component';
import Messages from '../connections/Messages';
import AllEvents from './AllEvents';
import CreateEvent from './CreateEvent';
import { GetEventsCategories } from '../../api/event.service';
import { useQuery } from 'react-query';
import HtmlRenderer from '../../components/html_renderer/HtmlRendrer';
import { Loader } from '../../components/loader/_component';

function Event() {
   const [modalOpen, setModalOpen] = React.useState(false);
   const [activeTab, setActiveTab] = React.useState(0);

   const eventsCategories = useQuery({
      retry: (count, err) => count < 3,
      queryKey: ['Evc'],
      queryFn: () => GetEventsCategories().then((res) => res?.data),
   });

   return (
      <>
         <Modal open={modalOpen} close={() => setModalOpen(false)}>
            <CreateEvent cancelModal={() => setModalOpen(false)} />
         </Modal>

         {eventsCategories?.isLoading || eventsCategories?.isFetching ? (
            <div className="flex justify-center items-center h-[100vh]">
               <Loader />
            </div>
         ) : (
            <div className="md:flex justify-between md:ml-3 md:px-0 px-4 gap-5">
               <div className="flex-1">
                  <div className="bg-[#FED28A] max-sm:hidden flex justify-center text-center ml-9 border-[7px] border-white rounded-[15px] py-8  h-[190px]">
                     <div>
                        <h3 className="font-extrabold text-[22px]">Events</h3>
                        <div className="flex mt-6">
                           <Button onClick={() => setModalOpen(true)} classNames="bg-black mr-3 w-[186px] text-[12px] !px-5 !py-3 text-xs" name={'Create Event'} />
                        </div>
                     </div>
                  </div>
                  <div className="flex items-center justify-center ml-6 md:hidden">
                     <div className="flex flex-col">
                        <div className="bg-[#FED28A] rounded-t-[15px] w-[370px] text-center p-8">
                           <h3 className="font-extrabold text-[22px]">Title</h3>
                           <small className="font-semibold text-[12.7px]">Taglines needed</small>
                        </div>

                        <div className="flex items-center justify-center w-full p-8 bg-white">
                           <Button onClick={() => setModalOpen(true)} classNames="bg-black mr-3 w-[186px] text-[12px] !px-5 !py-3 text-xs" name={'Create Event'} />
                        </div>
                     </div>
                  </div>
                  <div className="flex items-center my-4 ml-9">
                     <div className="border-[#E5E5E7] max-sm:hidden mr-8 bg-white border rounded-[30px] flex items-center gap-2 w-[217px] h-[43px]">
                        <img src={Search} alt="img" className="w-[15px] h-[15px] ml-3 shadow-sm m-1" />
                        <input className="text-xs font-light border-0 outline-none" type="text" placeholder="Search Events..." />
                     </div>
                     <div className="flex gap-2 overflow-x-auto hide-scrollbar max-sm:grid max-sm:grid-cols-3 max-sm:">
                        {eventsCategories?.data?.length > 0 &&
                           eventsCategories?.data?.map((tab, i) => (
                              <button key={i} onClick={() => setActiveTab(i)} className={`text-[#1F2937] capitalize shrink-0 rounded-full border-[#9CA3AF] border-[0.5px] text-[12px] px-4 font-medium py-2 ${activeTab === i ? '!text-white !border-none bg-black rounded-full' : 'text-gray-600'}`}>
                                 <HtmlRenderer htmlContent={tab?.name} />
                              </button>
                           ))}
                     </div>
                  </div>
                  <div className="ml-9">
                     <AllEvents />
                  </div>
                  {/* <PilesTab showSection={true} tabHeader={'Featured events'} section={<></>} tabs={tabOptions} /> */}
               </div>
               <div className="hidden xl:block">
                  <Messages />
               </div>
            </div>
         )}
      </>
   );
}

export default Event;
