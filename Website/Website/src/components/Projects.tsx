import Project_individual from "./Project_individual";

const Projects = () => {
  return (
    <section
      id="projects"
      className="max-w-screen flex items-center flex-col  gap-y-12 mt-8 w-[80%]"
    >
      <h2 className="text-4xl font-bold text-amber-50">Projects</h2>
      <div className=" w-full flex flex-col gap-y-6">
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
      </div>
    </section>
  );
};

export default Projects;
