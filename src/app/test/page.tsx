"use client";
import Image from "next/image";
import "animate.css";
import Footer from "@/components/footer";
import peko from "../../../public/img/pekora.png";
import pic1 from "../../../public/img/pic1.png";
import pekomobile from "../../../public/img/pekoramobile.png";
import uxui from "../../../public/uxui.svg";
import web from "../../../public/website.svg";
import mobile from "../../../public/mobile.svg";
import Drawing from "../../../public/Drawing.svg";
import data from "../../../public/data.svg";
import { useState, useEffect, useRef } from "react";
import "animate.css";
import { useRouter } from "next/navigation";
import { TypeAnimation } from "react-type-animation";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import Carousel from "../../components/corousel1";
import Link from "next/link";
import useIntersectionObserver from "../../components/hooks/useIntersectionObserver";

export default function Home() {
  const elementsRefBL = useIntersectionObserver("animate__animated animate__bounceInLeft");
  const elementsRefBR = useIntersectionObserver("animate__animated animate__bounceInRight");
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

  const experiences = [
    {
      year: "Apr 2021",
      role: "POSN 1-2 Computer Student",
      company: "Burapha University",
      description:
        "Begin to learn competitive programming , data structure and algorithm",
    },
    {
      year: "Aug 2023 - now",
      role: "CEDT Student",
      company:
        "Computer Engineering and Digital Technology , Chulalongkorn University",
      description: "Begin academic life",
    },
    {
      year: "May 2024 - July",
      role: "BBL Internship as UX/UI Designer and Frontend Developer",
      company: "Bangkok Bank Public Company Limited (BBL)",
      description:
        "iFunds project developed by Nextjs + Java Quarkus + PostgreSQL",
    },
    {
      year: "Sep 2024 - now",
      role: "Information System Development (ISD) Frontend Developer",
      company:
        "Computer Engineering and Digital Technology , Chulalongkorn University",
      description: "SUCU Project",
    },
    {
      year: "Sep 2024 - now",
      role: "Google Developer Student Clubs (GDSC) Core team (Graphic) ",
      company:
        "Computer Engineering and Digital Technology , Chulalongkorn University",
      description: "Designing and creating graphic for GDSC",
    },
  ];

  useEffect(() => {
    setIsClient(true);
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

  const [isScrolled, setIsScrolled] = useState(false);
  const [navbarHeight, setNavbarHeight] = useState("h-20");
  const [textSize, setTextSize] = useState("text-2xl");
  const [navbarColor, setNavbarColor] = useState("bg-opacity-0");
  const [textColor, setTextColor] = useState("text-white");
  const [isOpen, setIsOpen] = useState(false);

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

  const handleOpen = () => {
    if (isOpen) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  };

  return (
    <main className="w-full flex flex-col">
      {isClient && (
        <div className="w-full  h-full">
          <div       
            className="  w-full grid lg:grid-cols-2 max-lg:grid-row-2 "
            id="about"
          >
            <div  ref={(el) => {
          if (el) elementsRefBL.current[0] = el;
        }}  className="w-full col-span-1 flex justify-center items-center p-20 max-lg:p-16 max-md:p-12 ">
              <Image
                src={pic1}
                alt={"pekoraImg"}
                height={0}
                width={0}
                className="w-[100%] max-lg:w-full h-auto flex justify-center items-center hover:rotate-1 transition-all rotate-3 rounded-2xl shadow-xl m-2"
              />
            </div>

            {/* Second Div (Text) */}
            <div  ref={(el) => {
          if (el) elementsRefBR.current[0] = el;
        }}  className="w-full max-lg:pl-0 max-lg:pt-20 max-sm:pt-1 col-span-1 ">
              <div className="flex justify-center items-center w-full h-full flex-col p-20 max-lg:px-16 max-md:px-12 max-lg:pt-0">
                <div className="text-4xl text-pinknew flex flex-row items-center">
                  <div className="w-5 h-1 bg-pinknew mr-5"></div>
                  About Me
                </div>
                <div className="text-xl mt-10">
                  An-An is a current student in Computer Engineering who loves
                  coding, drawing, and designing. I’m interested in creating new
                  innovations and possess strong leadership skills, along with
                  the ability to effectively solve problems on the spot.
                </div>
              </div>
            </div>
          </div>

          <div className="py-10 bg-rednew text-gray-300 h-auto flex justify-center mb-10">
            <div className="max-w-4xl m-10 flex flex-col  px-4 p-12">
              <h2 className="text-3xl font-bold mb-8 text-white">Experience</h2>
              <div className="relative border-l border-gray-700">
                {experiences.map((experience, index) => (
                  <div key={index} className="mb-10 ml-6">
                    <span className="absolute w-6 h-6 bg-white rounded-full -left-3"></span>
                    <p className="text-sm font-medium text-white">
                      {experience.year}
                    </p>
                    <h3 className="text-xl font-semibold text-white">
                      {experience.role}
                    </h3>
                    <p className="italic text-white">{experience.company}</p>
                    <p className="mt-2 text-white">{experience.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="w-full h-auto grid grid-flow-row py-10 max-lg:p-16 max-md:p-12 ">
            <div className="text-4xl text-pinknew  flex flex-row items-center col-span-2 mb-10 justify-center">
              <div className="w-5 h-1 bg-pinknew mr-5"></div>What I'm Doing
            </div>
            <div className="flex flex-wrap gap-6 p-4 justify-center">
              <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 hover:scale-105 transition-all bg-white hover:bg-slate-200 shadow-lg rounded-lg p-6 text-center">
                <div className="flex justify-center mb-4 ">
                  <Image src={uxui} alt="uxui" width={50} height={50} />
                </div>
                <div className="text-xl font-semibold mb-4">
                  Web Design (UX/UI)
                </div>
                <p className="text-gray-600 text-sm">
                  UX/UI designer for various projects using{" "}
                  <span className="text-rednew">Figma</span>
                </p>
              </div>

              <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 hover:scale-105 transition-all bg-white shadow-lg hover:bg-slate-200 rounded-lg p-6 text-center">
                <div className="flex justify-center mb-4">
                  <Image src={web} alt="web" width={50} height={50} />
                </div>
                <div className="text-xl font-semibold mb-4">
                  Web Development
                </div>
                <p className="text-gray-600 text-sm">
                  <span className="text-rednew">Full-Stack Developer </span>for
                  some spanrojects. But mostly is{" "}
                  <span className="text-rednew">Front-end Developer </span>{" "}
                  include UX/UI designer. proficient in Typescript
                </p>
              </div>

              <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 hover:scale-105 transition-all bg-white shadow-lg rounded-lg p-6 hover:bg-slate-200 text-center">
                <div className="flex justify-center mb-4">
                  <Image src={mobile} alt="mobile" width={50} height={50} />
                </div>
                <div className="text-xl font-semibold mb-4">Mobile Apps</div>
                <p className="text-gray-600 text-sm">
                  Used to do some apps with{" "}
                  <span className="text-rednew">React-Native + expo</span>, also
                  some <span className="text-rednew">Flutter</span> apps
                </p>
              </div>

              <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 hover:scale-105 transition-all bg-white shadow-lg rounded-lg p-6 hover:bg-slate-200 text-center">
                <div className="flex justify-center mb-4">
                  <Image src={Drawing} alt="uxui" width={50} height={50} />
                </div>
                <div className="text-xl font-semibold mb-4">Drawing</div>
                <p className="text-gray-600">
                  Drawing is my hobby, also recieve commission. you can check my
                  art in other section in{" "}
                  <span className="text-rednew">Navigation bar</span>
                </p>
              </div>

              <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 hover:scale-105 transition-all bg-white shadow-lg rounded-lg p-6 hover:bg-slate-200 text-center">
                <div className="flex justify-center mb-4">
                  <Image src={data} alt="uxui" width={50} height={50} />
                </div>
                <div className="text-xl font-semibold mb-4">Data Analyst</div>
                <p className="text-gray-600">
                  Just <span className="text-rednew">Beginner</span> with ML and
                  AI, know some basic , techniques for data analysis.
                </p>
              </div>
            </div>

            <div className="bg-rednew"></div>
          </div>

          <div className="mt-12"></div>
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
