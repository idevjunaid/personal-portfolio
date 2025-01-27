import React, { useState } from "react";
import Tag from "./Tag";
import { VscSparkleFilled } from "react-icons/vsc";
import data from "../data/data.json";
import Gallery from "./Gallery";
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

const Portfolio: React.FC = () => {
  const sections = Object.entries(data.portfoliocards);
  const [selectedItems, setSelectedItems] = useState<any[]>([]);
  const [isGalleryOpen, setGalleryOpen] = useState(false);

  const handleClick = (items: any[]) => {
    setSelectedItems(items);
    setGalleryOpen(true);
    console.log(isGalleryOpen);
    console.log(selectedItems);
  };

  return (
    <>
      <section id="portfolio">
        <Tag text="Portfolio" icon={<VscSparkleFilled />} />
        <h1 className="heading text-[#8f56cc] text-[3.5rem] [line-height:1.2] py-5">
          Check out my featured projects
        </h1>
        <div className="grid grid-cols-2 gap-4 relative">
          {sections.map(([sectionKey, sectionValue], sectionIndex) => (
            <div key={sectionKey} className="relative">
              {sectionValue.map((card: any, cardIndex: number) => {
                const imageKey = card.image as keyof typeof imageMap;
                return cardIndex === 0 && imageKey && imageMap[imageKey] ? (
                  <div className="" key={cardIndex}>
                    <a
                      href="#"
                      className="block group transition-transform duration-300 ease-[cubic-bezier(0.23, 0.65, 0.74, 1.09)] hover:scale-105"
                      onClick={(e) => {
                        e.preventDefault();
                        handleClick(sectionValue);
                      }}
                    >
                      <div
                        key={card.title}
                        className="rounded-lg overflow-hidden relative bg-cover bg-center"
                        style={{
                          backgroundImage: `url(${imageMap[imageKey]})`,
                        }}
                      >
                        <img
                          src={imageMap[imageKey]}
                          alt={card.title}
                          className="opacity-0"
                        />
                      </div>
                    </a>
                    <figcaption className="absolute bottom-2 left-2">
                      {sectionIndex === 0 ? (
                        <Tag text={card.title} bg invert />
                      ) : (
                        <Tag text={card.title} bg />
                      )}
                    </figcaption>
                  </div>
                ) : null;
              })}
            </div>
          ))}
        </div>
        {isGalleryOpen && (
          <Gallery
            items={selectedItems}
            onClose={() => setGalleryOpen(false)}
          />
        )}
      </section>
    </>
  );
};

export default Portfolio;
