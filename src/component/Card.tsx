import Data from "../data/data.json";
import Profile from "../assets/profile.png";
import { FiGithub } from "react-icons/fi";
import { AiOutlineLinkedin } from "react-icons/ai";
import Button from "./Button";

const Card = () => {
  const { name, title, address, sociallinks } = Data.personal;

  return (
    <div className="card py-3 px-5">
      <div className="card-inside border border-[#d1d5e0] rounded-[1.25rem] dark:border-[#d1d1cf80] p-[1.875rem] xl:max-h-[96vh]">
        <h2 className="text-3xl font-bold text-[#22232c] dark:text-[#e9e9f1] mb-2">
          {name}
        </h2>

        {/* Lazy Loaded Image */}
        <div className="profile-img overflow-hidden rounded-[1.5rem] xl:max-h-[295px] mb-1">
          <img src={Profile} alt="Profile" className="w-full h-auto object-cover" loading="lazy" />
        </div>

        <div className="subheading">
          <h5 className="text-xs text-[#424550] dark:text-[#c7c6d3] font-semibold">Specialization:</h5>
          <p className="text-base text-[#22232c] dark:text-[#e9e9f1]">{title}</p>
        </div>

        <div className="subheading">
          <h5 className="text-xs text-[#424550] dark:text-[#c7c6d3] font-semibold">Based in:</h5>
          <p className="text-base text-[#22232c] dark:text-[#e9e9f1] mb-1">{address}</p>
        </div>

        {/* Social Links */}
        <div className="sociallinks flex justify-center items-center gap-3 mb-2">
          <a href={sociallinks.github} className="border border-[#a8b0c1] p-3.5 rounded-[1.25rem] svg-animate">
            <FiGithub className="w-full h-full text-[1rem] shadow-2xl" />
          </a>
          <a href={sociallinks.linkedin} className="border border-[#a8b0c1] p-3.5 rounded-[1.25rem] svg-animate">
            <AiOutlineLinkedin className="w-full h-full text-[1rem] shadow-2xl" />
          </a>
        </div>

        {/* Button */}
        <div className="text-center">
          <Button text="Let's work together!" varient="primary" url="https://github.com/junaid-amin" />
        </div>
      </div>
    </div>
  );
};

export default Card;
