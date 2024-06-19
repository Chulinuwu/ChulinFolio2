import Image from "next/image";
import circleImg from "../../public/img/circle.png";
import pekoraImg from "../../public/img/pekora.png";
import "animate.css";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import ig from "../../public/img/instagram.png";
import github from "../../public/img/github.png";
import gmail from "../../public/img/gmail.png";
import discord from "../../public/img/discord.png";
import pic1 from "../../public/img/pic1.png";

export default function Home() {
  return (
    <main className="w-full flex flex-col">
      <Navbar />
      <div className="w-full  h-full">
      <div className="h-[100vh] w-full bg-gradient-to-b from-ppnew to-pinknew flex flex-row max-md:flex-col">
        <div className="w-[60%] h-full flex flex-col mt-[80px] ml-20">
          <div className="text-white text-6xl font-bold mt-[35vh] max-lg:mt-[10vh] mb-5">
            Hi ! , I’m An-An
          </div>
          <div className="text-white text-3xl font-bold">
            Made this website to introduce myself to you {"<3"}
          </div>
          <div className="text-white text-2xl font-bold">
            Developer / Digital Artist / UXUI Designer
          </div>
          <div className="w-full h-auto flex flex-row my-10">
            <Image
              src={ig}
              alt={"igImg"}
              height={0}
              width={0}
              className="w-auto h-auto mr-10 ml-2   hover:scale-[1.2] transition-all"
            />

            <Image
              src={github}
              alt={"igImg"}
              height={0}
              width={0}
              className="w-auto h-auto  mr-10 hover:scale-[1.2] transition-all "
            />
            <Image
              src={gmail}
              alt={"igImg"}
              height={0}
              width={0}
              className="w-auto h-auto mr-10  hover:scale-[1.2] transition-all"
            />
            <Image
              src={discord}
              alt={"igImg"}
              height={0}
              width={0}
              className="w-auto h-auto  hover:scale-[1.2] transition-all"
            />
          </div>
        </div>

        <Image
          src={pekoraImg}
          alt={"pekoraImg"}
          height={0}
          width={0}
          className="w-auto h-auto  mt-[80px] max-lg:w-[500px] "
        />
      </div>

      <div className=" m-20 flex flex-row max-lg:flex-col">
        <Image
          src={pic1}
          alt={"pekoraImg"}
          height={0}
          width={0}
          className="w-[100%] max-lg:w-full h-auto"
        />
        <div className="h-[100vh] w-full  ml-20 max-lg:ml-0 max-lg:mt-20 flex flex-col">
          <div className="flex justify-center items-center w-full h-full flex-col">
            <div className="text-4xl text-pinknew flex flex-row items-center">
              <div className="w-5 h-1 bg-pinknew mr-5"></div>About Me
            </div>
            <div className="text-2xl mt-10">
              An-An is a current student in Computer Engineering who loves
              coding, drawing, and designing. I’m interested in creating new
              innovations and possesses strong leadership skills, along with the
              ability to effectively solve problems on the spot.
            </div>
          </div>
        </div>
      </div>

      <div className="w-full mt-10 p-20 h-[700px]">
        <div className="flex w-full h-full flex-col">
          <div className="text-4xl text-pinknew flex flex-row items-center justify-center">
            <div className="w-5 h-1 bg-pinknew mr-5"></div>About Me 2
          </div>
          <div className="w-full h-full mt-20 flex flex-row">
            <div className="bg-gray-500 w-[50%] h-full "></div>
            <div className="text-2xl mt-10 w-[50%] pl-20 h-full flex ">
              An-An is a current student in Computer Engineering who loves
              coding, drawing, and designing. I’m interested in creating new
              innovations and possesses strong leadership skills, along with the
              ability to effectively solve problems on the spot.
            </div>
          </div>
        </div>
      </div>

      <div className="w-full  p-20  h-[700px]">
        <div className="flex w-full h-full flex-col">
          <div className="w-full h-full  flex flex-row">
            <div className="bg-gray-500 w-[50%] h-full "></div>
            <div className="text-2xl mt-10 w-[50%] pl-20 h-full flex ">
              An-An is a current student in Computer Engineering who loves
              coding, drawing, and designing. I’m interested in creating new
              innovations and possesses strong leadership skills, along with the
              ability to effectively solve problems on the spot.
            </div>
          </div>
        </div>
      </div>
      </div>
    </main>
  );
}
