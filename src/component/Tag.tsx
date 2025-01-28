import React from "react";


interface TagProps {
    text: string;
    icon?: React.ReactNode;
    bg?: boolean
    invert?: boolean
    color?: string
}
const Tag: React.FC<TagProps> = ({text, icon, bg, invert, color}) => {
    return (
        <>
           <div className={`tag  items-center gap-2 border border-1 border-[#d1d5e0] dark:border-[#d1d1cf80] inline-flex px-3 rounded-[1rem] text-[0.8rem] ${bg? (invert ? 'bg-[#111111] dark:bg-[#e6ebf4] text-[#c6c7d3] dark:text-light border-[#d1d1cf80] dark:border-[#d1d5e0]' :'bg-[#e6ebf4] dark:bg-[#111111] text-light dark:text-dark border-transparent') : ''} ${color? `text-${color}`:'text-light dark:text-dark'}`}>
            {icon? <span className="icon">{icon}</span> : ''}
            <span className="text">{text}</span> 
           </div>
        </>
    );
};

export default Tag;