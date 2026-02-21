import './Carousel.css'

const ThirdItem = () => {
  return(
    <section className="deafultContainer">
      <div className='thirdItemBackground backgroundConfig'></div>
      <div className='carouselContent'>
        <h1>À procura de ajuda?</h1>
        <h2>Temos uma equipa pronta para ajudar no que precisar!</h2>
          <a href="https://licitanow.com/suporte/0" target='__blank' className='hoverAction'>
            <span>Contactar</span>
          </a>
      </div>
    </section>
  );
}

export default ThirdItem;