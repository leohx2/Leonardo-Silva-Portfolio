import "../../App.css";
import "./lanternEffect.css";

const LanternEffectBox = () => {
  const root = document.documentElement;

  const mouseTracker = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    console.log("mouse X: %d, mouse Y: %d", e.clientX, e.clientY);
    //Update the hoverType1 cltx and clty position for the "light"
    root.style.setProperty("--h1CltX", `${e.clientX}px`);
    root.style.setProperty("--h1CltY", `${e.clientY}px`);
  };
  return (
    <div
      className="box underBox"
      id="Box1"
      onMouseMove={(e) => mouseTracker(e)}
    >
      <div className="hoverType1"></div>
      <div className="insideBox">
        <p>Card 1: lantern</p>
      </div>
    </div>
  );
};

export default LanternEffectBox;
