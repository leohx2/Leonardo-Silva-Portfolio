import { motion } from "motion/react";
import SvgSelector from "../assets/SvgSelector";
import usePortView from "../customHooks/usePortView";
import "./SocialMedias.css";

interface SocialMediasProps {
  cssClass: string;
  hasLine: boolean;
}

const SocialMedias = ({ cssClass, hasLine }: SocialMediasProps) => {
  const portView = usePortView();

  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ amount: 0.1, once: true }}
      transition={{ duration: 1, type: "spring" }}
      className={`${cssClass} flex `}
    >
      {hasLine &&
        (portView === "small" ? (
          <hr className=" bg-zinc-300 h-[2px] basis-1/6 rounded-sm" />
        ) : (
          <hr className="absolute bg-zinc-300 h-[190px] w-[2px] top-[-205px] left-[14px] rounded-sm" />
        ))}

      <a
        href="https://github.com/leohx2"
        target="_blank"
        className=" grayscale-75 github"
      >
        <SvgSelector
          svgName="github"
          cssClass={`w-[28px] h-[28px] `}
          color="fill-zinc-100 githubBg"
        />
      </a>
      <a
        href="https://www.linkedin.com/in/leonardorosendosilva/"
        target="_blank"
        className="linkedin"
      >
        <SvgSelector
          svgName="linkedin"
          cssClass={`w-[30px] h-[30px]`}
          color="fill-zinc-100 linkedinBg"
          colorInside="fill-zinc-800 linkedinBgInside"
        />
      </a>
      <a
        href="https://www.youtube.com/@leohx2"
        target="_blank"
        className="youtube"
      >
        <SvgSelector
          svgName="youtube"
          cssClass={`w-[30px] h-[30px]`}
          color="fill-zinc-100 youtubeBg"
          colorInside="fill-zinc-800 youtubeBgInside"
        />
      </a>
      <a href="mailto:leobgse@gmail.com" target="_blank">
        <SvgSelector
          svgName="gmail"
          cssClass={`w-[28px] h-[28px] rounded-full`}
          color="fill-zinc-100"
          colorInside="fill-zinc-800"
        />
      </a>
      {hasLine && portView === "small" && (
        <hr className=" bg-zinc-300 h-[2px] basis-1/6 rounded-sm" />
      )}
    </motion.div>
  );
};

export default SocialMedias;
