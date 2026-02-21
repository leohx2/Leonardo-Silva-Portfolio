import './navBar.css';
import logo from '../assets/logo.png';
import useViewPort from '../customHooks/useViewPort';
import { useRef, useEffect } from 'react';
import SvgSelector from '../assets/SvgSelector'

const NavBar = () => {
  const navBarRef = useRef(null);
  const portView = useViewPort();
  const scrollYThreshHold = portView === "small" ? 5 : 30;

  useEffect(() => {
    const changeY = () => {
      if (window.scrollY > scrollYThreshHold && navBarRef)
        navBarRef.current?.classList.add("navBarActive");
      else if (window.scrollY < scrollYThreshHold && navBarRef)
        navBarRef.current?.classList.remove("navBarActive");
    };

    window.addEventListener("scroll", changeY);
    return () => {
      window.removeEventListener("scroll", changeY);
    };
  }, []);

  return (
  <nav className="navBar" ref={navBarRef}>
    <a href='#'>
      <img className='navLogo' src={logo}/>
    </a>
    <div className='navOptions'>
      <div className='subMenu'>
        <p>Sobre</p>
        <SvgSelector svgName="subMenuArrow" width="0.7rem" height="0.7rem" cssClass="subMenuArrow" colorHEX="#f6f6f6"/>
      </div>
      <a href="#">Como funciona</a>
      <div className='subMenu'>
        <p>Soluções</p>
        <SvgSelector svgName="subMenuArrow" width="0.7rem" height="0.7rem" cssClass="subMenuArrow" colorHEX="#f6f6f6"/>
      </div>
      <a href="#">Suporte</a>
      <button className='navButton'>Entrar</button>
    </div>
  </nav>
  );
}

export default NavBar