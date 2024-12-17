"use client";
import Image from "next/image";
import "animate.css";
import Footer from "@/components/footer";
import peko from "@/../public/img/pekora.png";
import pic1 from "@/../public/img/pic1.png";
import pekomobile from "@/../public/img/pekoramobile.png";
import banner from "@/../public/img/banner.png";
import cloud from "@/../public/img/cloud.png";
import { useState, useEffect, useRef } from "react";

type Project = {
  name: string;
  description: string;
  explanation: string;
  role: string;
  link: string;
  image: string;
};
import "animate.css";
import { useRouter } from "next/navigation";
import { TypeAnimation } from "react-type-animation";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import Link from "next/link";

export default function ProjectsPage() {
  const [windowSize, setWindowSize] = useState<{
    width: number;
    height: number;
  }>({
    width: 0,
    height: 0,
  });
  const [pekoraImg, setpekoraImg] = useState(peko);
  const [isLoaded, setIsloaded] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [navbarHeight, setNavbarHeight] = useState("h-20");
  const [textSize, setTextSize] = useState("text-2xl");
  const [navbarColor, setNavbarColor] = useState("bg-opacity-0");
  const [textColor, setTextColor] = useState("text-white");
  const [isOpen, setIsOpen] = useState(false);

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

  useEffect(() => {
    setIsClient(true);
  }, []);

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

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const scrollToAbout = () => {
    const about = document.getElementById("about");
    if (about) {
      about.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleOpen = () => {
    if (isOpen) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  };

  

  const projects: Project[] = [
    {
      name: "Real-time AI Leaf Disease Detection",
      description: "A real-time system for detecting plant leaf diseases using deep learning.",
      explanation: "This project uses ESP32 for communication, Svelte for the frontend, and Python Flask for the backend. It integrates with Blynk Cloud, Google Sheets, and sends alerts through WhatsApp via Twilio and Gmail. The system includes two ESP32s that communicate with each other via Wi-Fi.",
      role: "Full-stack Developer",
      link: "https://github.com/Chulinuwu/Smart_Farm_Plant_Monitoring_System",
      image: "/img/project1.jpg",
    },
    {
      name: "QR Code Generator",
      description: "A web app that generates QR codes from entered links.",
      explanation: "Developed using Svelte, this app allows users to input a URL and generate a corresponding QR code.",
      role: "Full-stack Developer",
      link: "https://q-rcode-gen.vercel.app/",
      image: "/img/project2.jpg",
    },
    {
      name: "UniClub",
      description: "A platform for university students to search and manage their favorite clubs.",
      explanation: "This project allows students to find and manage clubs at their university. The platform also provides a back-office management system for clubs, making it easier for administrators to handle operations.",
      role: "Full-stack Developer",
      link: "https://uni-club-frontend-pey5.vercel.app/",
      image: "/img/project3.jpg",
    },
    {
      name: "ChulaMacaron",
      description: "A system for Chula students to report broken buildings.",
      explanation: "Developed using React Native, this system allows students to submit pictures and details about broken buildings on campus, enabling the relevant departments to take action.",
      role: "UX/UI and Frontend Developer",
      link: "https://github.com/xXpeira12/ChulaMacaron",
      image: "/img/project4.jpg",
    },
    {
      name: "Dog vs Monkey Game",
      description: "A space shooter game where you control a dog throwing bananas at monkeys.",
      explanation: "Developed using JavaFX, this game allows the player to control a dog and throw bananas at monkeys in a space-themed environment.",
      role: "Developer",
      link: "https://github.com/amphikapha/Dog-VS-Monkey",
      image: "/img/project5.jpg",
    },
    {
      name: "ChatwithGPT",
      description: "A web app for real-time communication with generative models.",
      explanation: "Built with FastAPI and Svelte, this app allows users to communicate with generative models in real time, with a base model acting as a Pekora VTuber.",
      role: "Full-stack Developer",
      link: "https://github.com/Chulinuwu/ChatwithGPT",
      image: "/img/project6.jpg",
    },
    {
      name: "DrinkMe",
      description: "A web app for managing a drinks shop with Google Sheets as a database.",
      explanation: "This app integrates with Google Sheets, allowing users to edit and inspect sheet data from a dashboard, making it easier for shop managers to track inventory and sales.",
      role: "Full-stack Developer",
      link: "https://github.com/Chulinuwu/drinkme",
      image: "/img/project7.jpg",
    },
  ];
  

  return (
    <main className="w-full flex flex-col min-h-screen bg-white">
        <nav
            className={`fixed top-0 w-[100%] shadow-md z-50 transition-all duration-500 bg-white ${navbarColor}  ${navbarHeight} border-gray-200 dark:bg-gray-900`}
          >
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 h-[100%]">
              <a
                href="/"
                className="flex items-center space-x-3 rtl:space-x-reverse "
              >
                <span
                  className={`font-semibold whitespace-nowrap ${textColor} text-4xl  max-md:text-xl   `}
                >
                  Chulinxz
                </span>
              </a>

                    <a
                      href="/projects"
                      className={`text-xl block py-2 px-3 ${textColor} bg-red-300 rounded bg-transparent hover:scale-105 transition-all md:p-0  max-md:text-sm font-semibold cursor-pointer aria-current="page`}
                    >
                      PROJECTS
                    </a>
            </div>
          </nav>
          <div className="h-[100vh] w-full bg-gradient-to-b from-ppnew to-pinknew flex flex-row max-md:flex-col max-md:h-auto">
            <div className="w-[60%]  h-full flex flex-col justify-center items-center max-md:justify-center max-lg:w-full max-lg:pl-0 max-lg:py-20 pt-[80px] pl-20 max-md:px-20 ">
              {typeof window !== "undefined" &&
                windowSize.width < 1024 &&
                isLoaded && (
                  <div className="h-full flex justify-center max-lg:w-[50%] max-lg:h-auto">
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
                    My Projects
                </div>
                <div className="text-white animate__bounceInRight animated text-3xl font-bold max-lg:text-lg max-lg:text-center ">
                  Made this website to introduce myself to you {"<3"}
                </div>
                <div className="text-white text-2xl font-bold animate__bounceInRight animated max-lg:text-base max-lg:text-center   mt-3">
                  Developer / Digital Artist / UXUI Designer
                </div>
              </div>
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
      <div className="w-full h-auto py-20 px-4 sm:px-6 lg:px-8 mt-16">
        <div className="text-2xl md:text-3xl lg:text-5xl text-pinknew flex flex-row items-center justify-center mb-12">
          My Projects
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
  <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden transition-all hover:shadow-xl flex flex-col h-full">
    <div className="relative h-68 overflow-hidden">
      <Image 
        src={project.image} 
        alt={project.name} 
        width={600} 
        height={400} 
        className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
      <h2 className="absolute bottom-4 left-4 text-2xl font-semibold text-white">{project.name}</h2>
    </div>
    <div className="p-6 flex-grow flex flex-col">
      <p className="text-gray-600 mb-4"><strong className="text-pinknew">Description:</strong> {project.description}</p>
      <p className="text-gray-600 mb-4"><strong className="text-pinknew">Explanation:</strong> {project.explanation}</p>
      <p className="text-gray-600 mb-4"><strong className="text-pinknew">Role:</strong> {project.role}</p>
      <div className="mt-auto">
        <Link 
          href={project.link} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="inline-block w-full bg-rednew text-white py-2 px-4 rounded hover:bg-red-600 transition-colors text-center"
        >
          View Project
        </Link>
      </div>
    </div>
  </div>
))}
        </div>
      </div>
      <div className="mt-12"></div>
          <div className="w-full mt-20 max-lg:mt-16 max-md:mt-12">
            <Image src={cloud} alt="banner" width={0} height={0} />
          </div>
      <Footer />
    </main>
  );
}

