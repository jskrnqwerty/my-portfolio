import FrontendMentorIcon from "../assets/icons/FrontendMentorIcon";
import GitHubIcon from "../assets/icons/GitHubIcon";
import LinkedinIcon from "../assets/icons/LinkedinIcon";
import TwitterIcon from "../assets/icons/TwitterIcon";
import Me from "../assets/icons/Me";

const AboutMe = () => {
  return (
    <>
      <h2>
        <span className="underline">About Me</span>
        <p className="pronunciation lowercase light-text">
          /jus-kurun sing kehnth/
        </p>
      </h2>
      <div className="about-me-info-container">
        <div className="about-me-left">
          <div className="about-me-icon">
            <Me />
          </div>
          <div className="my-socials">
            <LinkedinIcon />
            <GitHubIcon />
            <TwitterIcon />
            <FrontendMentorIcon />
          </div>
        </div>
        {/* <div className="about-me-right"> */}
        <div className="about-me-text">
          <p>
            Hello World! I'm Jaskaran Singh Kainth, a Front-end Web Developer
            based out of Toronto. From photography on a blank frame to lines of
            code on a blank web page, I love combining the worlds of creative
            design and art to make eye-catching, accessible, and user-friendly
            websites and applications.
          </p>
          <p>
            Technology leads, society follows. The move towards increasing
            inclusivity and diversity in the industry through representation is
            of importance to me.
          </p>
          <p className="last-paragraph">
            I'm excited to make the leap and continue refining my skills with
            the right company. Drop me a line and/or your favourite restaurant
            in Toronto in the contact form below or check me out at:
          </p>
        </div>
      </div>
      {/* </div> */}
    </>
  );
};

export default AboutMe;
