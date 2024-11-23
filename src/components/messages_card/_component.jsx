import React from 'react';

function MessagesCard({ img, name, msg, noOfMsg, otherClassNames }) {
   return (
      <>
         <div className={`flex gap-3 items-center justify-between p-2 px-4 rounded-[8px]  cursor-pointer hover:bg-[#eaf2fd] ${otherClassNames}`}>
            <img className="w-[42px] rounded-full" src={img} alt="image" />

            <div className='flex-1'>
               <h3 className="text-[12px]">{name}</h3>
               <p className="text-[11px] text-gray-400">{msg}</p>
            </div>

            <h3 className="bg-[#AF7E00] text-[8px] pt-[1px] flex justify-center items-center text-white rounded-full w-[18px] h-[18px] text-center">{noOfMsg}</h3>
         </div>
      </>
   );
}

export default MessagesCard;
