import SvgSelector from "../assets/SvgSelector";
import "./tiposDeConcurso.css"
import useViewPort from "../customHooks/useViewPort"



const Modalidade = ({svgName, titulo, descricao, cssClass, width, height}) => {
  const screenSize = useViewPort()
  const defaultSize = screenSize != "large" ? "50px" : "64px"
  
  return(
    <div className="modalidade">
      <div className="svgModalidadeContainer">
        <SvgSelector svgName={svgName} height={height ? height : defaultSize} 
        width={width ? width : defaultSize} colorHEX="#092D00" cssClass={`${cssClass} svgModalidade`}/>
      </div>
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