import React from 'react';
import { dashboardFeaturedEvents } from '../../assets/core/data';
import Button from '../../components/button/_component';
import FeaturedEventCard from '../../components/featured_evernts_card/_component';
import CreateEvent from '../event/CreateEvent';
import { useNavigate } from 'react-router-dom';
import { Modal } from '../../components/modal/_component';
import { GetEvents } from '../../api/event.service';
import { useQuery } from 'react-query';

function FeaturedEvents() {
   const [eventModalOpen, setEventModalOpen] = React.useState(false);
   const navigate = useNavigate();

   const events = useQuery({
      retry: (count, err) => count < 3,
      refetchOnWindowFocus: false,
      queryKey: ['events'],
      queryFn: () => GetEvents().then((res) => res?.data),
   });

   return (
      <>
         <div className="mt-14">
            <div className="flex justify-between">
               <h3 className="font-semibold">Featured events</h3>
               <p className="mr-4 text-[15px] text-[#AF7E00] md:hidden block" onClick={() => navigate('/events')}>
                  View More
               </p>
               <div className="md:flex hidden mr-2">
                  <Button classNames="bg-black !px-5 !py-3 text-xs mr-3" name={'Find events'} onClick={() => navigate('/events')} />
                  <Button classNames="bg-black !text-xs !px-5 !py-3" name={'Create an event'} onClick={() => setEventModalOpen(true)} />
               </div>
            </div>

            <div className="flex gap-2 mt-2 overflow-x-scroll hide-scrollbar">
               {events?.data?.length > 0 &&
                  events?.data?.map((ev, i) => (
                     <div className="flex items-center justify-center cursor-pointer" key={i} onClick={() => navigate(`/event-details/${ev.id}`)}>
                        <FeaturedEventCard otherClassNames={'w-[312px]'} img={ev.acf.event_image} footerImgs={ev.footerImgs} footerIconsWith={'w-[24px] mr-2'} date={ev.acf.event_date} header={ev.acf.event_name} location={ev.acf.event_location} desc={ev.desc} eventfooterDesc={'700+ members'} />
                     </div>
                  ))}
            </div>
            <div className="md:hidden flex justify-center mt-7 ">
               <Button classNames="bg-black w-full !px-5 !py-3 text-xs mr-3" name={'Find Events'} onClick={() => navigate('/events')} />
               <Button classNames="bg-black w-full  !text-xs !px-5 !py-3" name={'Create an event'} onClick={() => setEventModalOpen(true)} />
            </div>
         </div>

         <Modal open={eventModalOpen} close={() => setEventModalOpen(false)}>
            <CreateEvent closeModal={() => setEventModalOpen(false)} />
         </Modal>
      </>
   );
}

export default FeaturedEvents;
