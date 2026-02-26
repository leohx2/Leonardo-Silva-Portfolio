import "./processos.css"
import "./tiposDeConcurso.css"
import { useRef, useEffect } from 'react';


const ProcessoIndividual = ({number, title, description, delay, parent}) => {

  const sectionRef = useRef(null);


  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {

        const [entry] = entries;
        if (entry.isIntersecting) {          
          sectionRef.current.style.transform = 'translateX(0%)'
          sectionRef.current.style.opacity = '1'
          observer.unobserve(parent.current); 
        }
      },
      {
        root: null, 
        rootMargin: '0px',
        threshold: 0.8,
      }
    );

    if (sectionRef.current && parent.current) {
      sectionRef.current.style.transition = `all ${delay} ease-in-out`
      observer.observe(parent.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(parent.current);
      }
    };
  }, []);

  return(
    <div ref={sectionRef} className="modalidadeDetails animationUp">
        <p className="audiowideFont processoNumber">
          {number}
        </p>
        <p className="detailsTitle">
          {title}
        </p>
        <p className="detailsDescription">
          {description}
        </p>
    </div>
  )
}

const ProcessoIndividualMobile = ({number, title, description}) => {

  const sectionRef = useRef(null);


  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {

        const [entry] = entries;
        if (entry.isIntersecting) {          
          sectionRef.current.style.transform = 'translateX(0%)'
          sectionRef.current.style.opacity = '1'
          observer.unobserve(sectionRef.current); 
        }
      },
      {
        root: null, 
        rootMargin: '0px',
        threshold: 0.1,
      }
    );

    if (sectionRef.current) {
      sectionRef.current.style.transition = `all 0.7s ease-in-out`
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return(
    <div ref={sectionRef} className="modalidadeDetails animationUp">
        <p className="audiowideFont processoNumber">
          {number}
        </p>
        <p className="detailsTitle">
          {title}
        </p>
        <p className="detailsDescription">
          {description}
        </p>
    </div>
  )
}

export {ProcessoIndividual, ProcessoIndividualMobile};