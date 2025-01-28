import { VscSparkleFilled } from "react-icons/vsc";
import Tag from "./Tag";
import data from "../data/data.json";
import { avatar1, avatar2 } from "../component/importImages";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"; 
import { useRef } from "react";
import { Swiper as SwiperType } from "swiper";

const imageMap = {
  avatar01: avatar1,
  avatar02: avatar2,
};

const Testimonial = () => {
  const swiperRef = useRef<SwiperType | null>(null); 
  const testimonials = Object.entries(data.testimonial);

  return (
    <section id="testimonial">
      <Tag text="Testimonial" icon={<VscSparkleFilled />} />
      <h1 className="heading text-[#8f56cc] text-[3.5rem] [line-height:1.2] py-5">
        Clients say about me
      </h1>
      <div className="slider-container max-w-[865px] overflow-hidden relative">
        <Swiper
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          navigation={{
            prevEl: '.custom-prev', 
            nextEl: '.custom-next', 
          }}
          onSwiper={(swiper) => { swiperRef.current = swiper }} // Get Swiper instance
        >
          {testimonials.map(([testimonialKey, testimonial], testimonialIndex) => {
            const clientInfo = testimonial.info;
            const imageKey = clientInfo.avatar as keyof typeof imageMap;
            return (
              <SwiperSlide key={testimonialIndex} id={testimonialKey} className="slide">
                {testimonial.projectlink}
                <img src={imageMap[imageKey]} alt="" />
              </SwiperSlide>
            );
          })}
        </Swiper>
        <div className="navigation-btn_holder flex gap-2 align-center my-5">
        <div 
          className="custom-prev cursor-pointer z-[9999]"
          onClick={() => swiperRef.current?.slidePrev()}
        >
          <FaChevronLeft  />
        </div>
        <div 
          className="custom-next cursor-pointer z-[9999]"
          onClick={() => swiperRef.current?.slideNext()}
        >
          <FaChevronRight  />
        </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
