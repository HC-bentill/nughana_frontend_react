import React, { useEffect } from 'react';
import Button from '../../components/button/_component';
import { Modal } from '../../components/modal/_component';
import Messages from '../connections/Messages';
import { useNavigate, useParams } from 'react-router-dom';
import link from '../../assets/icons/Link.png';
import adBanner from '../../assets/images/adBanner.png';
import g_bullet from '../../assets/icons/g-bullet.png';
import adProfile from '../../assets/images/ad-profile.png';
import location from '../../assets/icons/location.png';
import globe from '../../assets/icons/globe.png';
import call from '../../assets/icons/call.png';
import goldWhatsapp from '../../assets/icons/gold-whatsapp.png';
import goldFb from '../../assets/icons/gold-fb.png';
import goldSnap from '../../assets/icons/gold-snap.png';
import goldInsta from '../../assets/icons/gold-insta.png';
import { dashboardBusiness } from '../../assets/core/data';
import BusinessCard from '../../components/business_card/_component';
import ReviewBusiness from './ReviewBusiness';
import star from '../../assets/icons/star.svg';
import { getBusinessDirectories, getBusinessDirectory } from '../../api/business.service';
import { Loader } from '../../components/loader/_component';
import { useQuery } from 'react-query';
import HtmlRenderer from '../../components/html_renderer/HtmlRendrer';
import BusinessDirectory from './BusinessDirectory';
import moment from 'moment';
import whatsapp from '../../assets/icons/whatsapp.png';
import mail from '../../assets/icons/mail.png';

