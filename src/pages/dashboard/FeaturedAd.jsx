import React from 'react';
import { dashboardFeaturedAd } from '../../assets/core/data';
import Button from '../../components/button/_component';
import FeaturedAdCard from '../../components/featured_ad_card/_component';
import { useNavigate } from 'react-router-dom';

function FeaturedAd({ setAdModalOpen, adModalOpen }) {
   const navigate = useNavigate();
   return (
      <>
         <div className="mt-14">
            <div className="flex justify-between">
               <h3 className="font-semibold">Featured ads</h3>
               <p className="mr-4 text-[15px] text-[#AF7E00] md:hidden block">View More</p>
               <div className="md:flex hidden mr-2">
                  <Button classNames="bg-black !px-5 !py-3 mr-3 text-xs" name={'Post an Ad'} onClick={() => setAdModalOpen(true)} />
                  <Button classNames="bg-black !px-5 !py-3 text-xs" name={'Marketplace'} onClick={() => navigate('/marketplace')} />
               </div>
            </div>

            <div className="flex max-w-full gap-2 mt-2 overflow-x-auto hide-scrollbar">
               {dashboardFeaturedAd?.map((df, i) => (
                  <div key={i} className="flex-shrink-0">
                     <FeaturedAdCard footerDesc=" " img={df.img} footerIconsWith="w-[20px]" footerImgs={df.footerImgs} header={df.name} desc={df.desc} otherClassNames={'w-[190px] mb-8'} />
                  </div>
               ))}
            </div>
            <div className="md:hidden flex justify-center mt-7 ">
               <Button classNames="bg-black w-full !px-5 !py-3 text-xs mr-3" name={'Post an Ad'} onClick={() => setAdModalOpen(true)} />
               <Button classNames="bg-black w-full  !text-xs !px-5 !py-3" name={'Marketplace'} onClick={() => navigate('/marketplace')} />
            </div>
         </div>
      </>
   );
}

export default FeaturedAd;
