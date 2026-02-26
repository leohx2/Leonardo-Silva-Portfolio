import './cookies.css'
import SvgSelector from "../assets/SvgSelector";
import {useRef} from 'react'
import useViewPort from '../customHooks/useViewPort';

const Cookies = () => {
  const cookiesRef = useRef(null)
  const screenSize = useViewPort()

  const handleClickCookies = () => {
    if (cookiesRef) cookiesRef.current.classList.remove("activeModal")
  }


  return(
    <div id="cookiesModal" className="activeModal" ref={cookiesRef}>
      <button onClick={handleClickCookies} className='closeBtn'>x</button>
      <div className='cookiesTitle'>
        <h5>Configuração de Cookies</h5>
        <SvgSelector svgName={"cookie"} width={screenSize === "large" ? '24px': '40px'} height={screenSize === "large" ? '24px': '40px'} colorHEX={"#fff"}/>
      </div>
      <p>Usamos apenas cookies essenciais para o funcionamento do site e não partilhamos dados com terceiros.</p>
      <p>Ao clicar em «Aceitar», autoriza e aceita o tratamento destes dados pela LicitaNow.</p>
      <p>
        Para mais informações, leia a nossa <a className="cookiesLink" href="https://licitanow.com/politica_de_privacidade">política de privacidade</a> e os nossos  
        <a className="cookiesLink" href="https://licitanow.com/termos_e_condicoes">{" "}termos e condições</a>.
      </p>
      <div className="cookiesBtn">
        <a className='hoverAction' href='https://licitanow.com/politica_de_privacidade'><span>Saber mais</span></a>
        <a className='hoverAction' onClick={handleClickCookies}><span>Aceitar e Fechar</span></a>
      </div>
    </div>
  )
}

export default Cookies;