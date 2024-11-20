import React from 'react';
import adProfile from '../../assets/images/ad-profile.png';
import location from '../../assets/icons/location.png';
import globe from '../../assets/icons/globe.png';
import call from '../../assets/icons/call.png';
import goldWhatsapp from '../../assets/icons/gold-whatsapp.png';
import goldFb from '../../assets/icons/gold-fb.png';
import goldSnap from '../../assets/icons/gold-snap.png';
import goldInsta from '../../assets/icons/gold-insta.png';

function GroupCreatedBy({ gropuAvatar }) {
   return (
      <div className="p-8 bg-white rounded-[15px] h-[298px] w-[335px]">
         <h3 className="text-[#171725] text-[14px] font-medium">Group Created by</h3>
         <div className="flex my-3">
            <img src={gropuAvatar} className="mr-3 rounded-full w-[42px] h-[42px]" alt="" />
            <div>
               <h3 className="text-[#171725] text-[14px]">Kacy Mark Bartlett (you)</h3>
               <small className="text-[#92929D] text-[12px]">
                  date
                  {/* {moment(
            eventData && eventData.acf.event_date,
            "YYYYMMDD"
          ).format("D MMMM [at] hh:mm A")} */}
               </small>
            </div>
         </div>
         <div className="flex items-center">
            <img className="w-[24px] mb-2 mr-4 h-[24px]" src={location} alt="" />
            <h3 className="text-[#171725] capitalize text-[14px]">
               asdasdfasdf
               {/* {eventData && eventData.acf.event_location} */}
            </h3>
         </div>
         <div className="flex items-center">
            <img className="w-[24px] mb-2 mr-4 h-[24px]" src={globe} alt="" />
            <h3 className="text-[#171725] text-[14px]">dribble.com/kacy</h3>
         </div>
         <div className="flex items-center">
            <img className="w-[24px] mb-2 mr-4 h-[24px]" src={call} alt="" />
            <h3 className="text-[#171725] text-[14px]">
               asdasdasdee
               {/* {eventData && eventData.acf.phone} */}
            </h3>
         </div>

         <div className="flex items-center mt-5 md:justify-between">
            <img className="w-[28px] h-[28px] max-sm:mr-3" src={goldWhatsapp} alt="" />
            <img className="w-[28px] h-[28px] max-sm:mr-3" src={goldFb} alt="" />
            <img className="w-[28px] h-[28px] max-sm:mr-3" src={goldSnap} alt="" />
            <img className="w-[28px] h-[28px] max-sm:mr-3" src={goldInsta} alt="" />
         </div>
      </div>
   );
}

export default GroupCreatedBy;
