import { useEffect, type ReactNode, useRef } from "react";
import "./NavBar.css";
import usePortView from "../customHooks/usePortView";
import SvgSelector from "../assets/SvgSelector";

interface NavProps {
  children: ReactNode;
}

const NavBar = ({ children }: NavProps) => {
  const screenSize = usePortView();
  const navBar = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const locationHash = window.location.hash;
    const handleScroll = () => {
      // bg-[#2a2a2b]
      if (window.scrollY > 10 && navBar.current) {
        navBar.current.classList.add("onScroll");
      } else if (window.scrollY == 0 && navBar.current) {
        navBar.current.classList.remove("onScroll");
      }
    };

    if (locationHash.length > 2) {
      const element = document.querySelector(`${locationHash}Link`);
      const elementToGo = document.querySelector(`${locationHash}`);

      element?.classList.add("active");
      elementToGo?.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      document.querySelector("#apresentationLink")?.classList.add("active");
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    const activeElement = document.querySelector(".active");
    activeElement?.classList.remove("active");
    e.currentTarget.classList.add("active");
  };

  return (
    <>
      <nav
        ref={navBar}
        className="h-(--navbar-size) text-amber-50 w-screen  fixed z-90 
      flex items-center gap-x-8 lg:pr-8 lg:pl-8 tracking-widest lg:top-0 bottom-0 justify-center lg:justify-normal
      lg:shadow-neutral-700/50 transition-all duration-300 max-sm:bg-[#2a2a2b]"
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

        <a id="projectsLink" href="#projects" onClick={(e) => handleClick(e)}>
          {screenSize === "small" ? (
            <SvgSelector
              svgName="projects"
              cssClass="w-[20px] h-[20px] mb-[3px]"
            />
          ) : (
            "Projects"
          )}
        </a>
        <a
          href="/src/assets/LeonardoSilvaCv.pdf"
          download
          className={`${screenSize == "large" ? "ml-auto" : ""}`}
        >
          {screenSize === "small" ? (
            <SvgSelector
              svgName="download"
              cssClass="w-[20px] h-[20px] mb-[3px]"
            />
          ) : (
            <p className="flex gap-x-2">
              Download my CV{" "}
              <SvgSelector
                svgName="download"
                cssClass="w-[20px] h-[20px] mb-[3px]"
              />
            </p>
          )}
        </a>
      </nav>
      <div className="lg:pb-0">{children}</div>
    </>
  );
};

export default NavBar;
