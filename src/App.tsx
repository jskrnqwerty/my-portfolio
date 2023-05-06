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
      <div className="header">
        <Header />
      </div>
      <div className="intro">
        <Intro />
      </div>
      <div className="about-me">
        <AboutMe />
      </div>
      <div className="skills">
        <Skills />
      </div>
      <div className="projects">
        <Projects />
      </div>
      <div className="contact-me">
        <ContactMe />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </>
  );
}

export default App;
