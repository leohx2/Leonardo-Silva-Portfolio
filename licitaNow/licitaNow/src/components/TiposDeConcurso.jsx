import Modalidade from './Modalidade';
import './tiposDeConcurso.css'

const TiposDeConcurso = () => {

  return(
    <section className="sectionStyle">
      <h2 className="title">
        Lance <span>concursos</span> para qualquer etapa da sua obra
      </h2>
      <div className="subtitle">
        <p>
          Da conceção aos acabamentos, a nossa plataforma adapta-se a todas as necessidades do setor da construção.
        </p>
      </div>
      <div className="modalidadesContainer">
        <Modalidade svgName={"harmer2"}
        titulo={"Concursos de Construção"} 
        descricao={"Publique concursos para obras novas, remodelações, legalizações ou ampliações, e encontre as melhores empresas para o seu projeto."}/>
        <Modalidade svgName={"services"}
        cssClass="servicesSvg"
        titulo={"Concursos de Serviços"} 
        descricao={"Gestão de obra, fiscalização, arquitetura, engenharia, topografia e outros serviços técnicos, tudo com total transparência e controlo."}/>
        <Modalidade svgName={"people"}
        titulo={"Concursos de Subcontratação"} 
        descricao={"Gestão de obra, fiscalização, arquitetura, engenharia, topografia e outros serviços técnicos, tudo com total transparência e controlo."}/>
        <Modalidade svgName={"tools"}
        titulo={"Outros Concursos"} 
        descricao={"Organize concursos para o aluguer de equipamentos, fornecimento de materiais de construção ou qualquer outra necessidade do setor."}/>
      </div>
    </section>
  );

}

export default TiposDeConcurso;