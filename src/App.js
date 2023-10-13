import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Summary from "./components/Summary";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";

import Experience from "./components/Experience";
import Education from "./components/Education";

function App() {
  return (
    <div className="info">
      <Navbar />
      <div className="resume">
        <Header />
        <Summary />
        <Skills />
        <Experience />
        {/* <Education /> */}
      </div>
    </div>
  );
}

export default App;
