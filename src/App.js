import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Contact from "./components/Contact/Contact";


function App() {
  return (
    <div className="mainContainer bg-slate-800">
      <div>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Contact /> 
      </div>
    </div>

  );
}

export default App;
