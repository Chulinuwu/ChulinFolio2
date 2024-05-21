import Image from "next/image";
import circleImg from "../../public/img/circle.png";
import pekoraImg from "../../public/img/pekora.png";
import 'animate.css';
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <div className="items-center justify-between flex flex-col pt-24 px-24">
      <Image className="absolute w-[600px] h-[600px] flex" src={circleImg} alt={"circle"} width={0} height={0} />
      <Image
        src={pekoraImg}
        alt="peko"
        width={0}
        height={0}
        className="flex w-[718px] h-auto animate__animated animate__bounce animate__delay-1s"
      />
      </div>
      <Footer />
    </main>
  );
}