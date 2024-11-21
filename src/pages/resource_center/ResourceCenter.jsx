import React from 'react';
import Messages from '../connections/Messages';
import { expats } from '../../assets/core/data';
import Chat from '../../components/chat/_component';
import RoundedLeftChev from '../../assets/icons/rounded_chev_left.png';
import { useNavigate } from 'react-router-dom';

function ResourceCenter() {
   const navigate = useNavigate();
   return (
      <>
         <div className="md:hidden bg-white flex items-center gap-5 absolute top-0 w-full px-7 py-4 border-b-[1px] broder-[#EEF2F5]">
            <img className="cursor-pointer" src={RoundedLeftChev} alt="" />
            <p className="font-semibold text-[16px]">Resource center</p>
         </div>
         <div className="md:flex justify-between md:ml-3 md:px-0 px-3 gap-5">
            <div className="flex-1 md:px-5">
               <div className="md:flex hidden items-center">
                  <h2 className="mr-7 font-medium">Resource center</h2>
               </div>
               <p className="md:mt-8 mt-12 md:ml-0 ml-4 font-medium">We connect expats to resources, these are the services we offer</p>
               <div className="hidden md:grid grid-cols-4 gap-3 mt-8">
                  {expats?.map((ex, i) => (
                     <div key={i} className="border-[#C4C4C4]  h-[131px] rounded-[16px] border-[1px] flex flex-col items-center p-5 justify-center">
                        <img src={ex.icon} className="bg-[#E2E8F4] p-[6px] rounded-full w-[34px] h-[34px]" alt="icon" />
                        <h3 className="text-[13px] mt-4 text-[#2B3760]">{ex.name}</h3>
                     </div>
                  ))}
               </div>
               <div className="grid md:hidden grid-cols-2 gap-3 mt-8">
                  {expats?.map((ex, i) => (
                    <div key={i} className='bg-black rounded-[28px] flex items-center gap-3 px-[6px] py-[7px]'>
                       <div className='bg-[#E2D57C] rounded-full h-7 w-7'></div>
                       <p className='text-white text-[12px] font-light'>{ex?.name}</p>
                       
                    </div>
                  ))}
               </div>

               <p className="mt-8">Or chat with our virtual assistant</p>
               <Chat />
            </div>
            <div className="hidden xl:block">
               <Messages />
            </div>
         </div>
      </>
   );
}

export default ResourceCenter;
