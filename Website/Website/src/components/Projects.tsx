import { motion } from "motion/react";
import Project_individual from "./Project_individual";

const Projects = () => {
  return (
    <motion.section
      viewport={{ amount: 0.8 }}
      onViewportEnter={() => {
        // adding the underline on the correct nav item
        document.querySelector(".active")?.classList.remove("active");
        document.getElementById("projectsLink")?.classList.add("active");
      }}
      id="projects"
      className="max-w-screen flex items-center flex-col  gap-y-12 mt-8 w-[80%] relative z-1"
    >
      <motion.h2
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ amount: 0.1 }}
        transition={{ duration: 1, type: "spring" }}
        className="text-4xl font-bold text-amber-50"
      >
        Projects
      </motion.h2>
      <motion.div className=" w-full flex flex-col gap-y-6">
        <Project_individual
          title="Atelier da Essência"
          id={1}
          stack={["Git", "HTML", "TypeScript", "Tailwind", "React"]}
          link={["https://atelierdaessencia.com/"]}
        />
        <Project_individual
          title="Aviator"
          id={2}
          stack={["Git", "HTML", "TypeScript", "Tailwind", "Preact"]}
          link={["https://www.aviator.com.br/"]}
        />
        <Project_individual
          title="CS50 Web"
          id={3}
          stack={["Git", "HTML", "CSS", "JavaScript", "Django"]}
          link={["https://github.com/leohx2/CS50s_Web/tree/main/FinalProject"]}
        />
        <Project_individual
          title="Network"
          id={4}
          stack={["Git", "HTML", "CSS", "JavaScript", "Django"]}
          link={["https://github.com/leohx2/CS50s_Web/tree/main/Network"]}
        />
      </motion.div>
    </motion.section>
  );
};

export default Projects;
