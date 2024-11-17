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
      <section className="bg-[#101010] text-white md:p-20 md:px-20 pb-[170px] pt-[70px] px-7 md:pb-40">
        <div className="mx-auto md:max-w-[1100px]">
          <div className="flex justify-center">
            <div className="md:text-left text-center">
              <h3 className="text-4xl">Catch every event in town</h3>
              <Underline className="w-56 m-auto mb-4" />
              <small>
                Never miss an event. Afro Tango connect is where all events in
                Ghana converge.
              </small>
            </div>
          </div>
          <div className="mt-7">
            <div className="slider-container">
              <Slider {...settings}>
                <div>
                  <div className="flex justify-center">
                    <div className="md:p-20 py-[40px] px-[15px] md:py-10 md:pt-14 flex flex-col w-full border-[1px] border-[##FFFFFF] rounded-[24px]">
                      <div className="relative flex items-center md:mt-0">
                        <div className="text-xl md:text-4xl md:relative">
                          <h3>All things Africa</h3> <h3>Event</h3>
                          <div className="mt-4">
                            <span className="text-[#E9B328]">
                              2nd November.
                            </span>{" "}
                            <div>8pm sharp</div>
                          </div>
                        </div>
                        <div className="absolute md:-bottom-[210px] -right-[180px]">
                          <img className="w-[22rem] sm:w-[24rem] md:w-[45rem]" src={food} alt="food" />
                        </div>
                      </div>

                      <Button
                        classNames="bg-black border-[1px] mt-24 border-[#FFFFFF] m-auto"
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
          </div>
        </div>
      </section>
    </>
  );
}

export default CatchEveryEvent;
