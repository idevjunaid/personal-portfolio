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
      <section id="resume">
        <Tag text="Resume" icon={<VscSparkleFilled />} />
        <h1 className="heading text-[#8f56cc] text-[3.5rem] [line-height:1.2] py-5">
          Education and practical experience
        </h1>
        <p className="desc">
          Be what you would seem to be - or, if you'd like it put more simply -
          never imagine yourself not to be otherwise than what it might appear
          to others that what you were or <a href="#">might have been</a> was
          not otherwise than what you had been would have appeared to them to be
          otherwise.
        </p>
        <div className="education">
          <h1 className="title">My Education</h1>
          <div className="cards-holder flex flex-col">
            {education.map(([educationKey, educationValue], educationIndex) => {
              return (
                <div
                  key={educationIndex}
                  id={educationKey}
                  className="card p-5 flex items-center gap-5"
                >
                  <p className="duration">{educationValue.duration}</p>
                  <div className="info">
                    <h1 className="title">{educationValue.title}</h1>
                    <p className="institution">{educationValue.institution}</p>
                  </div>
                  <p className="description">{educationValue.description}</p>
                </div>
              );
            })}
          </div>
        </div>
        <div className="work">
          <h1 className="title">My Work</h1>
          <div className="cards-holder flex flex-col">
            {work.map(([workKey, workValue], workIndex) => {
              return (
                <div
                  key={workIndex}
                  id={workKey}
                  className="card p-5 flex items-center  gap-5"
                >
                  <p className="duration">{workValue.duration}</p>
                  <div className="info">
                    <h1 className="title">{workValue.title}</h1>
                    <p className="institution">{workValue.company}</p>
                  </div>
                  <p className="description">{workValue.description}</p>
                </div>
              );
            })}
          </div>
        </div>
        <div className="tools">
          <h1 className="title">My Favourite Tools</h1>
          <div className="cards-holder grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-4">
          {tool.map(([toolKey, toolValue], toolIndex) => {
            const imageKey = toolValue.image as keyof typeof imageMap;
            return (
              <div key={toolIndex} id={toolKey} className="card p-5 border border-1 border-[#d1d5e0] rounded-[1.2rem] text-center">
                <img src={imageMap[imageKey]} alt={toolValue.title} className="m-auto" />
                <p className="description">{toolValue.title}</p>
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
