"use client";
import Image from "next/image";
import "animate.css";
import Footer from "@/components/footer";
import peko from "../../public/img/pekora.png";
import pic1 from "../../public/img/pic1.png";
import pekomobile from "../../public/img/pekoramobile.png";
import anan1 from "../../public/img/anan1.jpg";
import { useState, useEffect } from "react";
import "animate.css";
import { useRouter } from "next/navigation";
import { TypeAnimation } from "react-type-animation";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

export default function Home() {
  const router = useRouter();

  const [windowSize, setWindowSize] = useState<{
    width: number;
    height: number;
  }>({
    width: 0,
    height: 0,
  });
  const [pekoraImg, setpekoraImg] = useState(peko);
  const [isLoaded, setIsloaded] = useState(false);
  // const [pekomobile, setpekomobileImg] = useState(pekom);

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    handleResize();

    window.addEventListener("resize", handleResize);
    setIsloaded(true);
    // Remember to clean up the event listener
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty dependency array means this effect runs once on mount

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // if you want a smooth scrolling effect
    });
  };

  const scrollToAbout = () => {
    const about = document.getElementById("about");
    if (about) {
      about.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const [isScrolled, setIsScrolled] = useState(false);
  const [navbarHeight, setNavbarHeight] = useState("h-20");
  const [textSize, setTextSize] = useState("text-2xl");
  const [navbarColor, setNavbarColor] = useState("bg-opacity-0");
  const [textColor, setTextColor] = useState("text-white");

  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > 0;
      if (show) {
        setIsScrolled(true);
        setNavbarHeight("h-16");
        setTextSize("text-xl");
        setTextColor("text-rednew");
        setNavbarColor("bg-opacity-100");
      } else {
        setIsScrolled(false);
        setNavbarHeight("h-20");
        setTextSize("text-2xl");
        setTextColor("text-white");
        setNavbarColor("bg-opacity-0");
      }
    };

    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <main className="w-full flex flex-col">
      {isClient && (
        <div className="w-full  h-full">
          <nav
            className={`fixed top-0 w-[100%] shadow-md z-50 transition-all duration-500 bg-white ${navbarColor}  ${navbarHeight} border-gray-200 dark:bg-gray-900`}
          >
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 h-[100%]">
              <a
                href="#"
                className="flex items-center space-x-3 rtl:space-x-reverse "
              >
                {/* <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" /> */}
                <span
                  className={`font-semibold whitespace-nowrap ${textColor} text-4xl   `}
                >
                  Chulinxz
                </span>
              </a>
              {/* <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
        <span className="sr-only font-semibold">Open main menu</span>
        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button> */}
              <div
                className="hidden w-full md:block md:w-auto"
                id="navbar-default"
              >
                <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0   ">
                  <li>
                    <div
                      onClick={scrollToTop}
                      className={`text-xl block py-2 px-3 ${textColor} bg-red-300 rounded bg-transparent  md:p-0 font-semibold aria-current="page`}
                    >
                      Home
                    </div>
                  </li>
                  <li>
                    <div
                      onClick={scrollToAbout}
                      className={`text-xl block py-2 px-3 ${textColor} bg-red-300 rounded bg-transparent  md:p-0 font-semibold`}
                    >
                      About
                    </div>
                  </li>
                  <li>
                    <a
                      href="#"
                      className={`text-xl block py-2 px-3 ${textColor} bg-red-300 rounded bg-transparent  md:p-0 font-semibold`}
                    >
                      Services
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className={`text-xl block py-2 px-3 ${textColor} bg-red-300 rounded bg-transparent  md:p-0 font-semibold`}
                    >
                      Pricing
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className={`text-xl block py-2 px-3 ${textColor} bg-red-300 rounded bg-transparent  md:p-0 font-semibold`}
                    >
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          <div className="h-[100vh] w-full bg-gradient-to-b from-ppnew to-pinknew flex flex-row max-md:flex-col max-md:h-auto">
            <div className="w-[60%] h-full flex flex-col justify-center max-md:justify-center max-md:w-full pt-[80px] pl-20 max-md:px-20 ">
              {typeof window !== "undefined" &&
                windowSize.width < 1024 &&
                isLoaded && (
                  <div className="h-full flex justify-center max-lg:w-[100%] max-lg:h-[80%]">
                    <Image
                      src={pekomobile}
                      alt={"pekoraImg"}
                      height={0}
                      width={0}
                      className="w-auto h-auto  mt-[50px] max-lg:pt-[30px] max-lg:w-1/2 max-lg:h-auto max-md:w-[200px] sm:mt-0 "
                    />
                  </div>
                )}
              <div className="w-full h-full flex flex-col max-lg:mb-20 max-md:mb-0 ">
                <div className="text-white text-5xl  font-bold mt-[30%] max-lg:mt-10 max-md:mt-10 mb-10 max-lg:text-4xl max-md:text-xl max-lg:text-center">
                  <TypeAnimation
                    sequence={[
                      // Same substring at the start will only be typed once, initially
                      "Hi there, I'm An-An",
                      1000,
                      "Student in Computer Engineering",
                      1000,
                      "Chulalongkorn University",
                      1000,
                      "Welcome to My Website!",
                      1000,
                    ]}
                    speed={50}
                    repeat={Infinity}
                  />
                </div>
                <div className="text-white animate__bounceInRight animated text-3xl font-bold max-lg:text-lg max-lg:text-center ">
                  Made this website to introduce myself to you {"<3"}
                </div>
                <div className="text-white text-2xl font-bold animate__bounceInRight animated max-lg:text-base max-lg:text-center   mt-3">
                  Developer / Digital Artist / UXUI Designer
                </div>
              </div>

              {/* <div className="w-full h-full flex flex-row max-md:flex-col my-5 max-md:mt-12 justify-start max-md:justify-center max-md:w-full">
              <div className="flex-row flex justify-center  ">
                <div className="w-full h-full  flex justify-start max-md:justify-center    items-center">
                  <Image
                    src={ig}
                    alt={"igImg"}
                    height={0}
                    width={0}
                    className="w-1/2 h-auto mr-10 max-lg:mr-5 max-sm:mr-2 max-lg:scale-[1.7] max-lg:hover:scale-[1.9]  max-lg:w-auto max-lg:h-auto  max-md:w-auto max-md:h -auto   hover:scale-[1.2] transition-all"
                  />
                </div>
                <div className="w-full h-full  flex justify-start max-md:justify-center  items-center">
                  <Image
                    src={github}
                    alt={"igImg"}
                    height={0}
                    width={0}
                    className="w-1/2 h-auto mr-10 max-sm:mr-2  max-lg:mr-5 max-lg:w-auto max-lg:h-auto max-lg:scale-[1.7]   max-lg:hover:scale-[1.9] max-md:w-auto max-md:h-auto    hover:scale-[1.2] transition-all "
                  />
                </div>
              </div>

              <div className="flex flex-row max-sm:pt-12 justify-center">
                <div className="w-full h-full  flex justify-start max-md:justify-center  items-center">
                  <Image
                    src={gmail}
                    alt={"igImg"}
                    height={0}
                    width={0}
                    className="w-1/2 h-auto mr-10  max-sm:mr-2  max-lg:mr-5  max-lg:w-auto max-lg:h-auto  max-lg:scale-[1.7]   max-lg:hover:scale-[1.9] max-md:w-auto max-md:h -auto  hover:scale-[1.2] transition-all"
                  />
                </div>
                <div className="w-full h-full  flex justify-start max-md:justify-center     items-center">
                  <Image
                    src={discord}
                    alt={"igImg"}
                    height={0}
                    width={0}
                    className="w-1/2 h-auto max-lg:w-auto max-lg:h-auto max-md:w-auto max-md:h -auto max-lg:scale-[1.7]  max-lg:hover:scale-[1.9]  hover:scale-[1.2] transition-all"
                  />
                </div>
              </div>
            </div> */}
            </div>
            <div className="w-full h-full max-lg:w-0 mt- flex justify-end bottom-0">
              <Image
                src={pekoraImg}
                alt={"pekoraImg"}
                height={0}
                width={0}
                className="w-auto h-auto mt-[80px]   max-lg:w-0 "
              />
            </div>
          </div>
          {typeof window !== "undefined" && windowSize.width > 1024 && (
            <div className="px-20 pt-20 w-full flex justify-center h-full">
              <button
                onClick={() =>
                  window.open("https://www.instagram.com/vyovyo___", "_blank")
                }
                className="w-[300px] mr-5 group flex justify-center items-center gap-2 group-hover:before:duration-500 group-hover:after:duration-500 after:duration-500 hover:border-neutral-900 duration-500 hover:duration-500 underline underline-offset-2 hover:underline hover:underline-offset-4 origin-left hover:decoration-2 hover:text-neutral-300 relative bg-[#DAA35E] px-10 py-4 border text-left p-3 text-gray-50 text-base font-bold rounded-lg overflow-hidden bg-gradient-to-r from-red-600 to-yellow-200 hover:after:animate-pulse"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-7 "
                  fill="currentColor"
                  style={{ color: "white" }}
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
                Instagram
              </button>

              <button
                onClick={() =>
                  window.open("https://github.com/Chulinuwu/", "_blank")
                }
                className="w-[300px] group mr-5 flex justify-center items-center gap-2 group-hover:before:duration-500 group-hover:after:duration-500 after:duration-500 hover:border-neutral-900 duration-500 hover:duration-500 underline underline-offset-2 hover:underline hover:underline-offset-4 origin-left hover:decoration-2 hover:text-neutral-300 relative bg-[#DAA35E] px-10 py-4 border text-left p-3 text-gray-50 text-base font-bold rounded-lg overflow-hidden bg-gradient-to-r from-sky-900 to-black hover:after:animate-pulse"
              >
                <svg
                  className="w-6 h-6 fill-neutral-50"
                  height="100"
                  preserveAspectRatio="xMidYMid meet"
                  viewBox="0 0 100 100"
                  width="100"
                  x="0"
                  xmlns="http://www.w3.org/2000/svg"
                  y="0"
                >
                  <path
                    className="svg-fill-primary"
                    d="M50,1.23A50,50,0,0,0,34.2,98.68c2.5.46,3.41-1.09,3.41-2.41s0-4.33-.07-8.5c-13.91,3-16.84-6.71-16.84-6.71-2.28-5.77-5.55-7.31-5.55-7.31-4.54-3.1.34-3,.34-3,5,.35,7.66,5.15,7.66,5.15C27.61,83.5,34.85,81.3,37.7,80a10.72,10.72,0,0,1,3.17-6.69C29.77,72.07,18.1,67.78,18.1,48.62A19.34,19.34,0,0,1,23.25,35.2c-.52-1.26-2.23-6.34.49-13.23,0,0,4.19-1.34,13.75,5.13a47.18,47.18,0,0,1,25,0C72.07,20.63,76.26,22,76.26,22c2.72,6.89,1,12,.49,13.23a19.28,19.28,0,0,1,5.14,13.42c0,19.21-11.69,23.44-22.83,24.67,1.8,1.55,3.4,4.6,3.4,9.26,0,6.69-.06,12.08-.06,13.72,0,1.34.9,2.89,3.44,2.4A50,50,0,0,0,50,1.23Z"
                  ></path>
                </svg>
                Github
              </button>

              <button
                onClick={() =>
                  window.open("mailto:ananzxzoxd@gmail.com", "_blank")
                }
                className="w-[300px] group mr-5 flex justify-center items-center gap-2 group-hover:before:duration-500 group-hover:after:duration-500 after:duration-500 hover:border-neutral-900 duration-500 hover:duration-500 underline underline-offset-2 hover:underline hover:underline-offset-4 origin-left hover:decoration-2 hover:text-neutral-300 relative bg-[#DAA35E] px-10 py-4 border text-left p-3 text-gray-50 text-base font-bold rounded-lg overflow-hidden bg-gradient-to-r from-blue-500 to-green-500 hover:after:animate-pulse"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-7"
                  fill="currentColor"
                  style={{ color: "white" }}
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M7 11v2.4h3.97c-.16 1.029-1.2 3.02-3.97 3.02-2.39 0-4.34-1.979-4.34-4.42 0-2.44 1.95-4.42 4.34-4.42 1.36 0 2.27.58 2.79 1.08l1.9-1.83c-1.22-1.14-2.8-1.83-4.69-1.83-3.87 0-7 3.13-7 7s3.13 7 7 7c4.04 0 6.721-2.84 6.721-6.84 0-.46-.051-.81-.111-1.16h-6.61zm0 0 17 2h-3v3h-2v-3h-3v-2h3v-3h2v3h3v2z"
                    fillRule="evenodd"
                    clipRule="evenodd"
                  />
                </svg>
                Gmail
              </button>
              <button className="w-[300px] group flex justify-center items-center gap-2 group-hover:before:duration-500 group-hover:after:duration-500 after:duration-500 hover:border-neutral-900 duration-500 hover:duration-500 underline underline-offset-2 hover:underline hover:underline-offset-4 origin-left hover:decoration-2 hover:text-neutral-300 relative bg-[#DAA35E] px-10 py-4 border text-left p-3 text-gray-50 text-base font-bold rounded-lg overflow-hidden bg-gradient-to-r from-blue-700 to-gray-700 hover:after:animate-pulse">
                <svg
                  className="h-7 w-7"
                  fill="currentColor"
                  style={{ color: "white" }}
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  fillRule="evenodd"
                  clipRule="evenodd"
                >
                  <path d="M19.54 0c1.356 0 2.46 1.104 2.46 2.472v21.528l-2.58-2.28-1.452-1.344-1.536-1.428.636 2.22h-13.608c-1.356 0-2.46-1.104-2.46-2.472v-16.224c0-1.368 1.104-2.472 2.46-2.472h16.08zm-4.632 15.672c2.652-.084 3.672-1.824 3.672-1.824 0-3.864-1.728-6.996-1.728-6.996-1.728-1.296-3.372-1.26-3.372-1.26l-.168.192c2.04.624 2.988 1.524 2.988 1.524-1.248-.684-2.472-1.02-3.612-1.152-.864-.096-1.692-.072-2.424.024l-.204.024c-.42.036-1.44.192-2.724.756-.444.204-.708.348-.708.348s.996-.948 3.156-1.572l-.12-.144s-1.644-.036-3.372 1.26c0 0-1.728 3.132-1.728 6.996 0 0 1.008 1.74 3.66 1.824 0 0 .444-.54.804-.996-1.524-.456-2.1-1.416-2.1-1.416l.336.204.048.036.047.027.014.006.047.027c.3.168.6.3.876.408.492.192 1.08.384 1.764.516.9.168 1.956.228 3.108.012.564-.096 1.14-.264 1.74-.516.42-.156.888-.384 1.38-.708 0 0-.6.984-2.172 1.428.36.456.792.972.792.972zm-5.58-5.604c-.684 0-1.224.6-1.224 1.332 0 .732.552 1.332 1.224 1.332.684 0 1.224-.6 1.224-1.332.012-.732-.54-1.332-1.224-1.332zm4.38 0c-.684 0-1.224.6-1.224 1.332 0 .732.552 1.332 1.224 1.332.684 0 1.224-.6 1.224-1.332 0-.732-.54-1.332-1.224-1.332z" />
                </svg>
                Discord
              </button>
            </div>
          )}
          {typeof window !== "undefined" && windowSize.width <= 1024 && (
            <div className="px-20 pt-20 max-sm:px-10 w-full flex justify-between flex-col h-full">
              <div className="flex flex-row w-full justify-center mb-8">
                <button
                  onClick={() =>
                    window.open("https://www.instagram.com/vyovyo___", "_blank")
                  }
                  className="w-[300px] mr-5 group flex justify-center items-center  gap-2 group-hover:before:duration-500 group-hover:after:duration-500 after:duration-500 hover:border-neutral-900 duration-500 hover:duration-500 underline underline-offset-2 hover:underline hover:underline-offset-4 origin-left hover:decoration-2   relative bg-[#DAA35E] max-sm:px-5 max-sm:py-5 px-10 py-4 border text-left p-3 text-gray-50 text-base font-bold rounded-lg overflow-hidden bg-gradient-to-r from-red-600 to-yellow-200 hover:after:animate-pulse"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-7 w-7 max-sm:w-5 max-sm:h-5    "
                    fill="currentColor"
                    style={{ color: "white" }}
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                  <p className="max-sm:text-sm">Instagram</p>
                </button>

                <button
                  onClick={() =>
                    window.open("https://github.com/Chulinuwu/", "_blank")
                  }
                  className="w-[300px] group  flex justify-center items-center gap-2 group-hover:before:duration-500 group-hover:after:duration-500 after:duration-500 hover:border-neutral-900 duration-500 hover:duration-500 underline underline-offset-2 hover:underline hover:underline-offset-4 origin-left hover:decoration-2   relative bg-[#DAA35E] px-10 py-4 max-sm:px-5  border text-left p-3 text-gray-50 text-base font-bold rounded-lg overflow-hidden bg-gradient-to-r from-sky-900 to-black hover:after:animate-pulse"
                >
                  <svg
                    className="w-7 h-7 fill-neutral-50 max-sm:w-5 max-sm:h-5"
                    height="100"
                    preserveAspectRatio="xMidYMid meet"
                    viewBox="0 0 100 100"
                    width="100"
                    x="0"
                    xmlns="http://www.w3.org/2000/svg"
                    y="0"
                  >
                    <path
                      className="svg-fill-primary"
                      d="M50,1.23A50,50,0,0,0,34.2,98.68c2.5.46,3.41-1.09,3.41-2.41s0-4.33-.07-8.5c-13.91,3-16.84-6.71-16.84-6.71-2.28-5.77-5.55-7.31-5.55-7.31-4.54-3.1.34-3,.34-3,5,.35,7.66,5.15,7.66,5.15C27.61,83.5,34.85,81.3,37.7,80a10.72,10.72,0,0,1,3.17-6.69C29.77,72.07,18.1,67.78,18.1,48.62A19.34,19.34,0,0,1,23.25,35.2c-.52-1.26-2.23-6.34.49-13.23,0,0,4.19-1.34,13.75,5.13a47.18,47.18,0,0,1,25,0C72.07,20.63,76.26,22,76.26,22c2.72,6.89,1,12,.49,13.23a19.28,19.28,0,0,1,5.14,13.42c0,19.21-11.69,23.44-22.83,24.67,1.8,1.55,3.4,4.6,3.4,9.26,0,6.69-.06,12.08-.06,13.72,0,1.34.9,2.89,3.44,2.4A50,50,0,0,0,50,1.23Z"
                    ></path>
                  </svg>
                  <p className="max-sm:text-sm">Github</p>
                </button>
              </div>

              <div className="flex flex-row w-full justify-center">
                <button
                  onClick={() =>
                    window.open("mailto:ananzxzoxd@gmail.com", "_blank")
                  }
                  className="w-[300px] group mr-5 flex justify-center items-center gap-2 group-hover:before:duration-500 group-hover:after:duration-500 after:duration-500 hover:border-neutral-900 duration-500 hover:duration-500 underline underline-offset-2 hover:underline hover:underline-offset-4 origin-left hover:decoration-2   relative bg-[#DAA35E] px-10 py-4 max-sm:px-5  border text-left p-3 text-gray-50 text-base font-bold rounded-lg overflow-hidden bg-gradient-to-r from-blue-500 to-green-500 hover:after:animate-pulse"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-7 w-7 "
                    fill="currentColor"
                    style={{ color: "white" }}
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M7 11v2.4h3.97c-.16 1.029-1.2 3.02-3.97 3.02-2.39 0-4.34-1.979-4.34-4.42 0-2.44 1.95-4.42 4.34-4.42 1.36 0 2.27.58 2.79 1.08l1.9-1.83c-1.22-1.14-2.8-1.83-4.69-1.83-3.87 0-7 3.13-7 7s3.13 7 7 7c4.04 0 6.721-2.84 6.721-6.84 0-.46-.051-.81-.111-1.16h-6.61zm0 0 17 2h-3v3h-2v-3h-3v-2h3v-3h2v3h3v2z"
                      fillRule="evenodd"
                      clipRule="evenodd"
                    />
                  </svg>
                  <p className="max-sm:text-sm">Gmail</p>
                </button>
                <button className="w-[300px] group flex justify-center items-center gap-2 group-hover:before:duration-500 group-hover:after:duration-500 after:duration-500 hover:border-neutral-900 duration-500 hover:duration-500 underline underline-offset-2 hover:underline hover:underline-offset-4 origin-left hover:decoration-2    relative bg-[#DAA35E] px-10 py-4 max-sm:px-5  border text-left p-3 text-gray-50 text-base font-bold rounded-lg overflow-hidden bg-gradient-to-r from-blue-700 to-gray-700 hover:after:animate-pulse">
                  <svg
                    className="h-7 w-7 max-sm:w-5 max-sm:h-5"
                    fill="currentColor"
                    style={{ color: "white" }}
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    fillRule="evenodd"
                    clipRule="evenodd"
                  >
                    <path d="M19.54 0c1.356 0 2.46 1.104 2.46 2.472v21.528l-2.58-2.28-1.452-1.344-1.536-1.428.636 2.22h-13.608c-1.356 0-2.46-1.104-2.46-2.472v-16.224c0-1.368 1.104-2.472 2.46-2.472h16.08zm-4.632 15.672c2.652-.084 3.672-1.824 3.672-1.824 0-3.864-1.728-6.996-1.728-6.996-1.728-1.296-3.372-1.26-3.372-1.26l-.168.192c2.04.624 2.988 1.524 2.988 1.524-1.248-.684-2.472-1.02-3.612-1.152-.864-.096-1.692-.072-2.424.024l-.204.024c-.42.036-1.44.192-2.724.756-.444.204-.708.348-.708.348s.996-.948 3.156-1.572l-.12-.144s-1.644-.036-3.372 1.26c0 0-1.728 3.132-1.728 6.996 0 0 1.008 1.74 3.66 1.824 0 0 .444-.54.804-.996-1.524-.456-2.1-1.416-2.1-1.416l.336.204.048.036.047.027.014.006.047.027c.3.168.6.3.876.408.492.192 1.08.384 1.764.516.9.168 1.956.228 3.108.012.564-.096 1.14-.264 1.74-.516.42-.156.888-.384 1.38-.708 0 0-.6.984-2.172 1.428.36.456.792.972.792.972zm-5.58-5.604c-.684 0-1.224.6-1.224 1.332 0 .732.552 1.332 1.224 1.332.684 0 1.224-.6 1.224-1.332.012-.732-.54-1.332-1.224-1.332zm4.38 0c-.684 0-1.224.6-1.224 1.332 0 .732.552 1.332 1.224 1.332.684 0 1.224-.6 1.224-1.332 0-.732-.54-1.332-1.224-1.332z" />
                  </svg>
                  <p className="max-sm:text-sm">Discord</p>
                </button>
              </div>
            </div>
          )}

          <div
            className="  w-full grid lg:grid-cols-2 max-lg:grid-row-2 "
            id="about"
          >
            <div className="w-full col-span-1 flex justify-center items-center p-20">
              <Image
                src={pic1}
                alt={"pekoraImg"}
                height={0}
                width={0}
                className="w-[100%] max-lg:w-full h-auto flex justify-center items-center rotate-3 rounded-2xl shadow-xl m-2"
              />
            </div>
            <div className=" w-full max-lg:pl-0 max-lg:pt-20 max-sm:pt-1 col-span-1">
              <div className="flex justify-center items-center w-full h-full flex-col p-20">
                <div className="text-4xl text-pinknew flex flex-row items-center">
                  <div className="w-5 h-1 bg-pinknew mr-5"></div>About Me
                </div>
                <div className="text-xl mt-10">
                  An-An is a current student in Computer Engineering who loves
                  coding, drawing, and designing. I’m interested in creating new
                  innovations and possesses strong leadership skills, along with
                  the ability to effectively solve problems on the spot.
                </div>
              </div>
            </div>
          </div>

          <div className="w-full px-20 h-full">
            <div className="grid grid-cols-2 max-md:grid-cols-1 w-full h-full">
              <div className="text-4xl text-pinknew  flex flex-row items-center col-span-2 justify-center">
                <div className="w-5 h-1 bg-pinknew mr-5"></div>About Me 2
              </div>
              <div className="w-full h-full pt-10 col-span-2 grid grid-cols-2 max-md:grid-cols-1 max-md:col-span-1">
                <div className="rounded-2xl w-full max-md:pb-10 h-auto rotate-[-5deg] max-md:p-2 p-20 col-span-1">
                  <Image
                    src={anan1}
                    alt={"pekoraImg"}
                    height={0}
                    width={0}
                    className="w-auto h-auto rounded-2xl object-contain animate__bounceInRight animated "
                  />
                </div>

                <div className="text-xl w-full pl-20 pt-10 h-full max-lg:w-full max-lg:pl-0 flex max-lg:text-lg max-md:text-base justify-center items-center">
                  <p>
                    From a young age, I demonstrated a natural aptitude for
                    technology and innovation. I would spend hours dismantling
                    gadgets to understand their inner workings and would often
                    sketch out new inventions in my notebooks. This curiosity
                    and creativity have only grown stronger over the years. I am
                    known for my exceptional leadership skills, often taking the
                    helm in group projects and leading my team to success. My
                    ability to remain calm under pressure and solve problems on
                    the spot has earned me the respect and admiration of my
                    peers and professors alike. From a young age, I demonstrated
                    a natural aptitude for technology and innovation. I would
                    spend hours dismantling gadgets to understand their inner
                    workings and would often sketch out new inventions in my
                    notebooks. This curiosity and creativity have only grown
                    stronger over the years. I am known for my exceptional
                    leadership skills, often taking the helm in group projects
                    and leading my team to success. My ability to remain calm
                    under pressure and solve problems on the spot has earned me
                    the respect and admiration of my peers and professors alike.
                  </p>
                </div>
                {/* <div className="w-full h-full bg-black">
                </div> */}
              </div>
            </div>
          </div>

          <div className="w-full h-auto grid grid-flow-row pt-10">
          <div className="text-4xl text-pinknew  flex flex-row items-center col-span-2 justify-center">
                <div className="w-5 h-1 bg-pinknew mr-5"></div>Experience
              </div>

              <div className="bg-rednew"></div>
          </div>

        </div>
      )}

      <div
        className=" bg-red-400 w-[50px] h-[50px] fixed right-4 bottom-4 shadow-2xl rounded-md hover:scale-110 transition-transform"
        onClick={scrollToTop}
      >
        <div className="flex justify-center items-center w-full h-full text-white">
          <ArrowUpwardIcon />
        </div>
      </div>
    </main>
  );
}

{
  /* <div className="w-[300px] h-[80px] flex-row flex justify-center items-center border-rednew border-2 rounded-lg  max-lg:w-[45%] mr-2 bg-white">
                <div className="w-full h-full flex justify-center items-center">
                  <div className="  flex items-center text-xl font-semibold text-rednew w-full justify-center space-x-5  text-left">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-7 w-7"
                      fill="currentColor"
                      style={{ color: "#FF3939" }}
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>

                    <div>GitHub</div>
                  </div>
                </div>
              </div> */
}
