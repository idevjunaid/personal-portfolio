import React from "react";
import { HiOutlineSquares2X2 } from "react-icons/hi2";
import Tag from "./Tag";
import Button from "./Button";
import { VscSparkleFilled } from "react-icons/vsc";
import { MdOutlineFileDownload } from "react-icons/md";
import '../App.css'
import cvFile from "../assets/dummy.pdf";



const Hero: React.FC = () => {

    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = cvFile;
        link.download = 'cv.pdf'; 
        link.click();
    };
    return (
        <>
            <section id="home" className="xl:h-screen content-center py-[5rem]">
                <Tag text="Let's meet" icon={<VscSparkleFilled />} />
                <h1 className="heading text-[#8f56cc] text-[2.5rem] xl:text-[4rem] [line-height:1.2] py-5 mb-5">I'm Junaid Amin Web Developer.
                </h1>
                <div className="btn_holder flex gap-5">
                    <Button text="My Work" varient="transparent" url="#portfolio" icon={<HiOutlineSquares2X2 />} />
                    <Button text="Download CV" varient="transparent" url="#" icon={<MdOutlineFileDownload />} border= {false} onClick={handleDownload} />
                </div>
            </section>
        </>
    );
};

export default Hero;