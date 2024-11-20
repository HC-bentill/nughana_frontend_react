import React from 'react';
import heart from '../../assets/icons/heart.png';
import profileIcon from '../../assets/icons/connect_profile_icon.png';

function ConnectCard({ img, otherClassNames }) {
   return (
      <>
         <div
            className={`${otherClassNames} rounded-[8px] h-[238px] w-[184px] bg-no-repeat relative`}
            style={{
               backgroundImage: 'url(' + img + ')',
            }}
         >
            <div className="absolute p-[4px] bg-[#00000050] rounded-full top-[10px] left-[10px]">
               <img className="w-[13px]" src={heart} alt="heart" />
            </div>
            <div className="absolute  bottom-[12px] left-0  w-full grid place-items-center rounded-full p-[4px]">
               <div className="items-center flex justify-between text-[11px] pr-[22px] gap-2 px-[4px] py-[5px] bg-[#00000067] rounded-full">
                  <img className="w-6 h-6 mr-2 rounded-full" src={profileIcon} alt="profile" />
                  <small className="text-center text-white font-semibold mr-[2px]">Kacy M. Bartlett</small>
               </div>
            </div>
         </div>
      </>
   );
}

export default ConnectCard;
