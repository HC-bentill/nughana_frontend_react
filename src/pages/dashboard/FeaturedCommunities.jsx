import React from 'react';
import { dashboardFeaturedCommunity } from '../../assets/core/data';
import Button from '../../components/button/_component';
import FeaturedCard from '../../components/featured_communities_card/_component';
import { Modal } from '../../components/modal/_component';
import CreateCommunity from '../communities/CreateCommunity';
import { useNavigate } from 'react-router-dom';

function FeaturedCommunities() {
   const [communityModalOpen, setCommunityModalOpen] = React.useState(false);
   const navigate = useNavigate();
   return (
      <>
         <div className="mt-14">
            <div className="flex justify-between items-center">
               <h3 className="font-semibold">Featured Communities</h3>
               <p className="mr-4 text-[15px] text-[#AF7E00] md:hidden block">View More</p>
               <div className="md:flex hidden mr-2">
                  <Button classNames="bg-black !px-5 !py-2 text-xs mr-3" name={'Find community'} onClick={() => navigate('/communities')} />
                  <Button classNames="bg-black  !text-xs !px-5 !py-3" name={'Create a community'} onClick={() => setCommunityModalOpen(true)} />
               </div>
            </div>

            <div className="flex max-w-full gap-2 mt-2 overflow-x-auto hide-scrollbar">
               {dashboardFeaturedCommunity?.map((df, i) => (
                  <div key={i} className="flex-shrink-0">
                     <FeaturedCard img={df.img} footerImgs={df.footerImgs} footerIconsWith={'w-[24px]'} footerImgsOverlay={true} header={df.name} desc={df.desc} footerDesc={'700+ members'} footerAction={<Button classNames="text-xs bg-black w-full  !py-[9px]" name="Join" />} />
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
