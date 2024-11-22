import moment from 'moment';
import React from 'react';
import HtmlRenderer from '../../components/html_renderer/HtmlRendrer';

const NotificationCard = ({ img, description, time }) => {
   return (
      <div className="flex bg-white p-4 gap-4 md:items-center md:hover:bg-white hover:bg-[whitesmoke] md:rounded-[15px]">
         <div
            className="h-10 w-10 flex-shrink-0 rounded-full bg-[#FED28A] flex justify-center items-center bg-contain bg-center"
            style={{
               backgroundImage: 'url(' + img + ')',
            }}
         ></div>
         <div>
            <p className="text-[12px]  md:w-[700px]" title={description}>
               {/* <HtmlRenderer htmlContent={description} /> */}
               {description.match(/<a [^>]*>(.*?)<\/a>/)[1]}
            </p>
            <p className="text-[10px] font-light text-[#92929D]">{moment(time).format('D MMMM [at] hh:mm A')} </p>
         </div>
      </div>
   );
};

export default NotificationCard;
