import Image from "next/image";
import circleImg from "../../public/img/circle.png";
import pekoraImg from "../../public/img/pekora.png";
import 'animate.css';
import Footer from "@/components/footer";

export default function Home() {
  return (
    
    <main className="flex min-h-screen flex-col pl-[256px] pt-[80px]">
      <div className="items-center justify-between flex flex-col">
      <Image className="absolute w-[600px] h-[600px] flex" src={circleImg} alt={"circle"} width={0} height={0} />
      <Image
        src={pekoraImg}
        alt="peko"
        width={0}
        height={0}
        className="flex w-[718px] h-auto hover:animate__animated hover:animate-pulse z-30"
      />
      </div>
      <Footer />
    </main>
  );
}