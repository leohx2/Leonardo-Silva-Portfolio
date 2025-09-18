import SvgSelector from "../assets/SvgSelector";
import "../App.css";

const Apresentation = () => {
  return (
    <section
      id="apresentation"
      className="min-h-screen max-w-screen flex flex-col-reverse justify-center items-center lg:flex-row sm:pb-0 pb-14"
    >
      <div
        id="containerName"
        className="lg:h-[400px] h-[150px] flex justify-center lg:items-start items-center flex-col text-amber-50 relative"
      >
        <p className="text-amber-50 font-bold text-4xl flex">
          Hi, I'm&nbsp;<span id="myName">Leonardo!</span>
        </p>
        <p className=" text-amber-50 font-bold text-xl lg:tracking-[0.4em] tracking-[0.3em]">
          Front-end Developer
        </p>
        <div className="text-amber-50  w-[310px] sm:w-[340px] flex flex-col lg:mb-0 mb-14 absolute lg:top-[270px] top-[130px] lg:text-start text-center">
          <p className="tracking-wider lg:text-lg">
            I'm a 25 years old developer based in Portugal, focused on creating
            modern, user-friendly, practical and beautiful web apps. Feel free
            to check out my projects below.
          </p>
        </div>
      </div>
      <div className="overflow-hidden lg:w-[400px] w-[300px] rounded-[30%] relative">
        <div className="absolute lg:h-[400px] lg:w-[400px]">
          <SvgSelector
            svgName="bubble"
            cssClass="lg:translate-[210px] lg:scale-100 translate-[150px] scale-80"
          />
        </div>
        <img
          src="/src/assets/myPhoto.png"
          alt="Leonardo Silva picture"
          className=" grayscale-60 lg:h-[400px] h-[300px]"
        />
      </div>
    </section>
  );
};

export default Apresentation;
