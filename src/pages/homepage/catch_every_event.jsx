import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import food from "../../assets/images/food.png";
import "swiper/css";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import Button from "../../components/button/_component";
import Underline from "../../components/underline/_component";
import Slider from "react-slick";
import chevRight from "../../assets/icons/chevright.png";
import chevLeft from "../../assets/icons/chevleft.png";


function NextArrow(props) {
  const { className, style, onClick } = props;
  return <img className={className} style={{width:"47px", height:"47px"}} onClick={onClick} src={chevRight} alt="arrows" id={'slick-next'} />;
}

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return <img className={className} style={{width:"47px", height:"47px"}} onClick={onClick} src={chevLeft} alt="arrows" id={'slick-prev'} />;
}

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />
};

function CatchEveryEvent() {
  return (
    <>
      <section className="bg-[#101010] text-white p-20 pb-36">
        <div className="mx-auto md:max-w-[1100px]">
          <div className="flex justify-center">
            <div>
              <h3 className="text-4xl">Catch every event in town</h3>
              <Underline className="w-56 m-auto mb-4" />
              <small>
                Never miss an event. NuGhana connect is where all events in
                Ghana converge.
              </small>
            </div>
          </div>
          <div className="mt-7">
            <div className="slider-container">
              <Slider {...settings}>
                <div>
                  <div className="flex justify-center">
                    <div className="p-20 py-10 pt-14 flex flex-col w-full border-[1px] border-[##FFFFFF] rounded-[24px]">
                      <div className="relative flex items-center">
                        <div className="text-4xl">
                          <h3>All things Africa</h3> <h3>Event</h3>
                          <div className="mt-4">
                            <span className="text-[#E9B328]">
                              2nd November.
                            </span>{" "}
                            <div>8pm sharp</div>
                          </div>
                        </div>
                        <div className="absolute -bottom-[210px] -right-[180px]">
                          <img className="w-[45rem]" src={food} alt="food" />
                        </div>
                      </div>

                      <Button
                        bgColor="bg-black border-[1px] mt-24 border-[#FFFFFF] m-auto"
                        name="Subscribe to this event"
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <h3>2</h3>
                </div>
                <div>
                  <h3>3</h3>
                </div>
              </Slider>
            </div>
            {/* <Swiper
              pagination={{
                dynamicBullets: true,
              }}
              modules={[Pagination]}
              className="mySwiper"
            >
              <SwiperSlide>
                <div className="flex justify-center">
                  <div className="p-20 py-10 pt-14 flex flex-col w-full border-[1px] border-[##FFFFFF] rounded-[24px]">
                    <div className="relative flex items-center">
                      <div className="text-4xl">
                        <h3>All things Africa</h3> <h3>Event</h3>
                        <div className="mt-4">
                          <span className="text-[#E9B328]">2nd November.</span>{" "}
                          <div>8pm sharp</div>
                        </div>
                      </div>
                      <div className="absolute -bottom-[210px] -right-[180px]">
                        <img className="w-[45rem]" src={food} alt="food" />
                      </div>
                    </div>

                    <Button
                      bgColor="bg-black border-[1px] mt-24 border-[#FFFFFF] m-auto"
                      name="Subscribe to this event"
                    />
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
            </Swiper> */}
          </div>
        </div>
      </section>
    </>
  );
}

export default CatchEveryEvent;
