import type { CatProp } from "../customHook/useCatAPI";
import "../App.css";

interface CatPicProps {
  data: CatProp[];
}

export const CatPictures = ({ data }: CatPicProps) => {
  return (
    <>
      {data.map((item) => {
        return (
          <div key={item.id} className="card">
            <img
              src={item.href}
              title={`Picture taken by ${item.author}`}
              aria-label={`Cat picture from ${item.author}`}
              key={item.id}
            />
            <div className="imgCreditDetails">
              <p>By: {item.author}</p>
              <a href={item.taken_from}>Image source</a>
            </div>
          </div>
        );
      })}
    </>
  );
};
