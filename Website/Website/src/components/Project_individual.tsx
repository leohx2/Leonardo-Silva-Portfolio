import { useRef } from "react";
import SvgSelector from "../assets/SvgSelector";
import AtelierDaEssencia from "./projects/AtelierDaEssencia";

interface ProjectProps {
  title: string;
  id: number;
  stack: string[];
  /**
   * @props {string} - link for the website or github link
   */
  link?: string;
}

const Project_individual = ({ title, id, stack, link }: ProjectProps) => {
  const svgDiv = useRef<HTMLDivElement | null>(null);
  const projectDiv = useRef<HTMLDivElement | null>(null);

  const handleClickProject = () => {
    svgDiv.current?.classList.toggle("-rotate-180");
    svgDiv.current?.classList.toggle("-translate-x-1.5");
    projectDiv.current?.classList.toggle("h-0");
  };

  const projectToRender = (id: number) => {
    switch (id) {
      case 1:
        return <AtelierDaEssencia />;
    }
  };

  return (
    <div className=" p-0.5 flex flex-col">
      <button
        className="flex gap-x-2 items-center cursor-pointer"
        onClick={handleClickProject}
      >
        <h3 className="text-2xl text-amber-50 font-bold flex">{title}</h3>
        <div ref={svgDiv} className="translate-y-1">
          <SvgSelector
            svgName="arrowdown"
            cssClass="w-[24px] h-[24px]"
            color="fill-amber-50"
          />
        </div>
      </button>
      <hr className="w-full border-neutral-500" />
      <div
        ref={projectDiv}
        className="h-0 overflow-hidden transition-all duration-300 ease-in-out flex flex-col gap-y-2"
      >
        <div className="flex gap-x-2 pt-2 ">
          <p className="text-amber-50 font-bold text-sm underline">Stack: </p>
          <div className="flex gap-x-2  flex-wrap gap-y-2">
            {stack.map((item, index) => (
              <p
                key={index}
                className="text-[0.7rem] text-amber-50 p-[0.2rem_1rem] rounded-lg bg-badge font-bold"
              >
                {item}
              </p>
            ))}
          </div>
        </div>
        {link && (
          <div className="flex gap-x-3 relative items-center">
            <p className="text-amber-50 font-bold text-sm underline">Link: </p>
            <a
              href={link}
              target="blank"
              className="text-amber-50 transtion-all duration-300 ease-in-out hover:text-green-400"
            >
              {link}
            </a>
          </div>
        )}
        <div className="pt-4">{projectToRender(id)}</div>
      </div>
    </div>
  );
};

export default Project_individual;
