'use client'
import React, { useState, useEffect } from 'react';

export default function navbar() {

  const [isScrolled, setIsScrolled] = useState(false);
  const [navbarHeight, setNavbarHeight] = useState('h-20');
  const [textSize, setTextSize] = useState('text-2xl');
  const [navbarColor, setNavbarColor] = useState('bg-opacity-0');
  const [textColor, setTextColor] = useState('text-white');


  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > 0;
      if (show) {
        setIsScrolled(true);
        setNavbarHeight('h-16');
        setTextSize('text-xl');
        setTextColor('text-rednew');
        setNavbarColor('bg-opacity-100');
      } else {
        setIsScrolled(false);
        setNavbarHeight('h-20');
        setTextSize('text-2xl');
        setTextColor('text-white');
        setNavbarColor('bg-opacity-0');
      }
    };

    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
  
      

<nav className={`fixed top-0 w-[100%] shadow-md z-50 transition-all duration-500 bg-white ${navbarColor}  ${navbarHeight} border-gray-200 dark:bg-gray-900`}>
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 h-[100%]">
    <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse ">
        {/* <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" /> */}
        <span className={`font-semibold whitespace-nowrap ${textColor} text-4xl   `}>Chulinxz</span>
    </a>
    {/* <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
        <span className="sr-only font-semibold">Open main menu</span>
        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button> */}
    <div className="hidden w-full md:block md:w-auto" id="navbar-default">
      <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0   ">
        <li>
          <a href="#" className={`text-xl block py-2 px-3 ${textColor} bg-red-300 rounded bg-transparent  md:p-0 font-semibold aria-current="page`}>Home</a>
        </li>
        <li>
          <a href="#" className={`text-xl block py-2 px-3 ${textColor} bg-red-300 rounded bg-transparent  md:p-0 font-semibold`}>About</a>
        </li>
        <li>
          <a href="#"  className={`text-xl block py-2 px-3 ${textColor} bg-red-300 rounded bg-transparent  md:p-0 font-semibold`}>Services</a>
        </li>
        <li>
          <a href="#" className={`text-xl block py-2 px-3 ${textColor} bg-red-300 rounded bg-transparent  md:p-0 font-semibold`}>Pricing</a>
        </li>
        <li>
          <a href="#" className={`text-xl block py-2 px-3 ${textColor} bg-red-300 rounded bg-transparent  md:p-0 font-semibold`} >Contact</a>
        </li>
      </ul>
    </div>  
  </div>
</nav>

  );
}
