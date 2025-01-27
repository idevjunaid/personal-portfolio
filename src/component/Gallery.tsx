import React, { useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import { RiShareLine } from "react-icons/ri";
import { MdOutlineFullscreen } from "react-icons/md";
import { RiZoomInLine } from "react-icons/ri";
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

  return (
    <div className="gallery-modal fixed w-full  top-0 left-0 flex justify-center items-center z-[999999] bg-[#212121] flex flex-col ">
      <div className="border border-1 border-red-600 py-1 px-3 flex justify-between w-full align-center z-[1]">
        <div className="number py-2 px-4 text-[#ffffff] font-xl bg-[#0006] rounded-[1.25rem]">
          1/4
        </div>
        <div className="btns_holder flex gap-2 align-center flex-row-reverse">
          <button
            onClick={onClose}
            className="bg-[#aa70e0] rounded-[1.25rem] p-2.5 text-black"
          >
            <IoCloseSharp className="text-2xl" />
          </button>
          <button
            onClick={onClose}
            className="bg-[#0006] rounded-[1.25rem] px-3.5 border border-1 border-light py-2.5 text-[#fff]"
          >
            <RiShareLine className="text-xl" />
          </button>
          <button
            onClick={onClose}
            className="bg-[#0006] rounded-[1.25rem] px-3.5 border border-1 border-light py-2.5 text-[#fff]"
          >
            <MdOutlineFullscreen className="text-xl" />
          </button>
          <button
            onClick={onClose}
            className="bg-[#0006] rounded-[1.25rem] px-3.5 border border-1 border-light py-2.5 text-[#fff]"
          >
            <RiZoomInLine className="text-xl" />
          </button>
        </div>
      </div>
      <div className="relative w-full h-[80%]">
        <button
          onClick={handlePrev}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 text-black rounded-[1.25rem] p-3 bg-[#aa70e0] cursor-pointer"
        >
          <FaChevronLeft className="text-xl" />
        </button>
        <div className="border border-1 border-red-600 p-4 rounded-lg max-w-[75%] m-auto align-center h-full pt-12 pb-10">
          <img
            src={imageMap[imageKey]}
            alt={items[currentIndex].title}
            className="w-auto max-h-[70%] aspect-auto rounded-lg m-auto "
          />
          <div className="max-w-[50%] m-auto rounded-[1.2rem] p-4 bg-[#0006] border border-1 border-red-900 mt-3">
            <a
              href={items[currentIndex].link}
              className="link text-dark decoration-none text-[2.4rem]"
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
