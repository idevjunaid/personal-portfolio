import React from "react";
import Profile from "../assets/profile.png";
import Data from "../data/data.json";
import { FiGithub } from "react-icons/fi";
import { AiOutlineLinkedin } from "react-icons/ai";
import  Button  from "./Button";

const Card = () => {
    const data = Data.card;
    return (
        <>
            <div className="card p-5">
                <div className="title">{data.name}</div>
                <div className="profile-img">
                    <img src={Profile} alt="profile image" />
                </div>
                <div className="subheading">
                    <h5 className="heading">Specialization:</h5>
                    <p className="detail">{data.title}</p>
                </div>
                <div className="subheading">
                    <h5 className="heading">Based in:</h5>
                    <p className="detail">{data.address}</p>
                </div>
                <div className="sociallinks flex justify-center items-center gap-5">
                    <a href={data.sociallinks.github} className="border border-1 border-[#a8b0c1] p-4 rounded-[1rem] svg-animate">
                        <FiGithub className="w-full h-full text-[1.2rem] shadow-2xl" />
                    </a>
                    <a href={data.sociallinks.linkedin} className="border border-1 border-[#a8b0c1] p-4 rounded-[1rem] svg-animate">
                        <AiOutlineLinkedin className="w-full h-full text-[1.2rem] shadow-2xl " />
                    </a>
                </div>
                <div className="btn_holder">
                    <Button text="let's work togather" varient="primary" url="https://github.com/junaid-amin" icon={<FiGithub />} />
                </div>
            </div>
        </>
    );
};

export default Card;