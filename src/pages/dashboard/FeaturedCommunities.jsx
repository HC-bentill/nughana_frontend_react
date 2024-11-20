import React from 'react';
import { dashboardFeaturedCommunity } from '../../assets/core/data';
import Button from '../../components/button/_component';
import FeaturedCard from '../../components/featured_communities_card/_component';
import { Modal } from '../../components/modal/_component';
import CreateCommunity from '../communities/CreateCommunity';
import { useNavigate } from 'react-router-dom';
import { useQuery } from 'react-query';
import { GetCommunities } from '../../api/communities.service';

function FeaturedCommunities() {
   const [communityModalOpen, setCommunityModalOpen] = React.useState(false);
   const navigate = useNavigate();

   const getCommunities = useQuery({
      retry: (count, err) => count < 3,
      queryKey: ['GetCommunities'],
      refetchOnWindowFocus: false,
      queryFn: () => GetCommunities().then((res) => res?.data),
   });

   return (
      <>
         <div className="mt-14">
            <div className="flex justify-between items-center">
               <h3 className="font-semibold">Featured Communities</h3>
               <p className="mr-4 text-[15px] text-[#AF7E00] md:hidden block" onClick={() => navigate('/communities')}>
                  View More
               </p>
               <div className="md:flex hidden mr-2">
                  <Button classNames="bg-black !px-5 !py-2 text-xs mr-3" name={'Find community'} onClick={() => navigate('/communities')} />
                  <Button classNames="bg-black  !text-xs !px-5 !py-3" name={'Create a community'} onClick={() => setCommunityModalOpen(true)} />
               </div>
            </div>

            <div className="flex max-w-full gap-2 mt-2 overflow-x-auto hide-scrollbar">
               {getCommunities?.data?.map((df, i) => (
                  <div key={i} className="flex-shrink-0">
                     <div onClick={() => navigate(`/community-details/${ac.id}`)} key={i} className="flex items-center justify-center cursor-pointer">
                        <FeaturedCard
                           img={df.cover_url}
                           // footerImgs={ac.footerImgs}
                           footerIconsWith={'w-[24px]'}
                           header={df.name}
                           desc={df.description.raw}
                           footerDesc={'700+ members'}
                           footerActionLink={df.link}
                           footerAction={<Button classNames="-mt-7 !px-4 !py-1 text-xs bg-black" name="Join" />}
                        />
                     </div>{' '}
                  </div>
               ))}
            </div>
            <div className="md:hidden flex justify-center mt-7 ">
               <Button classNames="bg-black w-full !px-5 !py-3 text-xs mr-3" name={'Find community'} onClick={() => navigate('/communities')} />
               <Button classNames="bg-black w-full  !text-xs !px-5 !py-3" name={'Create a community'} onClick={() => setCommunityModalOpen(true)} />
            </div>
         </div>

         <Modal open={communityModalOpen} close={() => setCommunityModalOpen(false)}>
            <CreateCommunity closeModal={() => setCommunityModalOpen(false)} />
         </Modal>
      </>
   );
}

export default FeaturedCommunities;
