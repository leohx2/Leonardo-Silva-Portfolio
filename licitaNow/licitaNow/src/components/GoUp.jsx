import SvgSelector from "../assets/SvgSelector";
import { useEffect, useRef } from "react";

const GoUp = () =>{
  const scrollYThreshHold = 200;
  const upArrow = useRef(null)
  const handleClick = () => {
    window.scrollTo(0, 0);
  }
  const handleClickCookies = () => {
    const modal = document.querySelector("#cookiesModal")

    if (modal) modal.classList.add("activeModal")
  }

  useEffect(() => {
    const changeYUpArrow = () => {
      if (window.scrollY > scrollYThreshHold && upArrow)
        upArrow.current?.classList.add("upArrowSvgActive");
      else if (window.scrollY < scrollYThreshHold && upArrow)
        upArrow.current?.classList.remove("upArrowSvgActive");
    };

    window.addEventListener("scroll", changeYUpArrow);
    return () => {
      window.removeEventListener("scroll", changeYUpArrow);
    };
  }, []);

  return(
    <div className="upAndCookies">
      <button onClick={handleClick} ref={upArrow} className="upArrowSvgContainer">
        <SvgSelector svgName={"upArrow"} width={"15px"} height={"15px"} colorHEX={"#fff"} cssClass={"upArrowSvg"} />
      </button>
      <button onClick={handleClickCookies} className="cookieSvg">
        <SvgSelector svgName={"cookie"} width={"19px"} height={"19px"} colorHEX={"#fff"} cssClass={"cookieSvg"} />
      </button>
    </div>
  )
}

export default GoUp;