import React from 'react';
import Button from '../../components/button/_component';
import PilesTab from '../../components/piles_tab/_component';
import AllCommunities from './AllCommunities';
import Search from '../../assets/images/svgs/search.svg?react';
import { Modal } from '../../components/modal/_component';
import CreateCommunity from './CreateCommunity';
import { useNavigate } from 'react-router-dom';
import { GetCommunities } from '../../api/communities.service';
import { useQuery } from 'react-query';
import { Loader } from '../../components/loader/_component';
import CommunitiesSidePanel from './CommunitiesSidePanel';

function Communities() {
   const [modalOpen, setModalOpen] = React.useState(false);
   const navigate = useNavigate();

   const communities = useQuery({
      retry: (count, err) => count < 3,
      queryKey: ['communities'],
      queryFn: () => GetCommunities().then((res) => res),
   });

   let allCommunities = communities && communities.data && communities.data.data;

   const tabOptions = [
      {
         label: 'All',
         content: (
            <div className="">
               <AllCommunities />
            </div>
         ),
      },
      {
         label: 'Finance',
         content: <div className="">Finance</div>,
      },
      {
         label: 'Start up',
         content: <div className="">Start up</div>,
      },
      {
         label: 'Entrepreneur',
         content: <div className="">Entrepreneur</div>,
      },
      {
         label: 'Golfing',
         content: <div className="">Golfing</div>,
      },
      {
         label: 'Sports',
         content: <div className="">Sports</div>,
      },
   ];
   return (
      <>
         <Modal open={modalOpen} close={() => setModalOpen(false)}>
            <CreateCommunity closeModal={() => setModalOpen(false)} />
         </Modal>

         {communities?.isLoading ? (
            <div className="flex justify-center items-center h-[100vh]">
               <Loader />
            </div>
         ) : (
            <div className="flex">
               <div className="-mt-6 pt-5 max-sm:hidden px-5 mr-8 bg-white max-w-[235px]">
                  <div className="border-[#E5E5E7] border rounded-[30px] flex items-center gap-2 w-[205px] h-[40px]">
                     <img src={Search} alt="img" className="w-[20px] h-[20px] shadow-sm m-2" />
                     <input className="text-sm font-light border-0 outline-none" type="text" placeholder="Search Communities" />
                  </div>
                  <h3 className="text-[18px] mt-6 font-semibold">Communities</h3>
                  <div className="flex flex-col">
                     <CommunitiesSidePanel />
                  </div>
               </div>
               <div>
                  <div className="bg-[#FED28A] max-sm:hidden flex justify-center text-center ml-2 border-[7px] border-white rounded-[15px] py-8 w-[1070px] h-[194px]">
                     <div>
                        <h3 className="font-extrabold text-[22px]">Title for Community Banner</h3>
                        <small className="font-semibold text-[12.7px]">Taglines needed</small>
                        <div className="flex mt-8">
                           <Button onClick={() => setModalOpen(true)} classNames="bg-black mr-3 w-[186px] text-[12px] !px-5 !py-3 text-xs" name={'Create a community'} />
                           <Button onClick={() => navigate('/view-communities')} classNames="bg-[#FED28A] font-semibold !text-black w-[200px] text-[12px] border-[1px] border-black !px-5 !py-3 text-xs" name={'View your communities'} />
                        </div>
                     </div>
                  </div>
                  <div className="flex justify-center md:hidden item">
                     <div>
                        <div className="bg-[#FED28A] rounded-t-[15px] text-center p-8">
                           <h3 className="font-extrabold text-[22px]">Title for Community Banner</h3>
                           <small className="font-semibold text-[12.7px]">34 communities created by you</small>
                        </div>
                        <div className="flex flex-col items-center justify-center w-full p-8 bg-white">
                           <Button onClick={() => setModalOpen(true)} classNames="bg-black mr-3 w-[200px] text-[12px] !px-5 !py-3 text-xs" name={'Create a community'} />
                           <Button onClick={() => navigate('/view-communities')} classNames="bg-white my-2 font-semibold !text-black w-[200px] text-[12px] border-[1px] border-black !px-5 !py-3 text-xs" name={'View your communities'} />
                        </div>
                     </div>
                  </div>
                  <h3 className="mt-12 ml-4 font-semibold text-[18px]">Explore communities</h3>
                  <PilesTab tabs={tabOptions} />
               </div>
            </div>
         )}
      </>
   );
}

export default Communities;
