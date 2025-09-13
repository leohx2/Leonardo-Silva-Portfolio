import "./App.css";
import Apresentation from "./components/Apresentation";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="min-h-screen max-w-screen pb-16 bg-main flex flex-col items-center justify-center">
      <Apresentation />
      <Skills />
    </div>
  );
}

export default App;
