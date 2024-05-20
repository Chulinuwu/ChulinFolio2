import Image from "next/image";
import circleImg from "../../public/img/circle.png";
import pekoraImg from "../../public/img/pekora.png";
import 'animate.css';


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Image className="absolute lg:w-[600px] lg:h-[600px] sm:w-[70px] sm:h-[200px]" src={circleImg} alt={"circle"} width={0} height={0}>
        
      </Image>
      <Image
        src={pekoraImg}
        alt="peko"
        width={0}
        height={0}
        className="absolute w-[718px] h-auto animate__animated animate__bounce animate__delay-1s"></Image>
    </main>
  );
}
/* Ellipse 1 */

// position: absolute;
// width: 600px;
// height: 600px;
// left: 420px;
// top: 212px;

// background: #FFFFFF;
// box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);


/* Ellipse 1 */

// position: absolute;
// width: 600px;
// height: 600px;
// left: 420px;
// top: 212px;

// background: #FFFFFF;
// box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);


/* Usada-Pekora_pr-img_05-718x1440 1 */

// position: absolute;
// width: 718px;
// height: 1440px;
// left: 353px;
// top: 159px;

// background: url(Usada-Pekora_pr-img_05-718x1440.png);
// filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

