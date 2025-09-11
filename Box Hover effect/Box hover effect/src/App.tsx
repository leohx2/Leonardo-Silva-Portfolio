import "./App.css";
import BalanceEffect from "./components/balanceEffect/balanceEffect";
import LanternEffectBox from "./components/lanternEffect/lanternEffect";
import NeonEffect from "./components/neonEffect/neonEffect";
import SlideEffect from "./components/slideEffect/slideEffect";

function App() {
  // All the comments and explanations will be at each css file
  return (
    <>
      <div className="container">
        <LanternEffectBox />
        <NeonEffect />
        <BalanceEffect />
        <SlideEffect direction="down" />
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
