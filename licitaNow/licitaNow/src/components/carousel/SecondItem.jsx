import './Carousel.css'
import { useEffect, useRef } from 'react';
import animateValue from '../../utils/numberAnimation'

const SecondItem = () => {
  const sectionRef = useRef(null);
  const finalizadosRef = useRef(null);
  const satisfacaoRef = useRef(null);
  const utilizadoresRef = useRef(null);


  useEffect(() => {
    console.log("\ndentro do useEffectn\n");
    const observer = new IntersectionObserver(
      (entries) => {

        const [entry] = entries;
        if (entry.isIntersecting) {
          animateValue(utilizadoresRef.current, 2000, '+', 1200, 0)
          animateValue(finalizadosRef.current, 2000, '+', 500, 0)
          animateValue(satisfacaoRef.current, 2000, '%', 91, 0)
          
          observer.unobserve(sectionRef.current); 
        }
      },
      {
        root: null, 
        rootMargin: '0px',
        threshold: 0.5,
      }
    );

    if (sectionRef.current && utilizadoresRef.current && finalizadosRef.current && satisfacaoRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  
  return(
    <section className="deafultContainer" ref={sectionRef}>
      <div className='secondItemBackground backgroundConfig'></div>
      <div className='carouselContent'>
        <h1>Bucamos Excelência em Todos os Serviços</h1>
        <h2>Com mais de 25 anos de experência no mercado!</h2>
          <a className='hoverAction'>
            <span>Saber mais</span>
          </a>
      </div>
      <hr/>
      <div className='numberContainer'>
          <div className='numbersContent'>
            <p className='number' ref={utilizadoresRef}>0</p>
            <p className='description'>Utilizadores</p>
          </div>
          <div className='numbersContent'>
            <p className='number' ref={finalizadosRef}>0</p>
            <p className='description'>Concursos finalizados</p>
          </div>
          <div className='numbersContent'>
            <p className='number' ref={satisfacaoRef}>0</p>
            <p className='description'>Satisfação</p>
          </div>
      </div>
    </section>
  );
}

export default SecondItem;