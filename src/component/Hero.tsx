import React from "react";
import { HiOutlineSquares2X2 } from "react-icons/hi2";
import Tag from "./Tag";
import Button from "./Button";
import { VscSparkleFilled } from "react-icons/vsc";
import '../App.css'


const Hero: React.FC = () => {
    return (
        <>
            <section id="home" className="">
                <Tag text="Let's meet" icon={<VscSparkleFilled />} />
                <h1 className="heading text-[#8f56cc] text-[3.8rem] [line-height:1.2]">I'm Junaid Amin Web Developer.
                </h1>
                <div className="btn_holder flex gap5">
                    <Button text="My Work" varient="transparent" url="#" icon={<HiOutlineSquares2X2 />} icononly />
                </div>
            </section>
        </>
    );
};

export default Hero;