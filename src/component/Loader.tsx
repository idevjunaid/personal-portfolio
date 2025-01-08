// src/component/Loader.tsx
import React from 'react';
import '../App.css';

interface LoaderProps {
    loading: boolean
}
const Loader: React.FC<LoaderProps> = ({loading}) => {
  return (
    <div id="loader" className={`loader loaded w-screen h-screen fixed top-0 left-0 flex justify-center items-center bg-[#e6ebf4] dark:bg-[#111111] transition-all duration-300 ease-in-out ${loading ? 'opacity-100 z-[9999999]' : 'opacity-0 z-[-1]'} `}>
      <div id="loaderContent" className={`loader__content absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[40px] h-[60px] ${loading ? 'opacity-100' : 'opacity-0'}`}>
        <div className="loader__shadow w-[40px] h-[5px] bg-[#bdc1c8] dark:bg-[#000000] absolute top-[49px] left-0 rounded-full"></div>
        <div className="loader__box w-[40px] h-[40px] bg-gradient-light dark:bg-gradient-dark"></div>
      </div>
    </div>
  );
};

export default Loader;