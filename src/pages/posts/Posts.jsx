import React from 'react';
import { Modal } from '../../components/modal/_component';
import Messages from '../connections/Messages';
import { useNavigate } from 'react-router-dom';
import link from '../../assets/icons/Link.png';
import CreateAd from '../marketplace/CreateAd';
import Tabs from '../../components/tab/_component';
import AllEvents from '../event/AllEvents';
import Button from '../../components/button/_component';
import CreateEvent from '../event/CreateEvent';

function Posts() {
   const [createEventModal, setCreateEventModal] = React.useState(false);
   const [createAdModal, setCreateAdModal] = React.useState(false);

   const navigate = useNavigate();
   const tabOptions = [
      {
         label: 'Events',
         badge: '109',
         content: <AllEvents />,
      },
      {
         label: 'Ads',
         badge: '4',
         content: <AllEvents />,
      },
   ];
   return (
      <>
         <Modal open={createAdModal} close={() => setCreateAdModal(false)}>
            <CreateAd closeModal={() => setCreateAdModal(false)} />
         </Modal>
         <Modal open={createEventModal} close={() => setCreateEventModal(false)}>
            <CreateEvent closeModal={() => setCreateEventModal(false)} />
         </Modal>

         <div className="flex justify-between max-sm:justify-center">
            <div className="ml-3">
               <div className="flex items-center justify-between">
                  <div className="flex items-center">
                     <img onClick={() => navigate('/marketplace')} src={link} alt="" className="w-[40px] cursor-pointer h-[40px] mr-5" />
                     <h3 className="text-[14px] font-semibold text-[#1A314D]">My Posts</h3>
                  </div>
                  <div className="max-sm:hidden">
                     <Button classNames=" bg-black md:w-auto w-full mr-5 !text-[11px]  !px-5 !py-2 text-xs" onClick={() => setCreateAdModal(true)} name={'Post an Ad'} />
                     <Button classNames="bg-black md:w-auto w-full !text-[11px]  !px-5 !py-2 text-xs" onClick={() => setCreateEventModal(true)} name={'Create an Event'} />
                  </div>
               </div>
               <div className="flex justify-between mt-8 max-sm:justify-center md:hidden">
                  <Button classNames=" bg-black md:w-auto w-full mr-5 !text-[11px]  !px-5 !py-2 text-xs" onClick={() => setCreateAdModal(true)} name={'Post an Ad'} />
                  <Button classNames="bg-black md:w-auto w-full !text-[11px]  !px-5 !py-2 text-xs" onClick={() => setCreateEventModal(true)} name={'Create an Event'} />
               </div>

               <div className="md:w-[1060px]">
                  <Tabs showBadge={true} otherClassNames={'!justify-between md:w-1/3'} tabs={tabOptions} />
               </div>
            </div>
            <Messages />
         </div>
      </>
   );
}

export default Posts;
