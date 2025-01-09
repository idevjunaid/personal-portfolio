import React from "react";


interface TagProps {
    text: string;
    icon?: React.ReactNode;
}
const Tag: React.FC<TagProps> = ({text, icon}) => {
    return (
        <>
           <div className="tag  items-center gap-2 border border-1 border-[#d1d5e0] dark:border-[#d1d1cf80] inline-flex px-3 rounded-[1rem] text-[0.8rem] text-[#424550] dark:text-[#ffffff] ">
            {icon? <span className="icon">{icon}</span> : ''}
            <span className="text">{text}</span> 
           </div>
        </>
    );
};

export default Tag;