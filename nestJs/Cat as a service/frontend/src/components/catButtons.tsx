import "../App.css";

interface catButtonsProps {
  catsIds: Number[];
  setUrl: React.Dispatch<React.SetStateAction<string | null>>;
}

export const CatButtons = ({ catsIds, setUrl }: catButtonsProps) => {
  return (
    <div className="btnContainer">
      <button
        onClick={() => {
          setUrl("http://localhost:3000/");
        }}
      >
        Get all cats
      </button>
      {catsIds &&
        catsIds.map((item: Number) => {
          return (
            <button
              key={item.toString()}
              onClick={() => {
                setUrl(`http://localhost:3000/get/${item}`);
              }}
            >
              Get cat {item.toString()}
            </button>
          );
        })}
    </div>
  );
};
