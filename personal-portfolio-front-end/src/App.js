import SideBar from "./Components/SideBar";
import "./App.css";
import About from "./Pages/About/About";
import TechStack from "./Pages/TechStack/TechStack";
import Project from "./Pages/Projects/Project";

function App() {
  return (
    <div className="App">
      <SideBar />
      <div className="container">
        <About />
        <TechStack />
        <Project />
      </div>
    </div>
  );
}

export default App;
