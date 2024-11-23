import React from 'react';
import { dashboardFeaturedBusiness } from '../../assets/core/data';
import location from '../../assets/icons/location.png';
import globe from '../../assets/icons/globe.png';
import call from '../../assets/icons/call.png';
import goldWhatsapp from '../../assets/icons/gold-whatsapp.png';
import goldFb from '../../assets/icons/gold-fb.png';
import goldSnap from '../../assets/icons/gold-snap.png';
import goldInsta from '../../assets/icons/gold-insta.png';
import FeaturedCard from '../../components/featured_communities_card/_component';
import Button from '../../components/button/_component';
import { Modal } from '../../components/modal/_component';
import ListBusiness from '../business/ListBusiness';

function BusinessSection({ pathName, profileName }) {
   const [createBusinessOpen, setCreateBusinessOpen] = React.useState(false);
   return (
      <>
         <Modal open={createBusinessOpen} close={() => setCreateBusinessOpen(false)}>
            <ListBusiness closeModal={() => setCreateBusinessOpen(false)} />
         </Modal>

         <div className="grid grid-cols-3 mt-16 max-sm:grid-cols-1">
            <div className="p-8 bg-white rounded-[15px] flex justify-center">
               <div>
                  <h3 className="text-[#d3d3d5] text-[14px] font-medium">About Me</h3>
                  <hr className="border-t-2 my-3 border-[#F1F1F5]" />
                  <p className="text-[#44444F] text-[14px]">“Pushing pixels and experiences in digital products for KacyArts”</p>

                  <div className="bg-white rounded-[15px] mt-5">
                     <div className="flex items-center">
                        <img className="w-[24px] mb-2 mr-4 h-[24px]" src={location} alt="" />
                        <h3 className="text-[#171725] text-[14px]">Airport City.</h3>
                     </div>
                     <div className="flex items-center">
                        <img className="w-[24px] mb-2 mr-4 h-[24px]" src={globe} alt="" />
                        <h3 className="text-[#171725] text-[14px]">dribble.com/kacy</h3>
                     </div>
                     <div className="flex items-center">
                        <img className="w-[24px] mb-2 mr-4 h-[24px]" src={call} alt="" />
                        <h3 className="text-[#171725] text-[14px]">+233444444444</h3>
                     </div>
                     <div className="flex items-center justify-center mt-5">
                        <img className="w-[24px] h-[24px] mr-8" src={goldWhatsapp} alt="" />
                        <img className="w-[24px] h-[24px] mr-8" src={goldFb} alt="" />
                        <img className="w-[24px] h-[24px] mr-8" src={goldSnap} alt="" />
                        <img className="w-[24px] h-[24px] mr-8" src={goldInsta} alt="" />
                     </div>
                  </div>
               </div>
            </div>

            <div className="flex flex-col max-w-[604px] col-span-2 gap-4 ml-8">
               <div className="flex items-center justify-between">
                  <h3 className="text-[16px] font-semibold"> {pathName === 'others-profile' ? profileName + "'" + 's' : 'Your'} businesses</h3>
                  <div className="flex items-center">
                     <Button onClick={() => setCreateBusinessOpen(true)} classNames="bg-black mr-3 w-[151px] text-[12px] !px-5 !py-3 text-xs" name={'List a Business'} /> <h3 className="text-[#B87C01] text-[14px] font-medium">View all</h3>
                  </div>
               </div>
               <div className="flex gap-2 overflow-x-auto hide-scrollbar">
                  {dashboardFeaturedBusiness?.map((df, i) => (
                     <div key={i} className="flex-shrink-0">
                        <FeaturedCard
                           footerDesc=" "
                           img={df.img}
                           footerIconsWith="w-[15px]"
                           footerImgsOverlay={false}
                           footerImgs={df.footerImgs}
                           header={df.name}
                           desc={df.desc}
                           footerAction={
                              <a className="text-[8px] text-blue-400 underline font-semibold" href="#">
                                 View in maps
                              </a>
                           }
                        />
                     </div>
                  ))}
               </div>
            </div>
         </div>
      </>
   );
}

export default BusinessSection;
