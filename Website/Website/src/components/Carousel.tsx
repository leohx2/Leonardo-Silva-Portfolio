import "../App.css";
import { useState, useEffect } from "react";
import SvgSelector from "../assets/SvgSelector";

export interface ImagesProp {
  address: string;
  alt: string;
}

interface CarouselProps {
  /**
   * @props string[] - pass the images addresses in order to display, first to last
   */
  images_info: ImagesProp[];
  /**
   * @props string - pass the css class to define the width and height
   */
  cssClass?: string;

  unique_ID: string;
}

interface changeImageProps {
  side: "left" | "right";
}

const Carousel = ({ images_info, cssClass, unique_ID }: CarouselProps) => {
  const size = images_info.length;
  const [currentImage, setCurrentImage] = useState(1);
  const [previousImage, setPreviousImage] = useState(size);
  const [nextImage, setNextImage] = useState(2);
  const [side, setSide] = useState("left");

  useEffect(() => {
    let i = 1;
    let img, btn_img;

    if (size > 2) {
      for (i; i <= size; i++) {
        img = document.getElementById(`${unique_ID}_${i}`);
        btn_img = document.getElementById(`${unique_ID}_btn_${i}`);
        if (btn_img) {
          if (i === currentImage) btn_img.classList.add("activeDot");
          else if (btn_img.classList.contains("activeDot"))
            btn_img.classList.remove("activeDot");
        }
        if (i === previousImage && img) {
          img.style.left = "-110%";
          img.style.opacity = side === "right" ? "1" : "0";
        } else if (i === currentImage && img) {
          img.style.left = "0%";
          img.style.opacity = "1";
        } else if (i === nextImage && img) {
          img.style.left = "110%";
          img.style.opacity = side === "left" ? "1" : "0";
        } else if (img) {
          img.style.left = "110%";
          img.style.opacity = "0";
        }
      }
    } else {
      if (currentImage == 2) {
        img = document.getElementById(`${unique_ID}_1`);
        if (img) img.style.left = "-110%";

        img = document.getElementById(`${unique_ID}_2`);
        if (img) img.style.left = "0%";

        btn_img = document.getElementById(`${unique_ID}_btn_2`);
        if (btn_img) btn_img.classList.add("activeDot");

        btn_img = document.getElementById(`${unique_ID}_btn_1`);
        if (btn_img) btn_img.classList.remove("activeDot");
      } else {
        img = document.getElementById(`${unique_ID}_2`);
        if (img) img.style.left = "110%";

        img = document.getElementById(`${unique_ID}_1`);
        if (img) img.style.left = "0%";

        btn_img = document.getElementById(`${unique_ID}_btn_1`);
        if (btn_img) btn_img.classList.add("activeDot");

        btn_img = document.getElementById(`${unique_ID}_btn_2`);
        if (btn_img) btn_img.classList.remove("activeDot");
      }
    }
  }, [currentImage]);

  const changeImage = ({ side }: changeImageProps) => {
    if (side === "left") {
      setPreviousImage(previousImage === 1 ? size : previousImage - 1);
      setNextImage(nextImage === 1 ? size : nextImage - 1);
      setCurrentImage(currentImage === 1 ? size : currentImage - 1);
      setSide("left");
    } else {
      setPreviousImage(previousImage === size ? 1 : previousImage + 1);
      setNextImage(nextImage === size ? 1 : nextImage + 1);
      setCurrentImage(currentImage === size ? 1 : currentImage + 1);
      setSide("right");
    }
  };
  return (
    <div className={`flex items-center ${cssClass} relative`}>
      <button
        className=" absolute z-50 left-2.5 w-[35px] h-full cursor-pointer opacity-40 hover:opacity-100 transition-all duration-300 ease-in-out"
        onClick={() => {
          changeImage({ side: "left" });
        }}
        disabled={size < 3 && currentImage === 1}
      >
        <div className="w-[35px] h-[35px] bg-main_2 rounded-full flex items-center">
          <SvgSelector
            svgName="arrowleft"
            cssClass="w-[20px] h-[20px] ml-[6px]"
          />
        </div>
      </button>
      <div className="flex items-center h-full w-full rounded-sm overflow-hidden relative">
        {images_info.map((image, index) => (
          <div
            className="transition-[left] duration-300 ease-in-out h-full flex items-center justify-center w-full absolute"
            // the style will put the last element on the first element's left and the rest on the right
            key={index * unique_ID.length}
            id={`${unique_ID}_${index + 1}`}
          >
            <img
              src={image.address}
              alt={image.alt}
              className="object-contain rounded-sm max-h-full max-w-full"
            />
          </div>
        ))}
      </div>
      <button
        className="z-30 absolute right-2.5 w-[35px] h-full rounded-full cursor-pointer opacity-40 hover:opacity-100 transition-all duration-300 ease-in-out"
        onClick={() => {
          changeImage({ side: "right" });
        }}
        disabled={size < 3 && currentImage === size}
      >
        <div className="w-[35px] h-[35px] bg-main_2 rounded-full flex items-center">
          <SvgSelector
            svgName="arrowright"
            cssClass="w-[20px] h-[20px] ml-[8px]"
          />
        </div>
      </button>

      <div className="grow absolute w-[100%] pl-[5px] pr-[5px] h-[5px] top-[102%] flex justify-center items-center gap-x-0.5">
        {images_info.map((_, index) => (
          <span
            key={index}
            id={`${unique_ID}_btn_${index + 1}`}
            className="flex-1 h-[3px] w-auto bg-amber-50 transition-all duration-300 ease-in-out"
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
