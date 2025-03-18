import { useCallback } from "react";
import { HiOutlineSquares2X2 } from "react-icons/hi2";
import { VscSparkleFilled } from "react-icons/vsc";
import { MdOutlineFileDownload } from "react-icons/md";
import Tag from "./Tag";
import Button from "./Button";
import '../App.css';

const cvFile = () => import("../assets/dummy.pdf");

const Hero: React.FC = () => {

    const handleDownload = useCallback(async () => {
        const { default: file } = await cvFile(); // Lazy load PDF only when clicked
        const link = document.createElement('a');
        link.href = file;
        link.download = 'Junaid_Amin_CV.pdf';
        document.body.appendChild(link); // Ensure it's attached to the DOM
        link.click();
        document.body.removeChild(link); // Clean up after download
    }, []);

    return (
        <>
            <section id="home" className="xl:h-full content-center py-[5rem]">
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
