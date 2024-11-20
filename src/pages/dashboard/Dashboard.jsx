import React from 'react';
import Button from '../../components/button/_component';
import { dashboardConnectCardFooter } from '../../assets/core/data';
import ConnectCard from '../../components/connect_card/_component';
import FeaturedCommunities from './FeaturedCommunities';
import FeaturedBusiness from './FeaturedBusiness';
import FeaturedEvents from './FeaturedEvents';
import FeaturedAd from './FeaturedAd';
import { GetUserDetails } from '../../api/auth.service';
import { useQuery } from 'react-query';
import { storeItem } from '../../api/storage.service';
import { Modal } from '../../components/modal/_component';
import CreateAd from '../marketplace/CreateAd';
import CreateCommunity from '../communities/CreateCommunity';
import ListBusiness from '../business/ListBusiness';
import { useNavigate } from 'react-router-dom';

export default function Dashboard() {
  const navigate = useNavigate();
   const GetUserDetailsQuery = useQuery({
      retry: (count, err) => count < 3,
      queryKey: ['Mpc'],
      queryFn: () => GetUserDetails().then((res) => res?.data),
      onSuccess: (data) => {
         storeItem('u_id', data?.id);
      },
   });

   const [adModalOpen, setAdModalOpen] = React.useState(false);

   return (
      <>
         <div className="md:ml-8 mx-auto md:px-0 px-3">
            <div className="flex md:justify-start justify-center items-center">
               <Button classNames="bg-black md:w-auto w-full !text-[11px] !px-5 !py-3  mr-3 text-xs" onClick={()=> setAdModalOpen(true)} name={'Post an Ad'} />
               <Button classNames="bg-black md:w-auto w-full !text-[11px]  !px-5 !py-3 text-xs" onClick={()=> setCommunityModalOpen(true)} name={'Create a community'} />
            </div>
            <div className="flex items-center justify-between mt-8 mb-2 mr-2">
               <h3 className="font-semibold">Find people to connect with</h3>
               <Button classNames="bg-black text-xs !px-5 !py-2 md:block hidden" onClick={()=> navigate('/connections')} name={'Find people'} />
            </div>
            <div className=" flex max-w-full gap-2 overflow-x-auto hide-scrollbar">
               {dashboardConnectCardFooter.map((dc, i) => (
                  <div key={i} className="flex-shrink-0">
                     <ConnectCard img={dc.img} name={dc.name} />
                  </div>
               ))}
            </div>
            <div className="flex justify-center">
               <Button classNames="bg-black w-full mt-5 text-xs !px-5 !py-3 md:hidden block" name={'Find people'} onClick={()=> navigate('/connections')} />
            </div>

            <FeaturedCommunities />
            <FeaturedBusiness />
            <FeaturedEvents />
            <FeaturedAd adModalOpen={adModalOpen} setAdModalOpen={setAdModalOpen} />
         </div>

         {/* modals */}
         <Modal open={adModalOpen} close={() => setAdModalOpen(false)}>
            <CreateAd closeModal={() => setAdModalOpen(false)} />
         </Modal>
      </>
   );
}
