"use client";
import React, { useRef } from "react";

export default function NavbarVertical() {
  const icon1 = useRef<HTMLElement | null>(null);
  const menu1 = useRef<HTMLDivElement | null>(null);
  const divRef = useRef(null);

  const showMenu1 = (flag: boolean) => {
    if (flag && icon1.current) {
      icon1.current.classList.toggle("rotate-180");
      menu1.current?.classList.toggle("hidden");
    }
  };

  const icon2 = useRef<HTMLElement | null>(null);

  const showMenu2 = (flag: boolean) => {
    if (flag) {
      icon2.current?.classList.toggle("rotate-180");
    }
  };

  const icon3 = useRef<HTMLElement | null>(null);

  const showMenu3 = (flag: boolean) => {
    if (flag) {
      icon3.current?.classList.toggle("rotate-180");
    }
  };

  const Main = useRef<HTMLElement | null>(null);
  const open = useRef<HTMLElement | null>(null);
  const close = useRef<HTMLElement | null>(null);

  const showNav = (flag: boolean) => {
    if (flag) {
      Main.current?.classList.toggle("-translate-x-full");
      Main.current?.classList.toggle("translate-x-0");
      open.current?.classList.toggle("hidden");
      close.current?.classList.toggle("hidden");
    }
  };
  return (
    <div className="z-50 fixed max-sm:w-full flex flex-col pt-[80px] ">
      <div className="navbar rounded-r bg-gray-900 xl:hidden flex justify-between w-full p-6 items-center ">
        <div className="flex justify-between  items-center space-x-3">
          svg
          <p className="text-2xl leading-6 text-white">OvonRueden</p>
        </div>

        <div aria-label="toggler" className="flex justify-center items-center">
          <button aria-label="open"id="open"className="hidden focus:outline-none focus:ring-2">
            svg
          </button>
          <button aria-label="close"  id="close" className=" focus:outline-none focus:ring-2">
            svg
          </button>
        </div>

      </div>

      <div id="Main"className="main xl:rounded-r transform  xl:translate-x-0  ease-in-out transition duration-500 flex justify-start items-start h-full  w-full sm:w-64 bg-gray-900 flex-col" >
        <div className="hidden xl:flex justify-start p-6 items-center space-x-3 ">
          svg -
          <p className="text-2xl leading-6 text-white">OvonRueden</p>
        </div>
        <div className="mt-6 flex flex-col justify-start items-center  pl-4 w-full border-gray-600 border-b space-y-3 pb-5 ">
          <button className="flex jusitfy-start items-center space-x-6 w-full  focus:outline-none  focus:text-indigo-400  text-white rounded ">
            svg -<p className="text-base leading-4 ">Dashboard</p>
          </button>
          <button className="flex jusitfy-start items-center w-full  space-x-6 focus:outline-none text-white focus:text-indigo-400   rounded ">
            svg -<p className="text-base leading-4 ">Users</p>
          </button>
        </div>
        <div className="flex flex-col justify-start items-center   px-6 border-b border-gray-600 w-full  ">
          <button
            onClick={() => showMenu1(true)}
            className="focus:outline-none focus:text-indigo-400 text-left  text-white flex justify-between items-center w-full py-5 space-x-14  "
          >
            <p className="text-sm leading-5  uppercase">Profile Overview</p>
            svg -
          </button>
          <div
            ref={menu1}
            className="flex justify-start  flex-col w-full md:w-auto items-start pb-1 "
          >
            <button className="flex justify-start items-center space-x-6 hover:text-white focus:bg-gray-700 focus:text-white hover:bg-gray-700 text-gray-400 rounded px-3 py-2  w-full md:w-52">
              svg -<p className="text-base leading-4  ">Messages</p>
            </button>
            <button className="flex justify-start items-center space-x-6 hover:text-white focus:bg-gray-700 focus:text-white hover:bg-gray-700 text-gray-400 rounded px-3 py-2  w-full md:w-52">
              svg -<p className="text-base leading-4  ">Security</p>
            </button>
            <button className="flex justify-start items-center space-x-6 hover:text-white focus:bg-gray-700 focus:text-white hover:bg-gray-700 text-gray-400 rounded px-3 py-2 w-full md:w-52">
              svg -<p className="text-base leading-4  ">Settings</p>
            </button>
            <button className="flex justify-start items-center space-x-6 hover:text-white focus:bg-gray-700 focus:text-white hover:bg-gray-700 text-gray-400 rounded px-3 py-2  w-full md:w-52">
              svg -<p className="text-base leading-4  ">Notifications</p>
            </button>
            <button className="flex justify-start items-center space-x-6 hover:text-white focus:bg-gray-700 focus:text-white hover:bg-gray-700 text-gray-400 rounded px-3 py-2  w-full md:w-52">
              svg -<p className="text-base leading-4  ">Passwords</p>
            </button>
            <button className="flex justify-start items-center space-x-6 hover:text-white focus:bg-gray-700 focus:text-white hover:bg-gray-700 text-gray-400 rounded px-3 py-2  w-full md:w-52">
              svg -<p className="text-base leading-4  ">Goals</p>
            </button>
          </div>
        </div>
        <div className="flex flex-col justify-start items-center   px-6 border-b border-gray-600 w-full  ">
          <button
            onClick={() => showMenu2(true)}
            className="focus:outline-none focus:text-indigo-400  text-white flex justify-between items-center w-full py-5 space-x-14  "
          >
            <p className="text-sm leading-5 uppercase">VENDORS</p>
            svg -
          </button>
          <div className="hidden flex justify-start flex-col items-start pb-5 ">
            <button className="flex justify-start items-center space-x-6 hover:text-white focus:bg-gray-700 focus:text-white hover:bg-gray-700 text-gray-400 rounded px-3 py-2  w-full md:w-52">
              svg -<p className="text-base leading-4  ">Messages</p>
            </button>
            <button className="flex justify-start items-center space-x-6 hover:text-white focus:bg-gray-700 focus:text-white hover:bg-gray-700 text-gray-400 rounded px-3 py-2  w-full md:w-52">
              svg -<p className="text-base leading-4  ">Security</p>
            </button>
            <button className="flex justify-start items-center space-x-6 hover:text-white focus:bg-gray-700 focus:text-white hover:bg-gray-700 text-gray-400 rounded px-3 py-2 w-full md:w-52">
              svg -<p className="text-base leading-4  ">Settings</p>
            </button>
            <button className="flex justify-start items-center space-x-6 hover:text-white focus:bg-gray-700 focus:text-white hover:bg-gray-700 text-gray-400 rounded px-3 py-2  w-full md:w-52">
              svg -<p className="text-base leading-4  ">Notifications</p>
            </button>
            <button className="flex justify-start items-center space-x-6 hover:text-white focus:bg-gray-700 focus:text-white hover:bg-gray-700 text-gray-400 rounded px-3 py-2  w-full md:w-52">
              svg -<p className="text-base leading-4  ">Passwords</p>
            </button>
            <button className="flex justify-start items-center space-x-6 hover:text-white focus:bg-gray-700 focus:text-white hover:bg-gray-700 text-gray-400 rounded px-3 py-2  w-full md:w-52">
              svg -<p className="text-base leading-4  ">Goals</p>
            </button>
          </div>
        </div>
        <div className="flex flex-col justify-between items-center h-full pb-6   px-6  w-full  space-y-32 ">
          <button
            onClick={() => showMenu3(true)}
            className="focus:outline-none focus:text-indigo-400  text-white flex justify-between items-center w-full py-5 space-x-14  "
          >
            <p className="text-sm leading-5  uppercase">SERVICES</p>
            svg -
          </button>
          <div className="hidden flex justify-start flex-col items-start pb-5 ">
            <button className="flex justify-start items-center space-x-6 hover:text-white focus:bg-gray-700 focus:text-white hover:bg-gray-700 text-gray-400 rounded px-3 py-2  w-52">
              svg -<p className="text-base leading-4  ">Messages</p>
            </button>
            <button className="flex justify-start items-center space-x-6 hover:text-white focus:bg-gray-700 focus:text-white hover:bg-gray-700 text-gray-400 rounded px-3 py-2  w-52">
              svg -<p className="text-base leading-4  ">Security</p>
            </button>
            <button className="flex justify-start items-center space-x-6 hover:text-white focus:bg-gray-700 focus:text-white hover:bg-gray-700 text-gray-400 rounded px-3 py-2 w-52">
              svg -<p className="text-base leading-4  ">Settings</p>
            </button>
            <button className="flex justify-start items-center space-x-6 hover:text-white focus:bg-gray-700 focus:text-white hover:bg-gray-700 text-gray-400 rounded px-3 py-2  w-52">
              svg -<p className="text-base leading-4  ">Notifications</p>
            </button>
            <button className="flex justify-start items-center space-x-6 hover:text-white focus:bg-gray-700 focus:text-white hover:bg-gray-700 text-gray-400 rounded px-3 py-2  w-52">
              svg -<p className="text-base leading-4  ">Passwords</p>
            </button>
            <button className="flex justify-start items-center space-x-6 hover:text-white focus:bg-gray-700 focus:text-white hover:bg-gray-700 text-gray-400 rounded px-3 py-2  w-52">
              svg -<p className="text-base leading-4  ">Goals</p>
            </button>
          </div>
          <div className=" flex justify-between items-center w-full">
            <div className="flex justify-center items-center  space-x-2">
              <div>
                <img
                  className="rounded-full"
                  src="https://i.ibb.co/L1LQtBm/Ellipse-1.png"
                  alt="avatar"
                />
              </div>
              <div className="flex justify-start flex-col items-start">
                <p className="cursor-pointer text-sm leading-5 text-white">
                  Alexis Enache
                </p>
                <p className="cursor-pointer text-xs leading-3 text-gray-300">
                  alexis81@gmail.com
                </p>
              </div>
            </div>
            svg -
          </div>
        </div>
      </div>

      <script src="script.js"></script>
    </div>
  );
}
