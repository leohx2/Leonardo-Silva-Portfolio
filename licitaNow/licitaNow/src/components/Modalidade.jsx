import SvgSelector from "../assets/SvgSelector";
import "./tiposDeConcurso.css"

const Modalidade = ({svgName, titulo, descricao, cssClass, width, height}) => {
  return(
    <div className="modalidade">
      <SvgSelector svgName={svgName} height={height ? height : "64px"} 
      width={width ? width : "64px"} colorHEX="#092D00" cssClass={`${cssClass} svgModalidade`}/>
      <div className="modalidadeDetails">
        <p className="detailsTitle">
          {titulo}
        </p>
        <p className="detailsDescription">
          {descricao}
        </p>
      </div>
    </div>
  )

}

export default Modalidade;