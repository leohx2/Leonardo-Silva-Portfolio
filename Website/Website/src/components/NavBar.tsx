import type { ReactNode } from "react";
import "./NavBar.css";
import usePortView from "../customHooks/usePortView";

interface NavProps {
  children: ReactNode;
}

const NavBar = ({ children }: NavProps) => {
  const screenSize = usePortView();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    const activeElement = document.querySelector(".active");
    activeElement?.classList.remove("active");
    e.currentTarget.classList.add("active");
  };

  return (
    <>
      <nav
        className="h-(--navbar-size) text-amber-50 bg-main w-screen fixed z-50 
      flex items-center gap-x-8 ps-8 tracking-widest"
      >
        <a
          className="active"
          href="#apresentation"
          onClick={(e) => handleClick(e)}
        >
          About me
        </a>
        <a href="#skills" onClick={(e) => handleClick(e)}>
          Skills
        </a>
        {/* TODO.. responsive */}
      </nav>
      <div className="lg:pb-0 pb-(--navbar-size)">{children}</div>
    </>
  );
};

export default NavBar;
