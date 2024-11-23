import React from 'react';
import { dashboardFeaturedBusiness } from '../../assets/core/data';
import FeaturedCard from '../../components/featured_communities_card/_component';
import Button from '../../components/button/_component';
import CreateAd from '../marketplace/CreateAd';
import { Modal } from '../../components/modal/_component';

function AdsSection({ pathName, profileName }) {
   const [postAdOpen, setPostAdOpen] = React.useState(false);
   return (
      <>
         <Modal open={postAdOpen} close={() => setPostAdOpen(false)}>
            <CreateAd closeModal={() => setPostAdOpen(false)} />
         </Modal>

         <div className="grid grid-cols-3 mt-16 max-sm:grid-cols-1">
            <div></div>

            <div className="flex flex-col max-w-[604px] col-span-2 gap-4 ml-8">
               <div className="flex items-center justify-between">
                  <h3 className="text-[16px] font-semibold"> {pathName === 'others-profile' ? profileName + "'" + 's ads' : 'Your ads'} </h3>
                  <div className="flex items-center">
                     <Button onClick={() => setPostAdOpen(true)} classNames="bg-black mr-3 w-[151px] text-[12px] !px-5 !py-3 text-xs" name={'Post an AD'} /> <h3 className="text-[#B87C01] text-[14px] font-medium">View all</h3>
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

export default AdsSection;
