import { useState } from "react";
import "../../App.css";
import "./slideEffect.css";

interface SlideProps {
  direction: "up" | "down" | "left" | "right";
}

const SlideEffect = ({ direction }: SlideProps) => {
  const [effectDirection, setEffectDirection] = useState<SlideProps | string>(
    direction
  );

  return (
    <div className="box">
      <p className="effectTitle">Card 3: slide effect</p>
      <div className="effectContainer">
        <div className={`${effectDirection}Effect communStyle`}>
          <h2>Choose the disered effect:</h2>
          <div className="btnContainer">
            <button
              className="changeEffectBtn"
              onClick={(e) => {
                setEffectDirection(e.currentTarget.value);
              }}
              value="up"
            >
              Up
            </button>
            <button
              className="changeEffectBtn"
              onClick={(e) => {
                setEffectDirection(e.currentTarget.value);
              }}
              value="down"
            >
              Down
            </button>
            <button
              className="changeEffectBtn"
              onClick={(e) => {
                setEffectDirection(e.currentTarget.value);
              }}
              value="left"
            >
              Left
            </button>
            <button
              className="changeEffectBtn"
              onClick={(e) => {
                setEffectDirection(e.currentTarget.value);
              }}
              value="right"
            >
              Right
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SlideEffect;
