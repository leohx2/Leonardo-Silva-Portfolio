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
        <div className='subMenuContent short'>
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
      <a href="https://licitanow.com/como" target='_blank'>Como funciona</a>
      <div className='subMenu'>
        <p>Soluções</p>
        <SvgSelector svgName="subMenuArrow" width="0.7rem" height="0.7rem" cssClass="subMenuArrow" colorHEX="#f6f6f6"/>
        <div className='subMenuContent long'>
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
      <a href="https://licitanow.com/suporte/0" target='_blank'>Suporte</a>
      <a href="https://licitanow.com/login_page" target='_blank' className='navButton'>Entrar</a>
    </div>
  </nav>
  );
}

export default NavBar