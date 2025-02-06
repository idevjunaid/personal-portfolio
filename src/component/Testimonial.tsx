import { VscSparkleFilled } from "react-icons/vsc";
import Tag from "./Tag";
import data from "../data/data.json";
import { avatar1, avatar2 } from "../component/importImages";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useRef } from "react";
import { Swiper as SwiperType } from "swiper";
import { FaStar, FaRegStar } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";

const imageMap = {
  avatar01: avatar1,
  avatar02: avatar2,
};

const renderStars = (rating: number) => {
  return (
    <>
      {Array.from({ length: 5 }, (_, index) =>
        index < rating ? (
          <FaStar key={index} style={{ color: "#aa70e0" }} />
        ) : (
          <FaRegStar key={index} style={{ color: "#aa70e0" }} />
        )
      )}
    </>
  );
};
const Testimonial = () => {
  const swiperRef = useRef<SwiperType | null>(null);
  const testimonials = Object.entries(data.testimonial);

  return (
    <section id="testimonial" className="py-[5rem]">
      <Tag text="Testimonial" icon={<VscSparkleFilled />} />
      <h1 className="heading text-[#8f56cc] text-[2rem] xl:text-[3rem] [line-height:1.2] py-5">
        Clients say about me
      </h1>
      <div className="slider-container max-w-[585px] xl:max-w-[865px]  overflow-hidden relative">
        <Swiper
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          navigation={{
            prevEl: ".custom-prev",
            nextEl: ".custom-next",
          }}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }} // Get Swiper instance
        >
          {testimonials.map(
            ([testimonialKey, testimonial], testimonialIndex) => {
              const clientInfo = testimonial.info;
              const imageKey = clientInfo.avatar as keyof typeof imageMap;
              return (
                <SwiperSlide
                  key={testimonialIndex}
                  id={testimonialKey}
                  className="slide border border-1 border-[#d1d5e0] rounded-[1.25rem] dark:border-[#d1d1cf80] p-[30px]"
                >
                  <div className="info flex gap-5">
                    <div className="image_holder max-w-[100px] max-h-[100px] rounded-[1.5rem] overflow-hidden">
                      <img src={imageMap[imageKey]} alt="" />
                    </div>
                    <div className="content_holder">
                      <h2 className="title text-2xl text-[#22232c] dark:text-[#e9e9f1]">{clientInfo.name}</h2>
                      <p className="desc text-base mb-2">
                        <span className="text-[#424550] dark:text-[#c7c6d3] font-[400]">{clientInfo.role} in </span>
                        <a
                          href={clientInfo.siteLink}
                          className="relative group text-inherit no-underline text-[#22232c] !important dark:text-[#e9e9f1]"
                        >
                          {clientInfo.company}
                          <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-[#aa70e0] transition-all duration-300 ease-[cubic-bezier(0.23, 0.65, 0.74, 1.09)] group-hover:w-full"></span>
                        </a>
                      </p>
                      <div className="flex gap-1">
                        {renderStars(clientInfo.rating)}
                      </div>
                    </div>
                    {}
                  </div>
                  <div className="description text-[#424550] dark:text-[#c7c6d3] text-xl font-[500] my-3">{testimonial.description}</div>
                  <a
                    href={testimonial.projectlink}
                    className="link flex gap-2 items-center text-base "
                  >
                    Project Page <FaArrowRight />
                  </a>
                </SwiperSlide>
              );
            }
          )}
        </Swiper>
        <div className="navigation-btn_holder flex gap-2 align-center my-5">
          <div
            className="custom-prev cursor-pointer z-[9999] border border-1  border-[#d1d5e0] rounded-[1.5rem] dark:border-[#d1d1cf80] p-5"
            onClick={() => swiperRef.current?.slidePrev()}
          >
            <FaChevronLeft className="text-[#22232c] dark:text-[#e9e9f1] text-xs font-[100]" />
          </div>
          <div
            className="custom-next cursor-pointer z-[9999] p-5 border border-1  border-[#d1d5e0] rounded-[1.5rem] dark:border-[#d1d1cf80] p-5"
            onClick={() => swiperRef.current?.slideNext()}
          >
            <FaChevronRight className="text-[#22232c] dark:text-[#e9e9f1] text-xs font-[100]" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
