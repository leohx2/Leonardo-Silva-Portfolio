import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import FirstItem from "../carousel/FirstItem";
import SvgSelector from "../../assets/SvgSelector"
import SecondItem from "../carousel/SecondItem";
import ThirdItem from "../carousel/ThirdItem";
import useViewPort from "../../customHooks/useViewPort"

const PrevArrow = (props) => {
  const {onClick } = props;
  return (
    <div className="prevArrow arrow"
    onClick={onClick}>
      <SvgSelector svgName="leftArrow" width="30px" height="30px" colorHEX="#ffffff"/>
    </div>
  )
}

const NextArrow = (props) => {
  const {onClick } = props;
  return (
    <div className="nextArrow arrow rightArrow"
    onClick={onClick}>
      <SvgSelector svgName="leftArrow" width="30px" height="30px" colorHEX="#ffffff"/>
    </div>
  )
}

const Carousel = () => {
  const size = useViewPort()
  const settings = {
    infinite: true,
    speed: size != "large" ? 400 : 600,
    slidesToShow: 1,
    slidesToScroll:1 ,
    prevArrow: <PrevArrow/>,
    nextArrow: <NextArrow/>,
    autoplay: false,
    autoplaySpeed: 5500,
    pauseOnHover: false,
    cssEase: "linear",
    swipe:  size != "large"  ? true : false,
  };

  return (
    <div className="sliderContainer">
      <Slider {...settings}>
        <FirstItem/>
        <SecondItem/>
        <ThirdItem/>
      </Slider>
    </div>
  );
}

export default Carousel;