import './navBar.css';
import logo from '../assets/logo.png';
import useViewPort from '../customHooks/useViewPort';
import { useRef, useEffect, useState } from 'react';
import SvgSelector from '../assets/SvgSelector'

const NavBar = () => {
  const navBarRef = useRef(null);
  const portView = useViewPort();
  const scrollYThreshHold = portView === "small" ? 20 : 30;
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
  const [isSubMenuOpen2, setIsSubMenuOpen2] = useState(false);

  const openCloseMobileMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const openCloseSubMobileMenu = (id) => {
    if (id == 1) setIsSubMenuOpen(!isSubMenuOpen)
    else if (id == 2) setIsSubMenuOpen2(!isSubMenuOpen2)
  }

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
    {portView !== "large" && (
      <button className='mobileMenuBtn' onClick={openCloseMobileMenu}>
        <SvgSelector svgName="mobileMenu" cssClass="svgStroke" width="33px" height="33px" colorHEX="#f6f6f6"/>
      </button>
    )}
    <div className={`navOptions ${isMenuOpen ? "openned" : ""}`} >
      {portView !== "large" && (
      <button className='closeMenuBtn' onClick={openCloseMobileMenu}>
        <SvgSelector svgName="close" cssClass="svgStroke" width="30px" height="30px" colorHEX="#f6f6f6"/>
      </button>
    )}
      <div className='subMenu'>
        <div className='subMenuTitle' onClick={() => openCloseSubMobileMenu(1)}>
          <p>Sobre</p>
          <div className='rightArrow'>
            <SvgSelector svgName="subMenuArrow" width="0.7rem" height="0.7rem" cssClass={`subMenuArrow right ${isSubMenuOpen ? 'rotateArrow' : ''}`} colorHEX="#f6f6f6"/>
          </div>
        </div>
        <div className={`short ${portView === "large" ? 'subMenuContent' : 'subMenuContentMobile'} ${isSubMenuOpen ? 'activeSubMenu' : ' '}`}>
          <a href="https://licitanow.com/sobre" target='__blank'>
            <SvgSelector svgName="profile" cssClass="svgStroke" width="0.8rem" height="0.8rem" colorHEX="#f6f6f6"/>
            <span>Sobre nós</span>
          </a>
          <a href="https://licitanow.com/creditos" target='__blank'>
            <SvgSelector svgName="creditCard" cssClass="svgStroke" width="0.8rem" height="0.8rem" colorHEX="#f6f6f6"/>
            <span>Créditos</span>
          </a>
          <a href="https://licitanow.com/precos" target='__blank'>
            <SvgSelector svgName="coin" cssClass="svgFill" width="0.8rem" height="0.8rem" colorHEX="#f6f6f6"/>
            <span>Preços</span>
          </a>
          <a href="https://licitanow.com/eventos" target='__blank'>
            <SvgSelector svgName="location" cssClass="svgFill" width="0.8rem" height="0.8rem" colorHEX="#f6f6f6"/>
            <span>Eventos</span>
          </a>
        </div>
      </div>
      <a className="mobileNavLink" href="https://licitanow.com/como" target='_blank'>Como funciona</a>
      <div className='subMenu'>
        <div className='subMenuTitle' onClick={() => openCloseSubMobileMenu(2)}>
          <p>Soluções</p>
          <div className={`rightArrow`}>
            <SvgSelector svgName="subMenuArrow" width="0.7rem" height="0.7rem" cssClass={`subMenuArrow right ${isSubMenuOpen2 ? 'rotateArrow' : ''}`} colorHEX="#f6f6f6"/>
          </div>
        </div>
        <div className={`long ${portView === "large" ? 'subMenuContent' : 'subMenuContentMobile'} ${isSubMenuOpen2 ? 'activeSubMenu' : ' '}`}>
          <a href="https://licitanow.com/concursos" target='__blank'>
            <SvgSelector svgName="hammer" cssClass="svgFill" width="0.8rem" height="0.8rem" colorHEX="#f6f6f6"/>
            <span>Concursos</span>
          </a>
          <a href="https://licitanow.com/servicos" target='__blank'>
            <SvgSelector svgName="todoList" cssClass="svgStroke" width="0.8rem" height="0.8rem" colorHEX="#f6f6f6"/>
            <span>Serviços</span>
          </a>
          <a href="https://licitanow.com/arquivo" target='__blank'>
            <SvgSelector svgName="archive" cssClass="svgFill" width="0.8rem" height="0.8rem" colorHEX="#f6f6f6"/>
            <span>Arquivo</span>
          </a>
          <a href="https://licitanow.com/intervencoes" target='__blank'>
            <SvgSelector svgName="worker" cssClass="svgFill" width="0.8rem" height="0.8rem" colorHEX="#f6f6f6"/>
            <span>Intervenções</span>
          </a>
          <a href="https://licitanow.com/colaboracao" target='__blank'>
            <SvgSelector svgName="colab" cssClass="svgFill " width="0.8rem" height="0.8rem" colorHEX="#f6f6f6"/>
            <span>Colaboração</span>
          </a>
        </div>
      </div>
      <a className="mobileNavLink" href="https://licitanow.com/suporte/0" target='_blank'>Suporte</a>
      <a href="https://licitanow.com/login_page" target='_blank' className='navButton'>Entrar</a>
    </div>
  </nav>
  );
}

export default NavBar