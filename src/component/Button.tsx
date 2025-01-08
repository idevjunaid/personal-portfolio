import React from "react";

interface ButtonProps {
    text: string;
    varient: string;
    url: string;
    icon: React.ReactNode;
}
const Button: React.FC<ButtonProps> = ({ text, varient, url,icon }) => {
    return (
        <>
            <a href={url} className={`text-animate svg-animate flex justify-center items-center gap-2 decoration-none  ${varient === 'transparent' ? '' : 'bg-gradient-light dark:bg-gradient-dark btn-primary'} border border-1 rounded-[1rem] py-4 px-6 inline-flex`}>
                <span className="">{text}</span>
                <span className="">{icon}</span>
            </a>
        </>
    );
};

export default Button;