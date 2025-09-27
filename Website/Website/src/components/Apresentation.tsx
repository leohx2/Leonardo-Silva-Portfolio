import SvgSelector from "../assets/SvgSelector";
import "../App.css";
import { motion } from "motion/react";
import { useRef } from "react";

const Apresentation = () => {
  const spanEl = useRef<HTMLSpanElement | null>(null);
  return (
    <motion.section
      viewport={{ amount: 0.8 }}
      onViewportEnter={() => {
        // adding the underline on the correct nav item
        document.querySelector(".active")?.classList.remove("active");
        document.getElementById("apresentationLink")?.classList.add("active");

        // adding the underline on my name
        if (spanEl) {
          spanEl.current?.style.setProperty(
            "--myName-after-box",
            "0px 0px 5px #32dfb1"
          );
          spanEl.current?.style.setProperty("--myName-after-w", "100%");
        }
      }}
      onViewportLeave={() => {
        if (spanEl) {
          spanEl.current?.style.setProperty("--myName-after-box", "unset");
          spanEl.current?.style.setProperty("--myName-after-w", "0%");
        }
      }}
      id="apresentation"
      className="min-h-screen w-100% flex flex-col-reverse justify-center items-center lg:flex-row sm:pb-0 pb-14 relative z-10"
    >
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ amount: 0.1, once: true }}
        transition={{ duration: 1, type: "spring" }}
        className="lg:h-[400px] h-[150px] flex justify-center lg:items-start items-center flex-col text-amber-50 relative "
      >
        <p className="text-amber-50 font-bold text-4xl flex space-grotesk">
          Hi, I'm&nbsp;
          <span ref={spanEl} className="myName transition-all duration-500">
            Leonardo!
          </span>
        </p>
        <p className=" text-amber-50 font-bold text-xl lg:tracking-[0.4em] tracking-[0.3em] space-grotesk">
          Front-end Developer
        </p>
        <div className="text-amber-50  w-[310px] sm:w-[340px] flex flex-col lg:mb-0 mb-14 absolute lg:top-[270px] top-[130px] lg:text-start text-center">
          <p className="tracking-wider lg:text-lg">
            I'm a 25 years old developer based in Portugal, focused on creating
            modern, user-friendly, practical and beautiful web apps. Feel free
            to check out my projects below.
          </p>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ amount: 0.1, once: true }}
        transition={{ duration: 1, type: "spring" }}
        className="overflow-hidden lg:w-[400px] w-[300px] rounded-[30%] relative"
      >
        <div className="absolute lg:h-[400px] lg:w-[400px]">
          <SvgSelector
            svgName="bubble"
            cssClass="lg:translate-[210px] lg:scale-100 translate-[150px] scale-80"
          />
        </div>
        <img
          src="/src/assets/myPhoto.png"
          alt="Leonardo Silva picture"
          className=" grayscale-60 lg:h-[400px] h-[300px]"
        />
      </motion.div>
    </motion.section>
  );
};

export default Apresentation;
