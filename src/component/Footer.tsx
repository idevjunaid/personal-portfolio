import { FiGithub } from "react-icons/fi";
import data from "../data/data.json";
import { AiOutlineLinkedin } from "react-icons/ai";

const Footer = () => {
  const Data = data.personal;
  return (
    <div>
      <div className="sociallinks flex justify-center items-center gap-5">
        <a
          href={Data.sociallinks.github}
          className="border border-1 border-[#a8b0c1] p-4 rounded-[1rem]"
        >
          <FiGithub className="w-full h-full text-[1.2rem] shadow-2xl" />
        </a>
        <a
          href={Data.sociallinks.linkedin}
          className="border border-1 border-[#a8b0c1] p-4 rounded-[1rem]"
        >
          <AiOutlineLinkedin className="w-full h-full text-[1.2rem] shadow-2xl " />
        </a>
      </div>
      <p className="desc heading">
        Want to know more about me, tell me about your project or just to say
        hello? Drop me a line and I'll get back as soon as possible.
      </p>
      <div className="flex justify-between items-center">
        <div className="subheading">
          <h5 className="heading">Location</h5>
          <p className="detail">{Data.address}</p>
        </div>
        <div className="subheading">
          <h5 className="heading">Phone</h5>
          <p className="detail">{Data.number}</p>
        </div>
        <div className="subheading">
          <h5 className="heading">Email</h5>
          <p className="detail">{Data.email}</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
