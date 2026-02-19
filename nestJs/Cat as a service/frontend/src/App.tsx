import "./App.css";
import { AddNewCatForm } from "./components/addnewCatForm";
import { CatButtons } from "./components/catButtons";
import { CatPictures } from "./components/catPictures";
import { useGetCat, useGetAPIInfo } from "./customHook/useCatAPI";
import { useState } from "react";

function App() {
  const [url, setUrl] = useState<string | null>(null);
  const [update, setUpdate] = useState<boolean>(false);
  const {
    catsLength,
    loading: infoLoading,
    error: infoError,
  } = useGetAPIInfo("http://localhost:3000/allIds", update);
  const {
    data: dataAlone,
    loading: loadingAlone,
    error: errorAlone,
  } = useGetCat(url);

  return (
    <div className="container">
      {infoError && <p>{infoError}</p>}
      <section className="buttonsSection">
        {infoLoading && <p className="imgsContainer">Loading...</p>}
        {!infoLoading && catsLength && (
          <>
            <h1>Choose a Cat</h1>
            <CatButtons catsIds={catsLength} setUrl={setUrl} />
          </>
        )}
      </section>
      <section className="catsSection">
        <div className="imgsContainer">
          {loadingAlone && <p>Loading...</p>}
          {!loadingAlone && dataAlone && <CatPictures data={dataAlone} />}
          {errorAlone && <p>{errorAlone}</p>}
        </div>
        <AddNewCatForm updateTrigger={setUpdate} update={update} />
      </section>
    </div>
  );
}

export default App;
