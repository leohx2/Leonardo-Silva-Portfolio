import SvgSelector from '../assets/SvgSelector'

const ButtonWithArrow = ({value, padding}) => {
  return(
    <a href="https://licitanow.com/login_page" target="__blank" className='linkWithArrow'
    style={padding ? {padding: padding} : {}}>
      <span className='linkWithArrowText'>{value}</span>
      <div className='divArrow'>
        <div className='arrowHoverEffect'>
          <SvgSelector svgName={"rightArrow2"} width={"28px"} height={"28px"} colorHEX={"#639800"}/>
          <SvgSelector svgName={"rightArrow2"} width={"28px"} height={"28px"} colorHEX={"#fff"}/>
        </div>
      </div>
    </a>
  );
}

export default ButtonWithArrow;