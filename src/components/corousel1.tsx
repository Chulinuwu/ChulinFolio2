import { useRef, useState } from "react";
import pic1 from "../../public/img/6.png";
import pic2 from "../../public/img/7.png";
import pic3 from "../../public/img/8.png";
import pic4 from "../../public/img/9.png";
import pic5 from "../../public/img/11.png";
import pic6 from "../../public/img/15.png";
import pic7 from "../../public/img/17.png";
import pic8 from "../../public/img/18.png";
import pic9 from "../../public/img/5.png";

import Image from "next/image";
export default function Carousel() {
  const image = [pic1, pic2, pic3, pic4, pic5, pic6, pic7, pic8, pic9];
  let searchValue = "";
  let dropdownValue = "All";
  let currentIndex = 0;

  function handleLeftClick() {
    currentIndex = (currentIndex - 1) % image.length;
    if (currentIndex == -1) {
      currentIndex = image.length - 1;
    }
    scrollToImage();
  }

  function handleRightClick() {
    currentIndex = (currentIndex + 1) % image.length;
    scrollToImage();
  }

  function scrollToImage() {
    const container = document.querySelector(".image-container");
    if (container) {
      const imageWidth = container.clientWidth;
      container.scrollTo({
        left: imageWidth * currentIndex,
        behavior: "smooth",
      });
    }
  }
  return (
    <div className="relative flex  w-full ">
      <button
        className="absolute left-5 top-1/2 transform -translate-y-1/2 z-10 cursor-pointe transition-all"
        onClick={handleLeftClick}
      >
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="black"
          strokeWidth="2"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <div className="relative w-full h-[650px] rounded-lg flex overflow-hidden image-container snap-x">
        {image.map((img, index) => (
          <div key={index} className="w-full h-full flex-shrink-0 snap-center">
            <Image src={img} alt="pic" className="w-full h-full object-contain" />
          </div>
        ))}
      </div>
      <button
        className="absolute right-5 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer transition-all"
        onClick={handleRightClick}
      >
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
}
