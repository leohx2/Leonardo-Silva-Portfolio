import "./callOut.css"
import SvgSelector from "../assets/SvgSelector";

const CallOut = () => {

  return (
    <section className="sectionStyle differentSection">
      <div className="callOut">
        <div className="callOutContent">
          <h3>Transforme o seu negócio de construção hoje!</h3>
          <p>Junte-se à revolução da construção. Comece a criar ou licitar em leilões e descubra novas oportunidades na indústria.</p>
          <div className="callOutBtns">
            <a href="https://licitanow.com/login_page" target="__blank" >
              Começar agora
              <div className='divArrow'>
                <div className='arrowHoverEffect'>
                  <SvgSelector svgName={"rightArrow2"} width={"28px"} height={"28px"} colorHEX={"#fafafa"}/>
                  <SvgSelector svgName={"rightArrow2"} width={"28px"} height={"28px"} colorHEX={"#639800"}/>
                </div>
              </div>
            </a>
            <a href="https://licitanow.com/login_page" target="__blank" >
              Agendar uma demonstração
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CallOut;