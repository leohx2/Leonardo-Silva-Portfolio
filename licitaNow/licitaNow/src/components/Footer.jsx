import logoImage from '../assets/logo.png'
import prrBarra from '../assets/prr_barra.png'
import visa from '../assets/visa.png'
import mastercard from '../assets/mastercard.png'
import multibanco from '../assets/multibanco.png'
import SvgSelector from '../assets/SvgSelector'

const Footer = () => {
  const handleSubmit = (e) => {
    if (e) {
      e.preventDefault()
      e.target.reset()
    }
  }

  return (
    <footer>
      <div className='gridContainer'>
        <div className='footerSmallContainers'>
          <h5>
            Entre em <span>Contacto</span>
          </h5>
          <a href="mailto:geral@licitanow.com" className='footerLinkWSvg'>
            <SvgSelector svgName={"email"} width={"15px"} height={"15px"} cssClass={"iconsFooter"} colorHEX={"#f5f3f4"}/>
            geral@licitanow.com
          </a>
          <a href="mailto:contabilidade@macrislda.com" className='footerLinkWSvg'>
            <SvgSelector svgName={"email"} width={"15px"} height={"15px"} cssClass={"iconsFooter"} colorHEX={"#f5f3f4"}/>
            contabilidade@macrislda.com
          </a>
        </div>

        <div className='footerSmallContainers'>
          <h5>
            Links <span>Úteis</span>
          </h5>
          <a className='footerLinkWSvg'href="https://licitanow.com/sobre">
            <SvgSelector svgName={"profile"} width={"15px"} height={"15px"} cssClass={"iconsFooterStroke"} colorHEX={"#f5f3f4"}/>
            Sobre Nós
          </a>
          <a className='footerLinkWSvg'href="https://licitanow.com/creditos">
            <SvgSelector svgName={"creditCard"} width={"15px"} height={"15px"} cssClass={"iconsFooterStroke"} colorHEX={"#f5f3f4"}/>
            Créditos
          </a>
          <a className='footerLinkWSvg'href="https://licitanow.com/precos">
            <SvgSelector svgName={"coin"} width={"15px"} height={"15px"} cssClass={"iconsFooter"} colorHEX={"#f5f3f4"}/>
            Preços
          </a>
          <a className='footerLinkWSvg'href="https://licitanow.com/eventos">
            <SvgSelector svgName={"location"} width={"15px"} height={"15px"} cssClass={"iconsFooter"} colorHEX={"#f5f3f4"}/>
            Eventos
          </a>
        </div>

        <div className='footerSmallContainers'>
          <h5>
            As Nossas <span>Soluções</span>
          </h5>
          <a className='footerLinkWSvg' href="https://licitanow.com/concursos">
            <SvgSelector svgName={"hammer"} width={"15px"} height={"15px"} cssClass={"iconsFooter"}  colorHEX={"#f5f3f4"}/>
            Concursos
          </a>
          <a className='footerLinkWSvg' href="https://licitanow.com/servicos">
            <SvgSelector svgName={"todoList"} width={"15px"} height={"15px"} cssClass={"iconsFooterStroke"} colorHEX={"#f5f3f4"}/>
            Serviços
          </a>
          <a className='footerLinkWSvg' href="https://licitanow.com/arquivo">
          <SvgSelector svgName={"archive"} width={"15px"} height={"15px"} cssClass={"iconsFooter"} colorHEX={"#f5f3f4"}/>
          Arquivo
          </a>
          <a className='footerLinkWSvg' href="https://licitanow.com/intervencoes">
          <SvgSelector svgName={"worker"} width={"15px"} height={"15px"} cssClass={"iconsFooter"} colorHEX={"#f5f3f4"}/>
          Intervenções
          </a>
          <a className='footerLinkWSvg' href="https://licitanow.com/colaboracao">
          <SvgSelector svgName={"colab"} width={"15px"} height={"15px"} cssClass={"iconsFooter"} colorHEX={"#f5f3f4"}/>
          Colaboração
          </a>
        </div>

        <div className='footerSmallContainers'>
          <img className='footerLogo' src={logoImage} alt="LicitaNow logo" />
          <p className='justifyP'>Gestão de propostas transparentes baseadas em concursos. A ligar proprietários a empreiteiros desde 2025.</p>
          <div className='socialMediaIcons'>
            <a href="https://www.facebook.com/profile.php?id=61579034193178">
              <SvgSelector svgName={"facebook"} width={"20px"} 
              height={"20px"} colorHEX={"#f5f3f4"} cssClass="iconsFooter"/>
            </a>
            <a href="https://x.com/licitanow">
              <SvgSelector svgName={"x"} width={"18px"} 
              height={"20px"} colorHEX={"#f5f3f4"} cssClass="iconsFooter"/>
            </a>
            <a href="https://www.instagram.com/_licitanow_">
              <SvgSelector svgName={"instagram"} width={"20px"} 
              height={"20px"} colorHEX={"#f5f3f4"} cssClass="iconsFooter"/> 
            </a>
            <a href="https://linkedin.com/showcase/licitanowpt">
              <SvgSelector svgName={"linkedin"} width={"20px"} 
              height={"20px"} colorHEX={"#f5f3f4"} cssClass="iconsFooter"/>
            </a>
          </div>
        </div>
        <div className='footerSmallContainers'>
          <h5>
            Métodos de <span>Pagamento</span>
          </h5>
          <div className='paymentOptions'>
            <img src={visa} alt="Visa"/>
            <img src={mastercard} alt="MasterCard"/>
            <img src={multibanco} alt="MultiBanco"/>
          </div>
        </div>
        
        <div className='footerSmallContainers'>
          <h5>
            Subscreva a Nossa <span>Newsletter</span>
          </h5>
          <p>Fique a par dos nossos projetos mais recentes e das tendências do setor!</p>
          <form action="#" onSubmit={(e)=>{handleSubmit(e)}} className='newsletter'>
            <input type="email" name='newsEmail' id='newsEmail' placeholder='email@email.com'/>
            <button>
              <SvgSelector svgName={"rightArrow2"} width={"15px"} height={"15px"} colorHEX={"#f5f4f3"} className="arrowNewsLetter" />
            </button>
          </form>
        </div>
      </div>
      <div className='flexContainer'>
        <hr/>
        <img className="prrBarra" src={prrBarra} alt="Imagens Prr, República Portugues e Financiado pela União Europeia" />
        <hr/>

        <div className='footerCopyRight'>
          <p className='copyRightText'>
            ® 2025 LicitaNow. Marca registada, propriedade de <a href="https://macrislda.com/" className='copyRightLink'>Macris Lda.</a> Todos os direitos reservados.
          </p>
          <div className='copyRightLastLinks'>
            <a href="https://licitanow.com/politica_de_privacidade">Politica de Privacidade</a>
            <a href="https://licitanow.com/termos_e_condicoes">Termos e Condições</a>
            <a href="https://www.livroreclamacoes.pt/Inicio">Livro de Reclamações</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;