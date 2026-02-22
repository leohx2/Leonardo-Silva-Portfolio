import NumbersSobre from './NumbersSobre';
import './sobre.css'
import SobreIndividual from './SobreIndividual';
import ButtonWithArrow from './ButtonWithArrow'

const SobreLicitaNow = () => {

  return(
    <section className="sectionStyle differentSection">
      <h2 className="title">
        Sobre a <span>LicitaNow</span>
      </h2>
      <div className="subtitle">
        <p>
          Confiança, transparência e valor. Estes princípios orientam tudo o que fazemos
        </p>
      </div>
      <div className="sobreContainer">
        <SobreIndividual svgName={"locker"} title={"Sem subscrição"} left={true} parentRef={parent} 
        threshold={0.25} width={"26px"}
        description={["A nossa plataforma permite que particulares, empresas e profissionais da construção civil submetam propostas para execução de obras, projetos de arquitetura e especialidades, assim como para outras necessidades específicas dos Donos de Obra.",
        "Pague apenas pelo que utiliza. Sem taxas ocultas, sem encargos recorrentes, sem compromissos"]}/>
        <SobreIndividual svgName={"eye"} title={"Transparência Total"} left={false} parentRef={parent} 
        threshold={0.5} width={"30px"}
        description={["Fornecemos soluções digitais inovadoras para o setor da construção, simplificando e otimizando todo o processo de contratação e gestão de projetos.", 
        "A LicitaNow garante eficiência, fiabilidade e rigor em cada etapa, desde a organização de concursos até à fiscalização de obras privadas e públicas, para além de visibilidade total sobre todos os processos, preços e progresso dos projetos. O que vê é exatamente o que obtém"]}/>
        <SobreIndividual svgName={"gift"} title={"Criar Concursos Grátis"} left={true} parentRef={parent} 
        threshold={0.75} width={"30px"}
        description={["Inicie o seu concurso sem custos. Obtenha propostas competitivas de empreiteiros qualificados sem taxas iniciais.",
        "Os participantes apresentam as suas propostas diretamente na plataforma, sendo geralmente adjudicada a proposta mais baixa.", "Em caso de incumprimento contratual, asseguramos a substituição pela proposta imediatamente seguinte mais vantajoso."]}/>
        <SobreIndividual svgName={"handshake"} title={"Pluralidade e reconhecimento"} left={false} parentRef={parent} 
        threshold={0.9} width={"36px"}
        description={["A LicitaNow abrange diversos segmentos, incluindo bens físicos, serviços, imóveis e produtos relacionados com a construção civil, bem como produtos digitais associados ao setor.",
        "Para além disso, pode adirir ao nosso programa de colaboradores e receber uma percentagem dos créditos utilizados pelos convidados que trouxer para a plataforma"]}/>
      </div>
      <NumbersSobre/>
      <ButtonWithArrow value = "Saber mais sobre nós" padding={"0.4rem 2rem"}/>
    </section>
  );
}

export default SobreLicitaNow;