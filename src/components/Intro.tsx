import DownArrowIcon from "../assets/icons/DownArrowIcon";
import { accentColor } from "../data/Data";

const Intro = () => {
  return (
    <>
      <div className="intro-text">
        <h1>
          <span>Jaskaran</span>
        </h1>
        <p>Front-end</p>
        <p>Web Developer</p>
      </div>
      <a
        href="#about-me"
        className="scroll-down icon"
      >
        <DownArrowIcon fillColor={accentColor} />
        {/* <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 96 960 960"
          className="down-arrow icon"
        >
          <path d="M480 711 240 471l43-43 197 198 197-197 43 43-240 239Z" />
        </svg> */}
      </a>
    </>
  );
};

export default Intro;
