import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import FirstItem from "../carousel/FirstItem";
import SvgSelector from "../../assets/SvgSelector"
import SecondItem from "../carousel/SecondItem";
import ThirdItem from "../carousel/ThirdItem";

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
    <div className="nextArrow arrow"
    onClick={onClick}>
      <SvgSelector svgName="rightArrow" width="30px" height="30px" colorHEX="#ffffff"/>
    </div>
  )
}

const Carousel = () => {
  const settings = {
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <PrevArrow/>,
    nextArrow: <NextArrow/>,
    autoplay: false,
    autoplaySpeed: 5500,
    pauseOnHover: false,
    cssEase: "linear",
    swipe: false,
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