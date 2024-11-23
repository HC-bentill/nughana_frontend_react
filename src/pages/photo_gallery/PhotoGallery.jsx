import React from 'react';
import { Modal } from '../../components/modal/_component';
import Messages from '../connections/Messages';
import { useNavigate } from 'react-router-dom';
import link from '../../assets/icons/Link.png';
import CreateAd from '../marketplace/CreateAd';
import Tabs from '../../components/tab/_component';
import Photos from './Photos';

function PhotoGallery() {
   const [modalOpen, setModalOpen] = React.useState(false);

   const navigate = useNavigate();
   const tabOptions = [
      {
         label: 'Photos',
         badge: '109',
         content: <Photos />,
      },
      {
         label: 'Videos',
         badge: '4',
         content: <div className="">Finance</div>,
      },
   ];
   return (
      <>
         <Modal open={modalOpen} close={() => setModalOpen(false)}>
            <CreateAd closeModal={() => setModalOpen(false)} />
         </Modal>

         <div className="flex justify-between">
            <div className="ml-3">
               <div className="flex items-center justify-between">
                  <div className="flex items-center">
                     <img onClick={() => navigate('/marketplace')} src={link} alt="" className="w-[40px] cursor-pointer h-[40px] mr-5" />
                     <h3 className="text-[14px] font-semibold text-[#1A314D]">Photo Gallery</h3>
                  </div>
               </div>

               <div className="w-[1060px]">
                  <Tabs showBadge={true} otherClassNames={'!justify-between w-1/3'} tabs={tabOptions} />
               </div>
            </div>
            <Messages />
         </div>
      </>
   );
}

export default PhotoGallery;
