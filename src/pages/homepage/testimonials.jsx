import React from "react";
import Underline from "../../components/underline/_component";
import Button from "../../components/button/_component";
import Slider from "react-slick";
import chevRight from "../../assets/icons/chevright.png";
import chevLeft from "../../assets/icons/chevleft.png";
import Avatar from "../../assets/images/Avatar.png";

function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <img
      className={className}
      style={{ width: "47px", height: "47px" }}
      onClick={onClick}
      src={chevRight}
      alt="arrows"
      id={"slick-next"}
    />
  );
}

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <img
      className={className}
      style={{ width: "47px", height: "47px" }}
      onClick={onClick}
      src={chevLeft}
      alt="arrows"
      id={"slick-prev"}
    />
  );
}

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
  dots: false,
};

const Testimonials = () => {
  return (
    <div className="py-20">
      <div className="md:max-w-[1100px] mx-auto ">
        <div className="my-4 grid place-items-center">
          <Button bgColor="bg-black !px-16" name="Join our community" />
        </div>
        <div className="mt-28">
          <h3 className="mb-1 text-[43px] font-[500] text-center ">
            Hear what Connect members say
          </h3>
          <Underline className="flex justify-center m-auto w-44 mb-7" />
        </div>

        <div className="mt-24">
          <div className="slider-container">
            <Slider {...settings}>
              <div>
                <div className="grid place-items-center">
                  <img
                    src={Avatar}
                    className="object-contain w-[150px] h-[150px] rounded-full"
                  />
                </div>
                <p className="text-center text-[#0E1339] font-semibold text-[23px]">
                  Courtney Henry
                </p>
                <p className="text-center font-light text-[19px] w-1/3 mt-3 mx-auto text-[#34405E]">
                  A customers review can be here please keep it direct and real
                  you have about 3 to 4 lines at most
                </p>
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

        <div className="flex items-center justify-between mt-[200px] bg-[#FFEBB9] rounded-[24px] py-[28px] px-[123px]">
          <p className="text-sm font-semibold">
            What are you waiting for? Join the NuGhana Connect community now!
          </p>
          <Button bgColor="bg-black" name="Join our community" />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
