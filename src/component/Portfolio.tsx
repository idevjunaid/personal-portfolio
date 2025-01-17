import React from "react";
import Tag from "./Tag";
import { VscSparkleFilled } from "react-icons/vsc";
import data from "../data/data.json";

const Portfolio: React.FC = () => {
  const sections = Object.entries(data.portfoliocards);

  return (
    <>
      <Tag text="Portfolio" icon={<VscSparkleFilled />} />
      <h1 className="heading text-[#8f56cc] text-[3.5rem] [line-height:1.2] py-5">
        Check out my featured projects
      </h1>
      <div className="grid grid-cols-2 gap-4 relative">
        {sections.map(([sectionKey, sectionValue]) => (
          <div key={sectionKey} className="card border border-1 border-red-500 rounded-[1rem] overflow-hidden relative max-h-96">
            {sectionValue.map((card, cardIndex) => (
              cardIndex === 0 ? (
                <img src={`/src/assets/${card.image}`} alt={card.title} key={card.title} />
              ) : null
            ))}
            <div className="z-10 absolute bottom-4 left-4">
            <Tag text={sectionKey} bg/>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Portfolio;