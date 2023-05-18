import DownArrowIcon from "../assets/icons/DownArrowIcon";

const Intro = () => {
  return (
    <>
      <div className="intro-text">
        <h1>
          <span>Jaskaran</span>
        </h1>
        <p className="role">Front-end</p>
        <p className="role">Web Developer</p>
      </div>
      <a
        href="#about-me"
        className="scroll-down icon"
      >
        <DownArrowIcon />
      </a>
    </>
  );
};

export default Intro;
