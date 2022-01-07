import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Navbar";
import Footer from "./components/Footer";
import Intro from "./components/Intro";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import { BsArrowUpSquareFill } from "react-icons/bs";
import Technologies from "./components/Technologies";
import ScrollMagic from "scrollmagic";

function App() {
  const scrollToHome = () => {
    var ele = document.getElementById("navHome");
    window.scrollTo({ top: ele.offsetTop, behavior: "smooth" });
  };
  // var controller = new ScrollMagic.Controller();
  // var s = document.querySelectorAll(".panel.about-container");
  // console.log(s);
  // var scene = new ScrollMagic.Scene({
  //   triggerElement: ".panel.about-container",
  //   duration: 3000,
  // })
  //   .setClassToggle(".panel.about-container", "show")
  //   .addTo(controller);

  return (
    <div className="App" id="App">
      <Navbar />
      <main>
        <BsArrowUpSquareFill
          className="backHomeBtn"
          onClick={() => scrollToHome()}
        />
        <Intro />
        <About />
        <Technologies />
        <Projects />
        <Contact />
      </main>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
