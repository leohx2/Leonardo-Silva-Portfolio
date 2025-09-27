import { motion } from "motion/react";
import Badges from "./Badges";
import usePortView from "../customHooks/usePortView";

const Skills = () => {
  const portView = usePortView();
  return (
    <motion.section
      viewport={{ amount: portView == "small" ? 0.9 : 0.6 }}
      onViewportEnter={() => {
        document.querySelector(".active")?.classList.remove("active");
        document.getElementById("skillsLink")?.classList.add("active");
      }}
      id="skills"
      className="flex flex-col gap-y-12 items-center w-full pb-18 pt-12 relative z-2"
    >
      <motion.hr
        className="w-[90%] h-0.5 bg-badge"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ amount: 0.1, once: true }}
        transition={{ duration: 1, type: "spring" }}
      />
      <motion.h2
        className="text-amber-50 font-bold text-4xl "
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ amount: 0.1, once: true }}
        transition={{ duration: 1, type: "spring" }}
      >
        My skills
      </motion.h2>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ amount: 0.1, once: true }}
        transition={{ duration: 1, type: "spring" }}
        className="sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-8 max-sm:flex max-sm:relative max-sm:overflow-scroll max-sm:w-[90%] max-sm:p-4"
      >
        <Badges skill="git" text="Git" />
        <Badges skill="html" text="HTML5" />
        <Badges skill="js" text="JavaScript" />
        <Badges skill="css" text="CSS" />
        <Badges skill="ts" text="TypeScript" />
        <Badges skill="react" text="React" />
        <Badges skill="tailwind" text="Tailwindcss" />
        <Badges skill="c" text="C" />
      </motion.div>
    </motion.section>
  );
};

export default Skills;
