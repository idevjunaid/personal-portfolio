import React, { useState, useEffect } from 'react';
import { MdOutlineLightMode } from "react-icons/md";
import { PiMoonStarsBold } from "react-icons/pi";

const ThemeSwitcher = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme') || 'light';
        document.documentElement.classList.add(savedTheme);
        setIsDarkMode(savedTheme === 'dark');
    }, []);

    const toggleTheme = () => {
        const newTheme = isDarkMode ? 'light' : 'dark';
        document.documentElement.classList.remove(isDarkMode ? 'dark' : 'light');
        document.documentElement.classList.add(newTheme);
        localStorage.setItem('theme', newTheme);
        setIsDarkMode(!isDarkMode);
    };

    return (
        <button
            onClick={toggleTheme}
            className="flex items-center justify-center w-10 h-10 rounded-full m-auto transition-all transform md:hover:scale-110 md:hover:rotate-12 ease-in-out duration-300 z-[999999]"
        >
            {isDarkMode ? (
                <MdOutlineLightMode className="w-full h-full text-gray-400 hover:text-gray-100 p-2" />
            ) : (
                <PiMoonStarsBold className="w-full h-full text-gray-600 hover:text-gray-800 p-2" />
            )}
        </button>
    );
};

export default ThemeSwitcher;
