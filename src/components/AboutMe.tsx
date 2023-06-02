import FrontendMentorIcon from "./icons/FrontendMentorIcon";
import GitHubIcon from "./icons/GitHubIcon";
import LinkedinIcon from "./icons/LinkedinIcon";
import TwitterIcon from "./icons/TwitterIcon";
import Me from "./icons/Me";
import { resumePath } from "../data/Data";

const AboutMe = () => {
  return (
    <>
      <h2>
        <span className="underline">About Me</span>
        <p className="pronunciation lowercase light-text">
          /jus-kurun sing kehnth/
        </p>
      </h2>
      <div className="about-me-style-container">
        <div className="left-wrapper">
          <div className="left-wrapper_item">
            <Me />
          </div>
        </div>
        <div className="right-wrapper">
          <div className="right-wrapper_top-item">
            <p>
              Hello World! I'm Jaskaran Singh Kainth, a Front-end Web Developer
              based out of Toronto. From photography on a blank frame to lines
              of code on a blank web page, I love combining the worlds of
              creative design and art to make eye-catching, accessible, and
              user-friendly websites and applications.
            </p>
            <p>
              Technology leads, society follows. The move towards increasing
              inclusivity and diversity in the industry through representation
              is of importance to me.
            </p>
            <p className="last-paragraph">
              I'm excited to make the leap and continue refining my skills with
              the right company. Drop me a line and/or your favourite restaurant
              in Toronto in the contact form,{" "}
              <span>
                <a
                  className="link"
                  href={resumePath}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  grab my résumé
                </a>
              </span>{" "}
              or check me out at:
            </p>
          </div>
          <div className="right-wrapper_bottom-item">
            <div className="my-socials">
              <LinkedinIcon />
              <GitHubIcon />
              <TwitterIcon />
              <FrontendMentorIcon />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutMe;
