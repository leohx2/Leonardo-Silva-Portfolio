import SvgSelector from '../assets/SvgSelector'
import './joinUs.css'

const JoinUs = () => {

  const handleSubmit = (e) => {
    const prevActive = document.querySelector(".activeBtn");

    if (prevActive) prevActive.classList.remove("activeBtn");
    
    e.preventDefault()
    e.target.reset()
  }

  const handleClick = (e) => {
    const prevActive = document.querySelector(".activeBtn");

    if (prevActive) prevActive.classList.remove("activeBtn");

    e.target.classList.add("activeBtn")
  }

  return (
    <section className="sectionStyle differentSection">
      <h2 className="title">
        Junte-se à nossa rede de <span>colaboradores</span>
      </h2>
      <p className="subTitle">
        Procuramos expandir negócios e encontrar profissionais que se identifiquem com a nossa missão
      </p>
      <form className='formContainer' onSubmit={(e) => {handleSubmit(e)}}>
        <div className='formTitle'>
          <h5>Adesão ao Programa de Colaboradores</h5>
          <SvgSelector svgName={"people"} width={"24px"} height={"24px"} colorHEX={"#77B600"}/> 
        </div>
        <label for="fname">Nome</label>
        <input type="text" id="fname" name="fname" placeholder="John" required=""/>
        <label for="flastName">Apelido</label>
        <input type='text' id="flastName" name="flastName" placeholder='Smith' required=""/>
        <label for="femail">E-mail</label>
        <input type='email' id="femail" name="femail" placeholder='email@email.com' required=""/>
        <label for="fnumber">Telemóvel</label>
        <input type="tel" id="fnumber" name="fnumber" placeholder='+351 123456789' required=""/>
        <label for="fselect">Especialidade</label>
        <select id="fselect" name="fselect" required="">
          <option value="" disabled="" selected="" >Selecione a sua especialidade</option>
          <option value="Arquitectura">Arquitectura</option>
          <option value="Engenharia civil">Engenharia civil</option>
          <option value="Empreiteiro">Empreiteiro</option>
          <option value="Eletricista">Eletricista</option>
          <option value="Canalizador">Canalizador</option>
          <option value="Carpinteiro">Carpinteiro</option>
          <option value="Fornecedor de Materiais">Fornecedor de Materiais</option>
        </select>
        <div className='expContainer'>
          <p>Experiência:</p>
          <div className='expButtons'>
            <button type='button' onClick={(e) => {handleClick(e)}}>
              <div className='correctContainer'>
                <SvgSelector svgName={"correct"}  width={"8px"} height={"8px"} colorHEX={"#fff"} cssClass={"correctSvg"}/>
              </div>
              1 à 5 anos
            </button>
            <button type='button' onClick={(e) => {handleClick(e)}}>
              <div className='correctContainer'>
                <SvgSelector svgName={"correct"}  width={"8px"} height={"8px"} colorHEX={"#fff"} cssClass={"correctSvg"}/>
              </div>
              6 à 15 anos
              </button>
            <button type='button' onClick={(e) => {handleClick(e)}}>
              <div className='correctContainer'>
                <SvgSelector svgName={"correct"}  width={"8px"} height={"8px"} colorHEX={"#fff"} cssClass={"correctSvg"}/>
              </div>
              15+ anos
              </button>
          </div>
        </div>
        <label for="fmensagem">Mensagem</label>
        <textarea id='fmensagem' name="fmensagem" placeholder='Compartilhe detalhes que nos ajudem a conhecer melhor o seu background' rows="10" cols="50"></textarea>
        <input type='submit' value={"Enviar pedido de adesão"} id="submiteBtn" name='submitbtn'/>
      </form>
    </section>
  )
}

export default JoinUs;