import "./App.css";
import Apresentation from "./components/Apresentation";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import SocialMedias from "./components/SocialMedias";
import StarEffect from "./components/StarEffect";
import usePortView from "./customHooks/usePortView";

function App() {
  const portView = usePortView();
  return (
    <NavBar>
      <div className="min-h-screen max-w-screen bg-main flex flex-col items-center justify-center">
        {portView === "small" ? (
          <SocialMedias
            hasLine={true}
            cssClass="absolute z-50 gap-x-5 top-[5%] w-screen justify-center items-center"
          />
        ) : (
          <SocialMedias
            hasLine={true}
            cssClass="absolute z-50 gap-y-4 flex-col top-[60%] right-14"
          />
        )}

        <Apresentation />
        <Skills />
        <Projects />
        <Footer />
        <StarEffect />
      </div>
    </NavBar>
  );
}

export default App;
