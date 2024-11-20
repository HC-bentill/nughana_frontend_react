import React from 'react';
import { dashboardFeaturedAd } from '../../assets/core/data';
import Button from '../../components/button/_component';
import FeaturedAdCard from '../../components/featured_ad_card/_component';
import { useNavigate } from 'react-router-dom';
import { useQuery } from 'react-query';
import { GetAds } from '../../api/marketplace.service';

function FeaturedAd({ setAdModalOpen, adModalOpen }) {
   const navigate = useNavigate();

   const ads = useQuery({
      retry: (count, err) => count < 3,
      queryKey: ['getAds'],
      refetchOnWindowFocus: false,
      queryFn: () => GetAds().then((res) => res?.data),
   });

   return (
      <>
         <div className="mt-14">
            <div className="flex justify-between">
               <h3 className="font-semibold">Featured ads</h3>
               <p className="mr-4 text-[15px] text-[#AF7E00] md:hidden block" onClick={() => navigate('/marketplace')}>
                  View More
               </p>
               <div className="md:flex hidden mr-2">
                  <Button classNames="bg-black !px-5 !py-3 mr-3 text-xs" name={'Post an Ad'} onClick={() => setAdModalOpen(true)} />
                  <Button classNames="bg-black !px-5 !py-3 text-xs" name={'Marketplace'} onClick={() => navigate('/marketplace')} />
               </div>
            </div>

            <div className="flex max-w-full gap-2 mt-2 overflow-x-auto hide-scrollbar">{ads?.data?.length > 0 && ads?.data?.map((df, i) => <FeaturedAdCard img={df?.acf?.ad_image} footerIconsWith="w-[20px]" header={df?.acf?.ad_name} desc={df?.acf?.description} otherClassNames={'w-[250px] flex-shrink-0'}price={df?.acf?.ad_pricing} category={df?.acf?.category?.name} id={df?.id} createdAt={df?.date} location={df?.acf?.location} />)}</div>
            <div className="md:hidden flex justify-center mt-7 ">
               <Button classNames="bg-black w-full !px-5 !py-3 text-xs mr-3" name={'Post an Ad'} onClick={() => setAdModalOpen(true)} />
               <Button classNames="bg-black w-full  !text-xs !px-5 !py-3" name={'Marketplace'} onClick={() => navigate('/marketplace')} />
            </div>
         </div>
      </>
   );
}

export default FeaturedAd;
