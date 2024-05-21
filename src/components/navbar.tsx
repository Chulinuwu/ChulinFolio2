'use client'
import React, { useState, useEffect } from 'react';

export default function navbar() {

  const [isScrolled, setIsScrolled] = useState(false);
  const [navbarHeight, setNavbarHeight] = useState('h-20');
  const [textSize, setTextSize] = useState('text-2xl');
  

  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > 0;
      if (show) {
        setIsScrolled(true);
        setNavbarHeight('h-16');
        setTextSize('text-xl');
      } else {
        setIsScrolled(false);
        setNavbarHeight('h-20');
        setTextSize('text-2xl');
      }
    };

    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
  
      

<nav className={`fixed top-0 w-[100%] shadow-md z-50 transition-all duration-500 bg-white ${navbarHeight} border-gray-200 dark:bg-gray-900`}>
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 h-[100%]">
    <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse text-red-600">
        {/* <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" /> */}
        <span className={`font-semibold whitespace-nowrap dark:text-white text-4xl font-poppins`}>Chulinxz</span>
    </a>
    <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
        <span className="sr-only font-semibold">Open main menu</span>
        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
    <div className="hidden w-full md:block md:w-auto" id="navbar-default">
      <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        <li>
          <a href="#" className="text-xl block py-2 px-3 text-white bg-red-300 rounded md:bg-transparent md:text-red-500 md:p-0 dark:text-white md:dark:text-red-500 font-poppins font-semibold" aria-current="page">Home</a>
        </li>
        <li>
          <a href="#" className="text-xl block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-red-700 md:p-0 dark:text-white md:dark:hover:text-red-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent font-poppins font-semibold">About</a>
        </li>
        <li>
          <a href="#" className="text-xl block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-red-700 md:p-0 dark:text-white md:dark:hover:text-red-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent font-poppins font-semibold">Services</a>
        </li>
        <li>
          <a href="#" className="text-xl block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-red-700 md:p-0 dark:text-white md:dark:hover:text-red-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent font-poppins font-semibold">Pricing</a>
        </li>
        <li>
          <a href="#" className="text-xl block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-red-700 md:p-0 dark:text-white md:dark:hover:text-red-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent font-poppins font-semibold">Contact</a>
        </li>
      </ul>
    </div>  
  </div>
</nav>

  );
}
