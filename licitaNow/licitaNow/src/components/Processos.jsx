import ButtonWithArrow from "./buttonWithArrow";
import ProcessoIndividual from "./ProcessoIndividual";
import "./processos.css"
import { useRef } from "react";

const Processos = () => {
  const parent = useRef()

  return(
    <section className="sectionStyle">
      <h2 className="title">
        É Rapido, é Simples, é <span>LicitaNow</span>!
      </h2>
      <div className="subtitle">
        <p>
          Da conceção aos acabamentos, a nossa plataforma adapta-se a todas as necessidades do setor da construção.
        </p>
      </div>
      <div ref={parent} className="processosContainer">
        <ProcessoIndividual number={"1"} title={"Criar concurso"} parent={parent}
        description={"Publique o seu projeto com todos os requisitos detalhados"} delay={'0.6s'}/>
        <ProcessoIndividual number={"2"} title={"Receber Propostas"} parent={parent}
        description={"Os interessados apresentam propostas"} delay={'0.9s'}/>
        <ProcessoIndividual number={"3"} title={"Vencedor Automático"} parent={parent}
        description={"A proposta mais baixa é selecionada automaticamente quando o tempo termina"} delay={'1.2s'}/>
        <ProcessoIndividual number={"4"} title={"Pós Concurso"} parent={parent}
        description={"Comunique e partilhe ficheiros de forma gratuita através da plataforma"} delay={'1.5s'}/>
      </div>
      <ButtonWithArrow value="Crie o Seu Primeiro Concurso"/>
    </section>
  )

}

export default Processos;