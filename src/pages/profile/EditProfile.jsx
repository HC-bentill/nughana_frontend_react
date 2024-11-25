import React from 'react';
import { Modal } from '../../components/modal/_component';
import Messages from '../connections/Messages';
import { useNavigate } from 'react-router-dom';
import ProfileForm from './ProfileForm';
import ChangeProfileImage from './ChangeProfileImage';
import ChangeBannerImage from './ChangeBannerImage';

function EditProfile() {
   const [changeProfileImageModal, setChangeProfileImageModal] = React.useState(false);
   const [changeBannerImageModal, setChangeBannerImageModal] = React.useState(false);
   const navigate = useNavigate();
   return (
      <>
         <Modal open={changeProfileImageModal} close={() => setChangeProfileImageModal(false)}>
            <ChangeProfileImage closeModal={() => setChangeProfileImageModal(false)} />
         </Modal>
         <Modal open={changeBannerImageModal} close={() => setChangeBannerImageModal(false)}>
            <ChangeBannerImage closeModal={() => setChangeBannerImageModal(false)} />
         </Modal>

         <div className="flex justify-between">
            <div>
               {/* form here */}
               <ProfileForm />
            </div>
            <Messages />
         </div>
      </>
   );
}

export default EditProfile;
