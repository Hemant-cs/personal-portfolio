import SideBar from './Components/SideBar';
import "./App.css"
import About from './Pages/About/About';
import TechStack from './Pages/TechStack/TechStack';

function App() {
  return (
    <div className="App">
      <SideBar />
      <About />
      <TechStack />
    </div>
  );
}

export default App;
