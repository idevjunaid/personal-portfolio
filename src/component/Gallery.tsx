import React, { useState, useEffect } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import Tag from "./Tag";
import {
  training,
  ourbetterworld,
  visual,
  iatse,
  API,
  UserAuthentication,
  Portfoliopng,
} from "../component/importImages";

const imageMap = {
  training: training,
  ourbetterworld: ourbetterworld,
  visual: visual,
  iatse: iatse,
  API: API,
  UserAuthentication: UserAuthentication,
  Portfolio: Portfoliopng,
};
interface GalleryProps {
  items: any[];
  onClose: () => void;
}

const Gallery: React.FC<GalleryProps> = ({ items, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const imageKey = items[currentIndex].image as keyof typeof imageMap;
  console.log(items[currentIndex]);
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + items.length) % items.length
    );
  };

    // Close on Esc key & prevent page scroll
    useEffect(() => {
      const handleKeyDown = (event: KeyboardEvent) => {
        if (event.key === "Escape") {
          onClose();
        }
      };
  
      // Disable scroll
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
  
      return () => {
        // Enable scroll on close
        document.body.style.overflow = "auto";
        window.removeEventListener("keydown", handleKeyDown);
      };
    }, [onClose]);

  return (
    <div className="gallery-modal fixed w-full  top-0 left-0 flex items-center z-[999999] bg-[#212121] flex flex-col h-[100vh]">
      <div className="py-1 px-3 flex justify-between w-full align-center z-[1]">
        <div className="number py-2 px-4 text-[#ffffff] font-xl bg-[#0006] rounded-[1.25rem]">
        {currentIndex + 1}/{items.length}
        </div>
        <div className="btns_holder flex gap-2 align-center flex-row-reverse">
          <button
            onClick={onClose}
            className="bg-[#aa70e0] rounded-[1.25rem] p-2.5 text-black"
          >
            <IoCloseSharp className="text-2xl" />
          </button>
        </div>
      </div>
      <div className="relative w-full h-full max-h-screen">
        <button
          onClick={handlePrev}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 text-black rounded-[1.25rem] p-3 bg-[#aa70e0] cursor-pointer"
        >
          <FaChevronLeft className="text-xl" />
        </button>
        <div className="p-4 rounded-lg lg:max-w-[75%] m-auto align-center max-h-screen h-full pt-12 pb-10">
          <div className="img_holder max-h-[50%] lg:max-h-[70%] max-w-[75%] w-full h-full overflow-hidden m-auto object-cover flex justify-center">
          <img
            src={imageMap[imageKey]}
            alt={items[currentIndex].title}
            className="h-full object-cover rounded-lg"
          />
          </div>
          <div className="lg:max-w-[60%] sm:max-w-[80%] max-w-[100%] m-auto rounded-[1.2rem] p-4 bg-[#0006] mt-3">
            <a
              href={items[currentIndex].link}
              className="link text-dark decoration-none text-[1.8rem] lg:text-[2.4rem]"
            >
              {items[currentIndex].title}
            </a>
            <div className="stacks flex gap-2">
              {items[currentIndex].stack ? (
                <Tag text={items[currentIndex].stack} color="[#ffffff]" />
              ) : (
                ""
              )}
            </div>
            <div className="description text-dark">
              <p>{items[currentIndex].description}</p>
            </div>
          </div>
        </div>
        <button
          onClick={handleNext}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 text-black rounded-[1.25rem] p-3 bg-[#aa70e0] cursor-pointer"
        >
          <FaChevronRight className="text-xl" />
        </button>
      </div>
    </div>
  );
};

export default Gallery;
