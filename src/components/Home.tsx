import AboutMe from "./AboutMe";
import ContactMe from "./ContactMe";
import Projects from "./Projects";
import Skills from "./Skills";
import Header from "./Header";
import Intro from "./Intro";
import Footer from "./Footer";

const Home = () => {
  return (
    <>
      <div
        id="home"
        className="wrapper"
      >
        <header id="header">
          <Header />
        </header>
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
      {/* <div
      id="resume"
      className="wrapper"
      >
      <Resume />
      </div> */}
      <footer
        id="footer"
        className="wrapper"
      >
        <Footer />
      </footer>
    </>
  );
};

export default Home;
