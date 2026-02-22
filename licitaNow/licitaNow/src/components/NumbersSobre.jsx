import './carousel/Carousel.css'
import {useRef, useEffect} from 'react'
import animateValue from '../utils/numberAnimation';

const NumbersSobre = () => {
  const sectionRef = useRef(null);
  const expeRef = useRef(null);
  const satisfacaoRef = useRef(null);
  const concluidosRef = useRef(null);
  const profissionaisRef = useRef(null);


  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {

        const [entry] = entries;
        if (entry.isIntersecting) {
          animateValue(concluidosRef.current, 2000, '+', 500, 0)
          animateValue(expeRef.current, 2000, '+', 25, 0)
          animateValue(satisfacaoRef.current, 2000, '%', 91, 0)
          animateValue(profissionaisRef.current, 2000,'+', 15, 0)
          
          observer.unobserve(sectionRef.current); 
        }
      },
      {
        root: null, 
        rootMargin: '0px',
        threshold: 0.5,
      }
    );

    if (sectionRef.current && concluidosRef.current && expeRef.current && satisfacaoRef.current && profissionaisRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  return(
      <div ref={sectionRef} className='numberContainer numberSobre'>
        <div className='numbersContent'>
          <p className='number' ref={concluidosRef}>0</p>
          <p className='descriptionSobre'>Projetos Concluídos</p>
        </div>
        <div className='numbersContent'>
          <p className='number' ref={expeRef}>0</p>
          <p className='descriptionSobre'>Anos de Experiência</p>
        </div>
        <div className='numbersContent'>
          <p className='number' ref={satisfacaoRef}>0</p>
          <p className='descriptionSobre'>Avaliação de Satisfação</p>
        </div>
        <div className='numbersContent'>
          <p className='number' ref={profissionaisRef}>0</p>
          <p className='descriptionSobre'>Profissionais Licenciados</p>
        </div>
      </div>
  )
}

export default NumbersSobre;