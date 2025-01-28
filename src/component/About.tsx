import Tag from "./Tag";
import { VscSparkleFilled } from "react-icons/vsc";
import data from "../data/data.json";
import Button from "./Button";
import { MdOutlineFileDownload } from "react-icons/md";
import cvFile from "../assets/dummy.pdf";
import { s1, s2, s3, s4 } from "../component/importImages";


const imageMap = {
  s01: s1,
  s02: s2,
  s03: s3,
  s04: s4
}
const About = () => {
    const personalInfo = data.personal;
    const aboutcards = Object.entries(data.aboutcards);
    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = cvFile;
        link.download = 'cv.pdf'; 
        link.click();
    };
  return (
    <>
    <section id="about" className="py-[5rem]">
    <Tag text="About Me" icon={<VscSparkleFilled />} />
      <h1 className="heading text-[#8f56cc] text-[3rem] [line-height:1.2] py-5 mb-2">
        Turning complex problems into simple design
      </h1>
      <div className="grid grid-cols-2 gap-4 justify-center align-center mb-10">
        <div className="card border border-1 border-[#d1d5e0] rounded-[1.25rem] text-center dark:border-[#d1d1cf80] p-[30px]">
          <h1 className="heading text-[#8f56cc] text-[3.5rem] [line-height:1.2]">
            2+
          </h1>
          <p className="detail capitalize text-light dark:text-dark">
            year of experiance
          </p>
        </div>
        <div className="card border border-1 border-[#d1d5e0] rounded-[1.25rem] text-center dark:border-[#d1d1cf80] p-[30px]">
          <h1 className="heading text-[#8f56cc] text-[3.5rem] [line-height:1.2]">
            8+
          </h1>
          <p className="detail capitalize text-light dark:text-dark">
            projects done
          </p>
        </div>
      </div>
      <div className="flex gap-5 mb-48">
        <div className="info text-[#424550] dark:text-[#c7c6d3] font-[20px] [line-height:28px] font-[600]">
          <p className="mb-5">
            I wonder if I've been changed in the night? Let me think. Was I the
            same when I got up this morning? I almost think I can remember
            feeling a little different. But if I'm not the same, the next
            question is 'Who in the world am I?' Ah, that's the great puzzle!
          </p>
          <p className="mb-5">
            Be what you would seem to be - or, if you'd like it put more simply
            - never imagine yourself not to be otherwise than what it might
            appear to others that what you were or might have been was not
            otherwise than what you had been would have appeared to them to be
            otherwise.
          </p>
          <div className="btn_holder">
          <Button text="Download CV" varient="primary" url="#" icon={<MdOutlineFileDownload fontSize={30}/>} onClick={handleDownload} />
          </div>
        </div>
        <div className="info">
            <div className="card mb-4">
                <p className="label font-semi-bold capitalize text-[#424550] dark:text-[#c7c6d3] text-xs">name</p>
                <h4 className="detail text-[#22232c] dark:text-[#e9e9f1] capitalize">{personalInfo.name}</h4>
            </div>
            <div className="card mb-4">
                <p className="label font-semi-bold capitalize text-[#424550] dark:text-[#c7c6d3] text-xs">Phone</p>
                <h4 className="detail text-[#22232c] dark:text-[#e9e9f1] capitalize">{personalInfo.number}</h4>
            </div>
            <div className="card mb-4">
                <p className="label font-semi-bold capitalize text-[#424550] dark:text-[#c7c6d3] text-xs">Email</p>
                <h4 className="detail text-[#22232c] dark:text-[#e9e9f1] capitalize">{personalInfo.email}</h4>
            </div>
            <div className="card mb-4">
                <p className="label font-semi-bold capitalize text-[#424550] dark:text-[#c7c6d3] text-xs">Location</p>
                <h4 className="detail text-[#22232c] dark:text-[#e9e9f1] capitalize">{personalInfo.address}</h4>
            </div>
        </div>
      </div>
      <div className="cards-holder grid grid-cols-2 gap-4 justify-center align-center">
      {aboutcards.map(([cardKey, card], cardIndex)=>{
        const imageKey = card.image as keyof typeof imageMap;
        return(
          <div key={cardIndex} id={cardKey} className="card border border-1 border-[#d1d5e0] rounded-[1.25rem] dark:border-[#d1d1cf80] flex flex-col justify-between cursor-pointer overflow-hidden">
            <div className="card-inside p-5">
            <h1 className="title text-3xl mb-2 text-[#22232c] dark:text-[#e9e9f1]">{card.title}</h1>
            <div className="tags my-3 flex gap-2 flex-wrap">
            {card.tags.map((tag, index)=>{
              return(
                <Tag key={index} text={tag} />
              )
            })}
            </div>
            <p className="description text-base font-normal text-[#424550] dark:text-[#c7c6d3] mb-2">
              {card.description}
            </p>
            </div>
            <div className="image-holder">
              <img src={imageMap[imageKey]} alt={card.title} />
            </div>
          </div>
        )
      })}
      </div>
    </section>
    </>
  );
};

export default About;
