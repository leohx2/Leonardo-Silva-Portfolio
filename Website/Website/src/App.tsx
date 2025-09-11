import "./App.css";
import Badges from "./components/Badges";

function App() {
  return (
    <div className="min-h-screen min-w-screen bg-main flex items-center justify-center">
      <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-x-8 gap-y-8">
        <Badges skill="git" text="Git" />
        <Badges skill="html" text="HTML5" />
        <Badges skill="js" text="JavaScript" />
        <Badges skill="css" text="CSS" />
        <Badges skill="ts" text="TypeScript" />
        <Badges skill="react" text="React" />
        <Badges skill="tailwind" text="Tailwindcss" />
        <Badges skill="c" text="C" />
      </div>
    </div>
  );
}

export default App;
