import './Carousel.css'
import video from '../../assets/mainVideo.mp4'

const FirstItem = () => {
  return(
    <section className="deafultContainer">
      <video autoPlay muted loop playsInline>
        <source src={video} type="video/mp4"/>
        Your browser does not support HTML5 video.
      </video>
      <div className='carouselContent'>
        <h1>A Nova Geração de Concursos Online</h1>
        <h2>Inovação e confiança em cada proposta</h2>
        <div className='carouselActions'>
          <a href="https://licitanow.com/login_page" target='__blank' className='hoverAction'>
            <span>Começar agora</span>
          </a>
          <a href="https://licitanow.com/pesquisar_concursos" target='__blank' className='hoverAction'>
            <span>Pesquisar Concursos</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default FirstItem;