import { useEffect, type ReactNode } from "react";
import "./NavBar.css";
import usePortView from "../customHooks/usePortView";
import SvgSelector from "../assets/SvgSelector";

interface NavProps {
  children: ReactNode;
}

const NavBar = ({ children }: NavProps) => {
  const screenSize = usePortView();

  useEffect(() => {
    const locationHash = window.location.hash;
    const element = document.querySelector(`${locationHash}Link`);
    const elementToGo = document.querySelector(`${locationHash}`);

    if (locationHash && element && elementToGo) {
      element.classList.add("active");
      elementToGo.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      document.querySelector("#apresentationLink")?.classList.add("active");
    }
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    const activeElement = document.querySelector(".active");
    activeElement?.classList.remove("active");
    e.currentTarget.classList.add("active");
  };

  return (
    <>
      <nav
        className="h-(--navbar-size) text-amber-50 bg-[#2a2a2b] w-screen fixed z-50 
      flex items-center gap-x-8 lg:ps-8 tracking-widest lg:top-0 bottom-0 justify-center lg:justify-normal
      lg:shadow-sm lg:shadow-neutral-700/50 lg:opacity-[0.97] lg:hover:opacity-100 lg:transition-opacity lg:duration-500 lg:ease-in-out"
      >
        <a
          id="apresentationLink"
          href="#apresentation"
          onClick={(e) => handleClick(e)}
        >
          {screenSize === "small" ? (
            <SvgSelector
              svgName="profile"
              cssClass="w-[20px] h-[20px] mb-[3px]"
            />
          ) : (
            "About me"
          )}
        </a>
        <a id="skillsLink" href="#skills" onClick={(e) => handleClick(e)}>
          {screenSize === "small" ? (
            <SvgSelector
              svgName="skills"
              cssClass="w-[20px] h-[20px] mb-[3px]"
            />
          ) : (
            "Skills"
          )}
        </a>
      </nav>
      <div className="lg:pb-0 pb-(--navbar-size)">{children}</div>
    </>
  );
};

export default NavBar;
