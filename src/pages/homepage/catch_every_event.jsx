import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

function CatchEveryEvent() {
  return (
    <>
      <section>
        <h3>Catch every event in town</h3>
        <small>
          Never miss an event. NuGhana connect is where all events in Ghana
          converge.
        </small>

        <Swiper
          spaceBetween={50}
          slidesPerView={3}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>Slide 1</SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
          ...
        </Swiper>
      </section>
    </>
  );
}

export default CatchEveryEvent;
