import React from 'react';
import { dashboardFeaturedEvents } from '../../assets/core/data';
import Button from '../../components/button/_component';
import FeaturedEventCard from '../../components/featured_evernts_card/_component';
import CreateEvent from '../event/CreateEvent';
import { useNavigate } from 'react-router-dom';
import { Modal } from '../../components/modal/_component';

function FeaturedEvents() {
   const [eventModalOpen, setEventModalOpen] = React.useState(false);
   const navigate = useNavigate();
   return (
      <>
         <div className="mt-14">
            <div className="flex justify-between">
               <h3 className="font-semibold">Featured events</h3>
               <p className="mr-4 text-[15px] text-[#AF7E00] md:hidden block">View More</p>
               <div className="md:flex hidden mr-2">
                  <Button classNames="bg-black !px-5 !py-3 text-xs mr-3" name={'Find events'} onClick={() => navigate('/events')} />
                  <Button classNames="bg-black !text-xs !px-5 !py-3" name={'Create an event'} onClick={() => setEventModalOpen(true)} />
               </div>
            </div>

            <div className="flex gap-2 mt-2 overflow-x-scroll hide-scrollbar">
               {dashboardFeaturedEvents?.map((df, i) => (
                  <div key={i} className="flex-shrink-0">
                     <FeaturedEventCard otherClassNames={'w-[240px]'} img={df.img} footerImgs={df.footerImgs} footerIconsWith={'w-[24px]'} header={df.name} desc={df.desc} dashboardfooterDesc={'700+ registered'} />
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
