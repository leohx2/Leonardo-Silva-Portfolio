import SvgSelector from "../assets/SvgSelector";

const Apresentation = () => {
  return (
    <section
      id="apresentation"
      className="min-h-screen max-w-screen flex flex-col-reverse lg:flex-row justify-center items-center"
    >
      <div
        id="containerName"
        className="lg:h-[400px] h-[150px] flex justify-center lg:items-start items-center flex-col text-amber-50"
      >
        <p className="text-amber-50 font-bold text-4xl flex">
          Hi, I'm&nbsp;<span id="myName">Leonardo!</span>
        </p>
        <p className=" text-amber-50 font-bold text-xl tracking-[0.4em]">
          Front-end Developer
        </p>
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
