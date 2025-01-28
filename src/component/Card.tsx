// import react from "react";
import Profile from "../assets/profile.png";
import Data from "../data/data.json";
import { FiGithub } from "react-icons/fi";
import { AiOutlineLinkedin } from "react-icons/ai";
import Button from "./Button";

const Card = () => {
  const data = Data.personal;
  return (
    <>
      <div className="card py-3 px-5">
        <div className="card-inside border borer-1 border-[#d1d5e0] rounded-[1.25rem] dark:border-[#d1d1cf80] p-[1.875rem] md:max-h-[96vh]">
          <div className="title text-3xl font-[700] text-[#22232c] dark:text-[#e9e9f1] mb-2">
            {data.name}
          </div>
          <div className="profile-img overflow-hidden rounded-[1.5rem] md:max-h-[295px] mb-1">
            <img src={Profile} alt="profile image" />
          </div>
          <div className="subheading">
            <h5 className="title text-xs text-[#424550] dark:text-[#c7c6d3] font-semi-bold">
              Specialization:
            </h5>
            <p className="detail     text-base text-[#22232c] dark:text-[#e9e9f1]">
              {data.title}
            </p>
          </div>
          <div className="subheading">
            <h5 className="title text-xs text-[#424550] dark:text-[#c7c6d3] font-semi-bold">
              Based in:
            </h5>
            <p className="detail mb-1 text-base text-[#22232c] dark:text-[#e9e9f1]">
              {data.address}
            </p>
          </div>
          <div className="sociallinks flex justify-center items-center gap-3 mb-2">
            <a
              href={data.sociallinks.github}
              className="border border-1 border-[#a8b0c1] p-3.5 rounded-[1.25rem] svg-animate"
            >
              <FiGithub className="w-full h-full text-[1rem] shadow-2xl" />
            </a>
            <a
              href={data.sociallinks.linkedin}
              className="border border-1 border-[#a8b0c1] p-3.5 rounded-[1.25rem] svg-animate"
            >
              <AiOutlineLinkedin className="w-full h-full text-[1rem] shadow-2xl " />
            </a>
          </div>
          <div className="btn_holder text-center">
            <Button
              text="let's work togather!"
              varient="primary"
              url="https://github.com/junaid-amin"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
