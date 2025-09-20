import Project_individual from "./Project_individual";

const Projects = () => {
  return (
    <section
      id="projects"
      className="max-w-screen flex items-center flex-col  gap-y-12 mt-8 w-[80%]"
    >
      <h2 className="text-4xl font-bold text-amber-50">Projects</h2>
      <div className=" w-full ">
        <Project_individual
          title="Atelier da Essência"
          id={1}
          stack={["Git", "HTML", "TypeScript", "Tailwind", "React"]}
          link="https://atelierdaessencia.com/"
        />
      </div>
    </section>
  );
};

export default Projects;
