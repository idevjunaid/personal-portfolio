import { FiGithub } from "react-icons/fi";
import data from "../data/data.json";
import { AiOutlineLinkedin } from "react-icons/ai";


const Footer = () => {
  const Data = data.personal;
  return (
    <div className="container m-auto px-2">
      <div className="sociallinks flex justify-center items-center gap-5 mb-5">
        <a
          href={Data.sociallinks.github}
          className="border border-1 border-[#d1d5e0] dark:border-[#303033] dark:hover:border-[#d1d5e0] p-6 rounded-[2rem] group hover:scale-[1.1] transition duration-300 ease-[cubic-bezier(0.4, 0, 0.2, 1)]"
        >
          <FiGithub className="w-full h-full text-[#424550] text-[5rem] group-hover:text-[#000] group-hover:dark:text-[#d1d5e0] transition duration-300 ease-[cubic-bezier(0.4, 0, 0.2, 1)]" />
        </a>
        <a
          href={Data.sociallinks.linkedin}
          className="border border-1 border-[#d1d5e0] dark:border-[#303033] dark:hover:border-[#d1d5e0] p-6 rounded-[2rem] group hover:scale-[1.1] transition duration-300 ease-[cubic-bezier(0.4, 0, 0.2, 1)]"
        >
          <AiOutlineLinkedin className="w-full h-full text-[#424550] text-[5rem] group-hover:text-[#000] group-hover:dark:text-[#d1d5e0] transition duration-300 ease-[cubic-bezier(0.4, 0, 0.2, 1)]" />
        </a>
      </div>
      <p className="desc heading text-3xl [line-height:36px] max-w-[620px] my-[5rem]">
        Want to know more about me, tell me about your project or just to say
        hello? Drop me a line and I'll get back as soon as possible.
      </p>
      <hr className="my-5 border-[#d1d5e0] dark:border-[#303033]" />
      <div className="flex justify-between items-center mb-[5rem]">
        <div className="subheading">
          <h5 className="title text-[#22232c] dark:text-[#e9e9f1] text-base">Location</h5>
          <p className="detail text-[#666a79] dark:text-[#a1a1af] text-base font-[400]">{Data.address}</p>
        </div>
        <div className="subheading">
          <h5 className="title text-[#22232c] dark:text-[#e9e9f1] text-base">Phone</h5>
          <p className="detail text-[#666a79] dark:text-[#a1a1af] text-base font-[400]">{Data.number}</p>
        </div>
        <div className="subheading">
          <h5 className="title text-[#22232c] dark:text-[#e9e9f1] text-base">Email</h5>
          <p className="detail text-[#666a79] dark:text-[#a1a1af] text-base font-[400]">{Data.email}</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
