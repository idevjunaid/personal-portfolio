import React, { useState, useCallback, useMemo } from "react";
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
  training,
  ourbetterworld,
  visual,
  iatse,
  API,
  UserAuthentication,
  Portfolio: Portfoliopng,
};

const Portfolio: React.FC = () => {
  const { portfoliocards } = data;
  const sections = Object.entries(portfoliocards);
  const [selectedItems, setSelectedItems] = useState<any[]>([]);
  const [isGalleryOpen, setGalleryOpen] = useState(false);

  const handleClick = useCallback((items: any[]) => {
    setSelectedItems(items);
    setGalleryOpen(true);
  }, []);

  const mappedSections = useMemo(() => (
    sections.map(([sectionKey, sectionValue], sectionIndex) => (
      <div key={sectionKey} className="relative">
        {sectionValue.map((card: any, cardIndex: number) => {
          const imageKey = card.image as keyof typeof imageMap;
          return cardIndex === 0 && imageKey && imageMap[imageKey] ? (
            <div className="max-h-[350px] overflow-hidden rounded-lg" key={cardIndex}>
              <a
                href="#"
                className="block group transition-transform duration-300 ease-[cubic-bezier(0.23, 0.65, 0.74, 1.09)] hover:scale-[1.1]"
                onClick={(e) => {
                  e.preventDefault();
                  handleClick(sectionValue);
                }}
              >
                <div
                  className="rounded-lg overflow-hidden relative bg-cover bg-center"
                  style={{ backgroundImage: `url(${imageMap[imageKey]})` }}
                >
                  <img
                    src={imageMap[imageKey]}
                    alt={card.title}
                    className="opacity-0"
                    loading="lazy"
                  />
                </div>
              </a>
            </div>
          ) : null;
        })}
        <figcaption className="absolute bottom-2 left-2">
          <Tag text={sectionKey} bg={sectionIndex !== 0} invert={sectionIndex === 0} />
        </figcaption>
      </div>
    ))
  ), [sections, handleClick]);

  return (
    <>
      <section id="portfolio" className="py-[5rem]">
        <Tag text="Portfolio" icon={<VscSparkleFilled />} />
        <h1 className="heading text-[#8f56cc] text-[2rem] xl:text-[3rem] [line-height:1.2] py-5 mb-2">
          Check out my featured projects
        </h1>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-4 relative">
          {mappedSections}
        </div>
        {isGalleryOpen && <Gallery items={selectedItems} onClose={() => setGalleryOpen(false)} />}
      </section>
    </>
  );
};

export default Portfolio;
