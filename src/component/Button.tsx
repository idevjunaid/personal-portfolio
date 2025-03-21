import React from "react";

interface ButtonProps {
  text: string;
  varient: string;
  url: string;
  icon?: React.ReactNode;
  icononly?: boolean;
  border?: boolean;
  onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
}
const Button: React.FC<ButtonProps> = ({
  text,
  varient,
  url,
  icon,
  icononly,
  border = true,
  onClick,
}) => {
  return (
    <>
      <a
        href={url}
        className={`text-animate svg-animate flex justify-center items-center gap-2 decoration-none text-center ${
          varient === "transparent"
            ? ""
            : "bg-gradient-light dark:bg-gradient-dark btn-primary hover:scale-105"
        }  rounded-[1rem] xl:rounded-[1.25rem] p-2 md:py-2 md:px-6 inline-flex whitespace-nowrap max-w-full ${
          border
            ? "border border-1 border-[#d1d5e0] dark:border-[#d1d1cf80]"
            : ""
        }`}
        onClick={(event) => {
          if (onClick) {
            event.preventDefault();
            onClick(event);
          }
        }}
      >
        <span className={`${icononly ? "d-lg-none" : ""}`}>{text}</span>
        {icon ? <span className="">{icon}</span> : null}
      </a>
    </>
  );
};

export default Button;
