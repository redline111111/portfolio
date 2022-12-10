
import { Contacts } from "./components/Contacts";
import { Details } from "./components/Details";
import { Greetings } from "./components/Greetings";
import { Projects } from "./components/Projects";

function App() {
  return (
    <div className="flex w-screen bg-neutral-900 h-full flex-col">
      <Greetings/>
      <Projects/>
      <Details/>
      <Contacts/>
    </div>
  );
}

export default App;