function BusinessDetails() {
  const [modalOpen, setModalOpen] = React.useState(false);
  const navigate = useNavigate();
  const { id } = useParams();

  const GetBusinessDirectories = useQuery({
    retry: (count, err) => count < 3,
    queryKey: ['getBusinessDirectories'],
    queryFn: () => getBusinessDirectories().then((res) => res?.data),
  });

  const GetBusinessDirectory = useQuery({
    retry: (count, err) => count < 3,
    queryKey: ['GetBusinessDirectory', id],
    queryFn: () => getBusinessDirectory(id).then((res) => res?.data),
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);


  const imgTag = GetBusinessDirectory?.data?.acf?.created_by?.user_avatar;
  const imgMatch = imgTag?.match(/src='([^']+)'/);
  

  return (
    <>
      <Modal open={modalOpen} close={() => setModalOpen(false)}>
        <ReviewBusiness closeModal={() => setModalOpen(false)} />
      </Modal>
      {GetBusinessDirectory?.isLoading || GetBusinessDirectories?.isLoading ? (
        <div className="flex justify-center items-center h-[100vh]">
          <Loader />
        </div>
      ) : (
        <div className="md:flex justify-between md:ml-3 md:px-0 gap-5">
          <div className="flex-1">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <img onClick={() => navigate('/business-directory')} src={link} alt="" className="w-[40px] cursor-pointer h-[40px] mr-5" />
                <h3 className="text-[14px] font-semibold text-[#1A314D]">{GetBusinessDirectory?.data?.acf?.business_name}</h3>
              </div>
              <Button classNames="bg-black text-[12px] !px-8 !py-2" name={'View in Google Maps'} onClick={() => window.open(`${GetBusinessDirectory?.data?.acf?.google_map_link_to_business}`, '_blank')} />
            </div>

            <div
              className="border-[6px] border-white h-[180px] mt-4 rounded-[15px] relative bg-center bg-no-repeat bg-contain"
              style={{
                backgroundImage: `url(${GetBusinessDirectory?.data?.acf?.business_image})`,
              }}
            >
              <div className="bg-[#FEF9C3] px-3 py-1 rounded-full absolute flex items-center left-2 top-2">
                <img className="w-1 h-1 mr-2" src={g_bullet} alt="bullet" />
                <small className="text-[#EAB308] text-[12px]">
                  <HtmlRenderer htmlContent={GetBusinessDirectory?.data?.acf?.category?.name} />
                </small>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-5 mt-5">
              <div className="col-span-2">
                <div className="flex items-center text-[22px] justify-between mb-6">
                  <h3 className="font-extrabold shorten-text max-w-[250px] text-[18px]">{GetBusinessDirectory?.data?.acf?.business_name}</h3>
                  <h3 className="font-extrabold text-[18px] text-[#AF7E00]">{GetBusinessDirectory?.data?.acf?.category?.name}</h3>
                </div>
                <div className="bg-white min-h-[243px] rounded-[15px]">
                  <div className="flex items-center justify-between">
                    <h3 className="p-3 text-[12px]">Reviews</h3>
                    <Button onClick={() => setModalOpen(true)} classNames="bg-black mr-3 !text-[10px] !px-8 !py-[7px]" name={'Write a review'} />
                  </div>

                  <hr />
                  <div className="p-4 text-[#44444F] text-[10px]">
                    <h3>Tsan S.</h3>
                    <div className="flex">
                      <img src={star} alt="" />
                      <img src={star} alt="" />
                      <img src={star} alt="" />
                      <img src={star} alt="" />
                      <img src={star} alt="" /> <h3>5.0</h3>
                    </div>{' '}
                    <div className="flex items-center text-[#92929D]">
                      <h3 className="mr-2">Blablah blah about business goes here</h3>
                    </div>
                    <div className="flex items-center text-[#92929D]">
                      <h3 className="mr-2">March 8, 2021</h3>
                    </div>
                  </div>
                </div>
              </div>
              <div className="">
                <div className="p-4 bg-white rounded-[15px]">
                  <h3 className="text-[#171725] text-[13px]">Business listed by</h3>
                  <div className="flex my-3">
                    <img src={imgMatch[1]} className="mr-3 w-[34px] h-[34px]" alt="" />
                    <div>
                      <h3 className="text-[#171725] text-[12px]">{GetBusinessDirectory?.data?.acf?.created_by?.display_name}</h3>
                      <small className="text-[#92929D] text-[10px]">{moment(GetBusinessDirectory?.data?.date).format('D MMMM [at] hh:mm A')}</small>
                    </div>
                  </div>
                  <div className="flex items-center mb-4">
                    <img className="w-[18px] mr-4 h-[18px]" src={location} alt="" />
                    <h3 className="text-[#171725] text-[12px]">{GetBusinessDirectory?.data?.acf?.location}</h3>
                  </div>
                  <div className="flex items-center mb-4">
                    <img className="w-[18px] mr-4 h-[18px]" src={globe} alt="" />
                    <h3 className="text-[#171725] text-[12px]">{GetBusinessDirectory?.data?.acf?.created_by?.user_email}</h3>
                  </div>
                  <div className="flex items-center mb-4">
                    {GetBusinessDirectory?.data?.acf?.phone && (
                      <>
                        <img className="w-[18px] mr-4 h-[18px]" src={call} alt="" />
                        <h3 className="text-[#171725] text-[12px]">{GetBusinessDirectory?.data?.acf?.phone}</h3>
                      </>
                    )}
                  </div>

                  <div className="flex items-center gap-7 mt-5">
                    <img className="w-[22px] h-[22px]" src={goldWhatsapp} alt="" />
                    <img className="w-[22px] h-[22px]" src={goldFb} alt="" />
                    <img className="w-[22px] h-[22px]" src={goldSnap} alt="" />
                    <img className="w-[22px] h-[22px]" src={goldInsta} alt="" />
                  </div>
                </div>
              </div>
            </div>

            <h3 className="mb-5 mt-12 ml-4 text-[18px] font-semibold">Similar Businesses</h3>
            <div className="grid grid-cols-3 gap-4">{GetBusinessDirectories?.data?.length > 0 && GetBusinessDirectories?.data?.map((am, i) => <BusinessCard otherClassNames={''} key={i} img={am?.acf?.business_image} footerImgs={[call, whatsapp, mail]} footerIconsWith={'w-[24px] mr-2'} header={am?.business_name} desc={am.desc} eventfooterDesc={'View in google maps'} name={am?.acf?.business_name} address={am?.acf?.address} id={am?.id} link={am?.acf?.google_map_link_to_business} />)}</div>
          </div>
          <div className="hidden xl:block">
            <Messages />
          </div>
        </div>
      )}
    </>
  );
}

export default BusinessDetails;
