import React from 'react';
import Button from '../../components/button/_component';
import Messages from '../connections/Messages';
import BusinessSection from './BusinessSection';
import EventsSection from './EventsSection';
import AdsSection from './AdsSection';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import { GetUserProfile } from '../../api/profile.service';
import { Loader } from '../../components/loader/_component';

function Profile() {
   const navigate = useNavigate();
   const { id } = useParams();
   const location = useLocation();
   const pathName = location.pathname.split('/')[1];

   const profile = useQuery({
      retry: (count, err) => count < 3,
      queryKey: ['profile'],
      refetchOnWindowFocus: false,
      queryFn: () => GetUserProfile(id).then((res) => res),
   });

   const profileDetails = profile && profile.data && profile.data.data;
   return (
      <>
         {profile?.isLoading ? (
            <div className="flex justify-center items-center h-[100vh]">
               <Loader />
            </div>
         ) : (
            <div className="flex justify-between ml-8">
               <div className="relative">
                  <img className="w-[1010px] max-sm:object-fill max-sm:w-[342px] h-[260px] rounded-t-[15px]" src={profileDetails && profileDetails?.cover_url} />
                  <Button name={'Edit Profile'} onClick={() => navigate('/edit-profile')} classNames={` ${pathName === 'others-profile' ? 'hidden' : ''} font-semibold max-sm:hidden !rounded-[10px] flex items-center absolute top-3 right-60 h-[38px] border-[1px] border-white border-[#17172580] text-[12px] bg-[#17172580]`} />
                  <div className="absolute flex items-center top-36 left-4 max-sm:left-20">
                     <img src={profileDetails && profileDetails?.avatar_urls.thumb} className="object-contain mr-4 border-[5px] border-white rounded-full w-[156px] h-[156px]" alt="" />
                     <div className="mb-5 max-sm:hidden">
                        <h3 className="font-semibold text-[24px] text-[#FAFAFB]">{profileDetails && profileDetails?.profile_name}</h3>
                        <h3 className="text-[#D5D5DC] font-normal text-[16px]">@{profileDetails && profileDetails?.profile_name}</h3>
                     </div>
                  </div>

                  <div className="max-sm:place-items-center grid max-sm:grid-cols-1 grid-cols-3 rounded-b-[15px] pt-2 max-sm:h-[243px] h-16 max-sm:w-[342px] w-[1010px] bg-white">
                     <div></div>
                     <div className="flex items-center mb-5 md:hidden">
                        <h3 className="font-semibold text-[24px] text-[#3a3a68]">{profileDetails && profileDetails?.profile_name}</h3>
                        <h3 className="text-[#D5D5DC] font-normal text-[16px]">@kacy</h3>
                     </div>
                     <div className="md:col-span-2">
                        <div className="grid grid-cols-5 max-sm:flex max-sm:overflow-x-auto max-sm:max-w-full max-sm:gap-2 max-sm:hide-scrollbar">
                           <div className="text-[#AF7E00]">
                              <h3 className="text-[14px] max-sm:text-[11px]">Post</h3>
                              <p className="text-[16px] max-sm:text-[11px] font-semibold">10,3K</p>
                              <hr className="border-t-[2px] -ml-4 mt-2 border-[#AF7E00] w-[72px] h-[3px]" />
                           </div>
                           <div>
                              <h3 className="text-[14px] max-sm:text-[11px] text-[#92929D]">Connections</h3>
                              <p className="text-[16px] max-sm:text-[11px] font-semibold text-[#44444F]">2,464</p>
                           </div>
                           <div>
                              <h3 className="text-[14px] max-sm:text-[11px] text-[#92929D]"> Your profile</h3>
                              <p className="text-[16px] max-sm:text-[11px] font-semibold text-[#44444F]">3,154</p>
                           </div>
                           <div className="ml-3">
                              <h3 className="text-[14px] max-sm:text-[11px] text-[#92929D]">Photos</h3>
                              <p className="text-[16px] max-sm:text-[11px] font-semibold text-[#44444F]">35</p>
                           </div>
                           <div>
                              <h3 className="text-[14px] max-sm:text-[11px] text-[#92929D]">Videos</h3>
                              <p className="text-[16px] max-sm:text-[11px] font-semibold text-[#44444F]">24</p>
                           </div>
                        </div>
                     </div>
                  </div>

                  <BusinessSection pathName={pathName} profileName={profileDetails && profileDetails?.profile_name} />
                  <EventsSection pathName={pathName} profileName={profileDetails && profileDetails?.profile_name} />
                  <AdsSection pathName={pathName} profileName={profileDetails && profileDetails?.profile_name} />
               </div>

               <Messages />
            </div>
         )}
      </>
   );
}

export default Profile;
