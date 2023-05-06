import AboutMe from "./components/AboutMe";
import ContactMe from "./components/ContactMe";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Header from "./components/Header";
import Intro from "./components/Intro";
import Footer from "./components/Footer";
import "./styles/styles.css";

function App() {
  return (
    <>
      <div
        id="home"
        className="wrapper"
      >
        <div id="header">
          <Header />
        </div>
        <div id="intro">
          <Intro />
        </div>
      </div>
      <div
        id="about-me"
        className="wrapper"
      >
        <AboutMe />
      </div>
      <div
        id="skills"
        className="wrapper"
      >
        <Skills />
      </div>
      <div
        id="projects"
        className="wrapper"
      >
        <Projects />
      </div>
      <div
        id="contact-me"
        className="wrapper"
      >
        <ContactMe />
      </div>
      <div id="footer">
        <Footer />
      </div>
    </>
  );
}

export default App;
