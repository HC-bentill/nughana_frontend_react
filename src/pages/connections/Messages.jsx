import React from 'react';
import { messages } from '../../assets/core/data';
import MessagesCard from '../../components/messages_card/_component';
import kite from '../../assets/images/kite.png';
import { GetMessages } from '../../api/messages.service';
import { getItem } from '../../api/storage.service';
import { useQuery } from 'react-query';
import NoMessage from '../../assets/icons/messages.svg?react';

function Messages() {
   const messages = useQuery({
      retry: (count, err) => count < 3,
      queryKey: ['getMessages'],
      refetchOnWindowFocus: false,
      queryFn: () => GetMessages(getItem('u_id')).then((res) => res?.data),
   });

   return (
      <>
         <div className="max-sm:hidden">
            <div className="p-4 bg-white -mt-[18px] rounded-[12px] min-w-[300px]">
               <h3 className="font-semibold text-[16px] mt-4 mb-4">Messages</h3>

               {messages?.data?.length > 0 ? (
                  messages?.data?.map((msg, i) => (
                     <MessagesCard
                        key={i}
                        msg={msg?.excerpt?.rendered}
                        // otherClassNames={msg.otherClassNames}
                        name={'name'}
                        noOfMsg={msg?.messages_count}
                        img={msg?.avatar[0]?.full}
                     />
                  ))
               ) : (
                  <div className='flex flex-col my-6  items-center justify-center'>
                     <img className='w-[40px]' src={NoMessage} alt="no messages" />
                     <p className='text-gray-300 pt-3 text-[12px]'>No messages</p>
                  </div>
               )}
            </div>
            <div className="w-auto h-[150px] rounded-[10px] mt-3 flex items-center justify-center bg-black">
               <img src={kite} className="w-[64px] h-[64px] mr-3" alt="" />
               <h3 className="text-[14px] text-white">Events AD</h3>
            </div>
         </div>
      </>
   );
}

export default Messages;
