import React from "react";
import bullet from "../../assets/icons/bullet.png";
import star from "../../assets/icons/star.svg";
import { useNavigate } from "react-router-dom";
import call from '../../assets/icons/call.png';
import whatsapp from '../../assets/icons/whatsapp.png';
import mail from '../../assets/icons/mail.png';

function BusinessCard({
  img,
  name,
  footerDesc,
  otherClassNames,
  footerIconsWith,
  eventfooterDesc,
  dashboardfooterDesc,
  address,
  id,
  link
}) {

  const navigate = useNavigate();
  const footerImgs = [call, whatsapp, mail];
  return (
    <>
      <div
        onClick={() => navigate(`/business-details/${id}`)}
        className={`${otherClassNames} flex flex-col cursor-pointer`}
      >
        <div>
          <img src={img} alt="image" className="w-full h-[150px] rounded-t-[15px]" />
        </div>
        <div className="p-4 bg-white rounded-b-[15px]">
          <div className="flex items-center">
            <div className=" text-xs">
              <h3 className="mb-2 text-[13px] font-semibold shorten-text max-w-[150px]">
                {name}
              </h3>
              <div className="flex items-center text-[#92929D]">
                <h3 className="mr-2 shorten-text max-w-[150px]">{address}</h3>
                <img className=" mx-2 h-[4px]" src={bullet} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <h3>5.0</h3>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between mt-5">
            <div className="flex">
              {footerImgs?.map((fi, i) => (
                <div
                  key={i}
                  className={`flex ${footerDesc == " " ? "mr-3" : ""}`}
                >
                  <img
                    className={`${footerIconsWith} bg-[#CECECE] p-[4px] rounded-full`}
                    src={fi}
                    alt="image"
                  />
                </div>
              ))}
            </div>

            <h3 className="text-[9px] underline text-[#4987FF] cursor-pointer" onClick={() => window.open(`${link}`, '_blank')}>
              {eventfooterDesc}
            </h3>
          </div>
          <h3 className="mt-2 text-xs font-semibold">{dashboardfooterDesc}</h3>
        </div>
      </div>
    </>
  );
}

export default BusinessCard;
