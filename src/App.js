import "./App.css";
import { HashRouter, Route, Switch } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Experience from "./components/Experience";
import AboutMe from "./components/AboutMe";
import Particles from "react-particles-js";
import Portfolio from "./components/Portfolio";
import Contacts from "./components/Contacts";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <HashRouter basename={process.env.PUBLIC_URL}>
        <Particles
          className="particles-canvas"
          params={{
            particles: {
              number: {
                value: 30,
                density: {
                  enable: true,
                  value_area: 900,
                },
              },
              shape: {
                type: "circle",
                stroke: {
                  width: 6,
                  color: "#f9ab00",
                },
              },
            },
          }}
        />
        <Navbar />
        <Header />
        <AboutMe />
        <Experience />
        <Portfolio />
        <Contacts />
        <Footer />
      </HashRouter>
    </>
  );
}

export default App;
