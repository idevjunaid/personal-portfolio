import { VscSparkleFilled } from "react-icons/vsc";
import Tag from "./Tag";
import data from "../data/data.json";
import {
  html,
  css,
  js,
  react,
  php,
  drupal,
  vscode,
} from "../component/importImages";

const imageMap = {
  html: html,
  css: css,
  js: js,
  react: react,
  php: php,
  drupal: drupal,
  vscode: vscode,
};
const Resume = () => {
  const education = Object.entries(data.education);
  const work = Object.entries(data.work);
  const tool = Object.entries(data.tools);
  return (
    <>
      <section id="resume" className="py-[5rem]">
        <Tag text="Resume" icon={<VscSparkleFilled />} />
        <h1 className="heading text-[#8f56cc] text-[2rem] xl:text-[3rem] [line-height:1.2] py-5 mb-5">
          Education and practical experience
        </h1>
        <p className="desc text-[#424550] dark:text-[#c7c6d3] text-base mb-16 font-normal">
          Learn, evolve, and build – or, to put it simply,
          never stop seeking knowledge, for growth comes from curiosity.
          What you know today shapes what you create tomorrow,
          and every challenge is just another lesson leading to mastery.
        </p>
        <div className="education py-5">
          <h1 className="title text-3xl text-[#22232c] dark:text-[#e9e9f1] mb-5">My Education</h1>
          <div className="cards-holder flex flex-col">
            {education.map(([educationKey, educationValue], educationIndex) => {
              return (
                <div
                  key={educationIndex}
                  id={educationKey}
                  className={`card p-5 flex flex-col xl:flex-row xl:items-center gap-5 border border-r-0 border-l-0 ${educationIndex === 0
                      ? "border-t-1 border-b-1"
                      : "border-b-2"
                    } border-[#d1d5e0] dark:border-[#303033]`}

                >
                  <p className="duration flex-[1.5] text-sm text-[#424550] dark:text-[#c7c6d3] font-[400]">{educationValue.duration}</p>
                  <div className="info flex-[3] text-xl text-[#22232c] dark:text-[#e9e9f1] font-[600]">
                    <h1 className="title ">{educationValue.title}</h1>
                    <p className="institution">{educationValue.institution}</p>
                  </div>
                  <p className="description flex-[5] text-[#424550] dark:text-[#c7c6d3] text-xl font-[400]">{educationValue.description}</p>
                </div>
              );
            })}
          </div>
        </div>
        <div className="work py-5">
          <h1 className="title text-3xl text-[#22232c] dark:text-[#e9e9f1] mb-5">My Work</h1>
          <div className="cards-holder flex flex-col">
            {work.map(([workKey, workValue], workIndex) => {
              return (
                <div
                  key={workIndex}
                  id={workKey}
                  className={`card p-5 flex flex-col xl:flex-row xl:items-center gap-5 border border-r-0 border-l-0 ${workIndex === 0
                      ? "border-t-1 border-b-1"
                      : "border-b-2"
                    } border-[#d1d5e0] dark:border-[#303033]`}
                >
                  <p className="duration flex-[1.5] text-sm text-[#424550] dark:text-[#c7c6d3] font-[400]">{workValue.duration}</p>
                  <div className="info flex-[3] text-xl text-[#22232c] dark:text-[#e9e9f1] font-[600]">
                    <h1 className="title">{workValue.title}</h1>
                    <p className="institution"><span className="text-[15px] text=[424550] dark:text-[#c7c6d3]">in </span><a href={workValue.link} className="relative group text-inherit no-underline">{workValue.company}<span className="absolute left-0 bottom-0 w-0 h-[1px] bg-[#aa70e0] transition-all duration-300 ease-[cubic-bezier(0.23, 0.65, 0.74, 1.09)] group-hover:w-full"></span></a></p>
                  </div>
                  <p className="description flex-[5] text-[#424550] dark:text-[#c7c6d3] text-xl font-[400]">{workValue.description}</p>
                </div>
              );
            })}
          </div>
        </div>
        <div className="tools py-5">
          <h1 className="title text-3xl text-[#22232c] dark:text-[#e9e9f1] mb-5">My Favourite Tools</h1>
          <div className="cards-holder grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-5">
            {tool.map(([toolKey, toolValue], toolIndex) => {
              const imageKey = toolValue.image as keyof typeof imageMap;
              return (
                <div key={toolIndex} id={toolKey} className="card p-5 border border-1 border-[#d1d5e0] rounded-[2rem] text-center">
                  <img src={imageMap[imageKey]} alt={toolValue.title} className="m-auto" />
                  <p className="description text-[#22232c] dark:text-[#e9e9f1]">{toolValue.title}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Resume;
