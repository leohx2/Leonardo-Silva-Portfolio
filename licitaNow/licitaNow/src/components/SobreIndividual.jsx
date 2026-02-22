import SvgSelector from '../assets/SvgSelector';
import './sobre.css'

const SobreIndividual = ({svgName, title, description, left, width}) => {


  return(
    <div className="sobreIndividual">
      <div className='sobreTitle' style={{justifyContent: left ? "flex-start" : "flex-end"}}>
        <h3>{title}</h3>
        <SvgSelector svgName={svgName} width={width} height={width} colorHEX={"#77B600"}/>
      </div>
      {description.map((text, index) => {
        return(
          <p key={index}>{text}</p>
        )
      })}
    </div>
  )
}

export default SobreIndividual;