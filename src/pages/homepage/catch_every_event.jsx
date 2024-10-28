import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import food from "../../assets/images/food.png";
import "swiper/css";
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import Button from "../../components/button/_component";

function CatchEveryEvent() {
  return (
    <>
      <section className="bg-[#101010] text-white p-20">
        <div>
          <div className="flex justify-center">
            <div>
              <h3 className="text-4xl">Catch every event in town</h3>
              <small>
                Never miss an event. NuGhana connect is where all events in
                Ghana converge.
              </small>
            </div>
          </div>
          <div>
            <Swiper
              pagination={{
                dynamicBullets: true,
              }}
              modules={[Pagination]}
              className="mySwiper"
            >
              <SwiperSlide>
                <div>
                  <div className="flex justify-center">
                    <div className="flex flex-col px-20 w-9/12 border-[1px] border-[##FFFFFF] rounded-xl">
                      <div className="flex items-center justify-between">
                        <div className="text-4xl">
                          <h3>All things Africa</h3> <h3>Event</h3>
                          <div>
                            <span className="text-[#E9B328]">
                              2nd November.
                            </span>{" "}
                            <div>8pm sharp</div>
                          </div>
                        </div>
                        <div className="">
                          <img className="w-[30rem]" src={food} alt="food" />
                        </div>
                      </div>

                      <Button
                        bgColor="bg-black border-[1px] border-[#FFFFFF] w-1/4 m-auto"
                        name="Subscribe to this event"
                      />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>Slide 2</SwiperSlide>
              <SwiperSlide>Slide 3</SwiperSlide>
              <SwiperSlide>Slide 4</SwiperSlide>
              <SwiperSlide>Slide 5</SwiperSlide>
              <SwiperSlide>Slide 6</SwiperSlide>
              <SwiperSlide>Slide 7</SwiperSlide>
              <SwiperSlide>Slide 8</SwiperSlide>
              <SwiperSlide>Slide 9</SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
}

export default CatchEveryEvent;
