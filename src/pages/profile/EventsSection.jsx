import React from 'react';
import { dashboardFeaturedEvents } from '../../assets/core/data';
import Button from '../../components/button/_component';
import profilePhotos from '../../assets/images/profile-photos.png';
import FeaturedEventCard from '../../components/featured_evernts_card/_component';
import { useNavigate } from 'react-router-dom';
import { Modal } from '../../components/modal/_component';
import CreateEvent from '../event/CreateEvent';
import ListBusiness from '../business/ListBusiness';

function EventsSection({ pathName, profileName }) {
   const navigate = useNavigate();
   const [createEventOpen, setCreateEventOpen] = React.useState(false);
   return (
      <>
         <Modal open={createEventOpen} close={() => setCreateEventOpen(false)}>
            <CreateEvent cancelModal={() => setCreateEventOpen(false)} />
         </Modal>

         <div className="grid grid-cols-3 mt-16 max-sm:grid-cols-1">
            <div className="p-8 bg-white rounded-[15px]">
               <div className="flex items-center justify-between">
                  <h3 className="text-[#171725] text-[14px] font-medium">Photos and Videos</h3>
                  <h3 onClick={() => navigate('/photo-gallery')} className="text-[#B87C01] cursor-pointer text-[14px] font-medium">
                     See all
                  </h3>
               </div>
               <hr className="border-t-2 my-3 border-[#F1F1F5]" />
               <div className="grid grid-cols-3 gap-4 mt-3">
                  <img src={profilePhotos} className="w-[97px] h-[90px]" alt="" />
                  <img src={profilePhotos} className="w-[97px] h-[90px]" alt="" />
                  <img src={profilePhotos} className="w-[97px] h-[90px]" alt="" />
                  <img src={profilePhotos} className="w-[97px] h-[90px]" alt="" />
                  <img src={profilePhotos} className="w-[97px] h-[90px]" alt="" />
                  <img src={profilePhotos} className="w-[97px] h-[90px]" alt="" />
               </div>
            </div>

            <div className="flex flex-col max-w-[604px] col-span-2 gap-4 ml-8">
               <div className="flex items-center justify-between">
                  <h3 className="text-[16px] font-semibold"> {pathName === 'others-profile' ? profileName + "'" + 's events' : 'Events you created'}</h3>
                  <div className="flex items-center">
                     <Button onClick={() => setCreateEventOpen(true)} classNames="bg-black mr-3 w-[151px] text-[12px] !px-5 !py-3 text-xs" name={'Create an Event'} />
                     <h3 className="text-[#B87C01] text-[14px] font-medium">View all</h3>
                  </div>
               </div>
               <div className="flex gap-2 mt-2 overflow-x-scroll hide-scrollbar">
                  {dashboardFeaturedEvents?.map((df, i) => (
                     <div key={i} className="flex-shrink-0">
                        <FeaturedEventCard otherClassNames={'w-[240px]'} img={df.img} footerImgs={df.footerImgs} footerIconsWith={'w-[24px]'} header={df.name} desc={df.desc} dashboardfooterDesc={'700+ registered'} />
                     </div>
                  ))}
               </div>
            </div>
         </div>
      </>
   );
}

export default EventsSection;
