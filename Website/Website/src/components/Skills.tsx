import Badges from "./Badges";

const Skills = () => {
  return (
    <section
      id="skills"
      className="flex flex-col gap-y-12 items-center w-full bg-main_2 pb-18 pt-12"
    >
      <h2 className="text-amber-50 font-bold text-4xl">My skills</h2>
      <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-x-8 gap-y-8">
        <Badges skill="git" text="Git" />
        <Badges skill="html" text="HTML5" />
        <Badges skill="js" text="JavaScript" />
        <Badges skill="css" text="CSS" />
        <Badges skill="ts" text="TypeScript" />
        <Badges skill="react" text="React" />
        <Badges skill="tailwind" text="Tailwindcss" />
        <Badges skill="c" text="C" />
      </div>
    </section>
  );
};

export default Skills;
