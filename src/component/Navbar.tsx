import React from "react";
import ThemeSwitcher from "./ThemeSwitcher";
import Button from "./Button";
import { BiMessageSquareDots } from "react-icons/bi";
import { GrHomeRounded } from "react-icons/gr";
import { HiOutlineSquares2X2 } from "react-icons/hi2";
import { AiOutlineUser } from "react-icons/ai";
import { LuSquareMenu } from "react-icons/lu";
import { FaRegEnvelope } from "react-icons/fa6";
import "../App.css"

const Navbar: React.FC = () => {
    return (
        <header className="navbar fixed md:sticky md:top-0 bottom-[15px] md:bottom-[unset] md:left-0 left-1/2 -translate-x-[50%] md:translate-x-0 bg-[#00000008] md:bg-transparent z-[999999] backdrop-blur-[4px] md:backdrop-blur-[unset] px-4 pr-0 md:pl-0 md:pr-4 rounded-[2rem] md:py-2">
            <nav className="main flex md:justify-between items-center justify-center gap-3">
                <div className="navlinks-main flex items-center">
                    <ul className="navlinks flex gap-3">
                        <li className="navlink  md:backdrop-blur-[4px] md:bg-[#e6ebf408] dark:bg-[#00000000] dark:md:bg-[#00000008] cursor-pointer md:border border-1 dark:border-[#ffffff4d] border-[#0000004d] rounded-[1.25rem] text-light dark:text-dark min-w-[20px] md:px-5 md:py-2 "><a href="#" className=" whitespace-nowrap  flex items-center"><GrHomeRounded className=" d-md-none w-full h-full text-[20px] md:text-2xl" /><span className="d-lg-none">Home</span></a></li>
                        <li className="navlink  md:backdrop-blur-[4px] md:bg-[#e6ebf408] dark:bg-[#00000000] dark:md:bg-[#00000008] cursor-pointer md:border border-1 dark:border-[#ffffff4d] border-[#0000004d] rounded-[1.25rem] text-light dark:text-dark min-w-[20px] md:px-5 md:py-2 "><a href="#" className=" whitespace-nowrap  flex items-center"><HiOutlineSquares2X2 className=" d-md-none w-full h-full text-[20px] md:text-2xl" /><span className="d-lg-none">Portfolio</span></a></li>
                        <li className="navlink  md:backdrop-blur-[4px] md:bg-[#e6ebf408] dark:bg-[#00000000] dark:md:bg-[#00000008] cursor-pointer md:border border-1 dark:border-[#ffffff4d] border-[#0000004d] rounded-[1.25rem] text-light dark:text-dark min-w-[20px] md:px-5 md:py-2 "><a href="#" className=" whitespace-nowrap  flex items-center"><AiOutlineUser className=" d-md-none w-full h-full text-[20px] md:text-2xl" /><span className="d-lg-none">About Me</span></a></li>
                        <li className="navlink  md:backdrop-blur-[4px] md:bg-[#e6ebf408] dark:bg-[#00000000] dark:md:bg-[#00000008] cursor-pointer md:border border-1 dark:border-[#ffffff4d] border-[#0000004d] rounded-[1.25rem] text-light dark:text-dark min-w-[20px] md:px-5 md:py-2 "><a href="#" className=" whitespace-nowrap  flex items-center"><LuSquareMenu className=" d-md-none w-full h-full text-[20px] md:text-2xl" /><span className="d-lg-none">Resume</span></a></li>
                        <li className="navlink  md:backdrop-blur-[4px] md:bg-[#e6ebf408] dark:bg-[#00000000] dark:md:bg-[#00000008] cursor-pointer md:border border-1 dark:border-[#ffffff4d] border-[#0000004d] rounded-[1.25rem] text-light dark:text-dark min-w-[20px] md:px-5 md:py-2 "><a href="#" className=" whitespace-nowrap  flex items-center"><FaRegEnvelope className=" d-md-none w-full h-full text-[20px] md:text-2xl" /><span className="d-lg-none">Contact</span></a></li>
                    </ul>
                </div>
                <div className="btn-main flex gap-2">
                    <ThemeSwitcher />
                    <div className="btn_holder">
                        <Button text="Let's Talk" varient="primary" url="mailto:junaidamin128@gmail.com" icon={<BiMessageSquareDots />} icononly={true}/>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Navbar;
