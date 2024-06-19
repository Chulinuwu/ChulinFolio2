import Image from "next/image";
import circleImg from "../../public/img/circle.png";
import pekoraImg from "../../public/img/pekora.png";
import 'animate.css';
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <main className="w-full flex flex-col">
      <Navbar />
      <div className="h-[90vh] w-full bg-gradient-to-b from-ppnew to-pinknew flex flex-row">
        <div className="w-[60%] h-full flex flex-col mt-[80px] ml-20">
          <div className="text-white text-6xl font-bold mt-[35vh] mb-5">
          Hi ! , I’m An-An
          </div>
          <div className="text-white text-3xl font-bold">
          Made this website to introduce myself to you {'<3'}
          </div> 
          <div className="text-white text-2xl font-bold">
          Developer / Digital Artist / UXUI Designer
          </div> 
        </div>
        <Image src={pekoraImg} alt={"pekoraImg"} height={0} width={0} className="w-auto h-auto mt-[80px]"/>
      </div>

      <div className="w-full h-[100vh]">
        
      </div>
    </main>
  );
}