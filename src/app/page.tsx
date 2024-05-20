import Image from "next/image";
import styles from "../styles/Home.module.css";
import circleImg from "../../public/img/circle.png";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Image className="absolute w-[600px] h-[600px] " src={circleImg} alt={"circle"} width={0} height={0}>
        
      </Image>
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
