import React from "react";
import Button from "../../components/button/_component";
import { Modal } from "../../components/modal/_component";
import Messages from "../connections/Messages";
import { useNavigate, useParams } from "react-router-dom";
import link from "../../assets/icons/Link.png";
import adBanner from "../../assets/images/adBanner.png";
import g_bullet from "../../assets/icons/g-bullet.png";
import adProfile from "../../assets/images/ad-profile.png";
import location from "../../assets/icons/location.png";
import globe from "../../assets/icons/globe.png";
import call from "../../assets/icons/call.png";
import goldWhatsapp from "../../assets/icons/gold-whatsapp.png";
import goldFb from "../../assets/icons/gold-fb.png";
import goldSnap from "../../assets/icons/gold-snap.png";
import goldInsta from "../../assets/icons/gold-insta.png";
import { dashboardFeaturedEvents } from "../../assets/core/data";
import CreateAd from "../marketplace/CreateAd";
import FeaturedEventCard from "../../components/featured_evernts_card/_component";
import { GetEvent } from "../../api/event.service";
import { useQuery } from "react-query";
import moment from "moment";
import { Loader } from "../../components/loader/_component";
import AllEvents from "./AllEvents";

function EventDetails() {
  const { id } = useParams();
  const [modalOpen, setModalOpen] = React.useState(false);

  const navigate = useNavigate();
  const event = useQuery({
    retry: (count, err) => count < 3,
    // staleTime: Infinity,
    refetchOnWindowFocus: false,
    queryKey: ["event"],
    queryFn: () => GetEvent(id).then((res) => res),
    // onSuccess: (data) => onProductFetchSuccess(data),
  });

  let eventData = event && event.data && event.data.data;

  return (
    <>
      <Modal open={modalOpen} close={() => setModalOpen(false)}>
        <CreateAd closeModal={() => setModalOpen(false)} />
      </Modal>

      {event?.isLoading || event?.isFetching ? (
        <div className="flex justify-center items-center h-[100vh]">
          <Loader />
        </div>
      ) : (
        <div className="flex justify-between">
          <div className="md:ml-3">
            <div className="flex items-center justify-between max-sm:mb-8">
              <div className="flex items-center">
                <img
                  onClick={() => navigate("/events")}
                  src={link}
                  alt=""
                  className="w-[40px] cursor-pointer h-[40px] mr-5"
                />
                <h3 className="text-[14px] font-semibold text-[#1A314D]">
                  {eventData && eventData.acf.event_name}
                </h3>
              </div>
              <Button
                //   onClick={() => setModalOpen(true)}
                classNames="bg-black flex justify-center m-auto max-sm:hidden mr-3 w-[173px] text-[12px] !px-5 !py-3 text-xs"
                name={"Register"}
              />
            </div>
            <div className="max-sm:hidden flex justify-center text-center mt-9 py-8 w-[973px] h-[190px]">
              <div className="relative">
                <img
                  src={adBanner}
                  className="border-[7px] border-white rounded-[15px] "
                  alt=""
                />
                <div className="bg-[#FEF9C3] px-3 py-1 rounded-full absolute flex items-center left-3 top-3">
                  <img className="w-1 h-1 mr-2" src={g_bullet} alt="bullet" />
                  <small className="text-[#EAB308]">Electronics</small>
                </div>
              </div>
            </div>
            <div className="flex flex-col py-8 ml-2 md:hidden">
              <div className="relative">
                <img
                  src={adBanner}
                  className="border-[7px] object-fill h-[149px] w-[400px] border-white rounded-[15px] "
                  alt=""
                />
                <div className="bg-[#FEF9C3] px-3 py-1 rounded-full absolute flex items-center left-3 top-3">
                  <img className="w-1 h-1 mr-2" src={g_bullet} alt="bullet" />
                  <small className="text-[#EAB308]">Electronics</small>
                </div>
              </div>
              <div className="flex justify-center bg-white p-8 w-[400px]">
                <Button
                  //   onClick={() => setModalOpen(true)}
                  classNames="bg-black mr-3 w-[173px] text-[12px] !px-5 !py-3 text-xs"
                  name={"Register"}
                />
              </div>
            </div>
            <div className="grid grid-cols-3 gap-3 mx-4 mt-16 max-sm:grid-cols-1">
              <div className="md:col-span-2 w-[617px]">
                <div className="flex max-sm:flex-col md:items-center text-[22px] justify-between mb-6">
                  <h3 className="font-extrabold">
                    {eventData && eventData.acf.event_name}
                  </h3>
                  <h3 className="font-extrabold  text-[#AF7E00]">
                    {moment(
                      eventData && eventData.acf.event_date,
                      "YYYYMMDD"
                    ).format("Do MMMM YYYY")}
                  </h3>
                </div>
                <div className="bg-white h-[243px] rounded-[15px]">
                  <h3 className="p-4">Description</h3>
                  <hr />
                  <p className="p-4 text-[#44444F]">
                    {eventData && eventData.acf.description}
                  </p>
                </div>
              </div>
              <div className="p-8 bg-white rounded-[15px]">
                <h3 className="text-[#171725] text-[14px] font-medium">
                  Event Created by
                </h3>
                <div className="flex my-3">
                  <img
                    src={adProfile}
                    className="mr-3 w-[42px] h-[42px]"
                    alt=""
                  />
                  <div>
                    <h3 className="text-[#171725] text-[14px]">
                      Kacy Mark Bartlett (you)
                    </h3>
                    <small className="text-[#92929D] text-[12px]">
                      {moment(
                        eventData && eventData.acf.event_date,
                        "YYYYMMDD"
                      ).format("D MMMM [at] hh:mm A")}
                    </small>
                  </div>
                </div>
                <div className="flex items-center">
                  <img
                    className="w-[24px] mb-2 mr-4 h-[24px]"
                    src={location}
                    alt=""
                  />
                  <h3 className="text-[#171725] capitalize text-[14px]">
                    {" "}
                    {eventData && eventData.acf.event_location}
                  </h3>
                </div>
                <div className="flex items-center">
                  <img
                    className="w-[24px] mb-2 mr-4 h-[24px]"
                    src={globe}
                    alt=""
                  />
                  <h3 className="text-[#171725] text-[14px]">
                    dribble.com/kacy
                  </h3>
                </div>
                <div className="flex items-center">
                  <img
                    className="w-[24px] mb-2 mr-4 h-[24px]"
                    src={call}
                    alt=""
                  />
                  <h3 className="text-[#171725] text-[14px]">
                    {" "}
                    {eventData && eventData.acf.phone}
                  </h3>
                </div>

                <div className="flex items-center mt-5 md:justify-between">
                  <img
                    className="w-[28px] h-[28px] max-sm:mr-3"
                    src={goldWhatsapp}
                    alt=""
                  />
                  <img
                    className="w-[28px] h-[28px] max-sm:mr-3"
                    src={goldFb}
                    alt=""
                  />
                  <img
                    className="w-[28px] h-[28px] max-sm:mr-3"
                    src={goldSnap}
                    alt=""
                  />
                  <img
                    className="w-[28px] h-[28px] max-sm:mr-3"
                    src={goldInsta}
                    alt=""
                  />
                </div>
              </div>
            </div>
            <h3 className="mb-5 mt-12 ml-4 text-[18px] font-semibold">
              Similar Events
            </h3>

            <AllEvents />
          </div>
          <Messages />
        </div>
      )}
    </>
  );
}

export default EventDetails;
