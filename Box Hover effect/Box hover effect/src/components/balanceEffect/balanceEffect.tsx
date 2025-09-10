import "../../App.css";
import "./ballanceEffect.css";

const BallanceEffect = () => {
  /* To be able to render this effect the way I want, i need to render every single cell
  for my grid to add the rotate transformation using css. The amount of cells depends on the size you want
  please feel free to modify it depending on your needs
  */
  const cells = Array.from({ length: 16 });

  return (
    <div className="box ballanceEffect">
      {cells.map((_, i) => (
        <div key={i} id={`gridcell${i.toString()}`} className="gridCell"></div>
      ))}
      <div className="boxContent">Card 3: ballance effect</div>
    </div>
  );
};

export default BallanceEffect;
