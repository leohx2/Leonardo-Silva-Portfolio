import "./App.css";
import BallanceEffect from "./components/balanceEffect/balanceEffect";
import LanternEffectBox from "./components/lanternEffect/lanternEffect";
import NeonEffect from "./components/neonEffect/neonEffect";

function App() {
  // All the comments and explanations will be at each css file
  return (
    <>
      <div className="container">
        <LanternEffectBox />
        <NeonEffect />
        <BallanceEffect />
      </div>
      <select>
        <option value="system">System</option>
        <option value="dark">Dark</option>
        <option value="light">Light</option>
      </select>
    </>
  );
}

export default App;
