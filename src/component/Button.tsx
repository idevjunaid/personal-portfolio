import React from "react";

interface ButtonProps {
    text: string;
    varient: string;
    url: string;
    icon: React.ReactNode
    icononly?: boolean
    border?: boolean
}
const Button: React.FC<ButtonProps> = ({text, varient, url, icon, icononly, border=true}) => {
    return (
        <>
            <a href={url} className={`text-animate svg-animate flex justify-center items-center gap-2 decoration-none  ${varient === 'transparent' ? '' : 'bg-gradient-light dark:bg-gradient-dark btn-primary hover:scale-105'}  rounded-[1rem] xl:rounded-[1.25rem] p-2 md:py-2 md:px-6 inline-flex whitespace-nowrap max-w-full ${border?'border border-1 border-[#d1d5e0] dark:border-[#d1d1cf80]':''}`}>
                <span className={`${icononly? 'd-lg-none':''}`}>{text}</span>
                <span className="">{icon}</span>
            </a>
        </>
    );
};

export default Button;