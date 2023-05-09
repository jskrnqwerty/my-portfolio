import HandsIcon from "../assets/icons/HandsIcon";
import { accentColor } from "../data/Data";

const Footer = () => {
  return (
    <>
      <a
        href="#home"
        className="back-home"
      >
        Back to Top
      </a>
      <p>
        Designed with{" "}
        <span className="hands icon">
          <HandsIcon fillColor={accentColor} />
        </span>{" "}
        by Jaskaran
      </p>
    </>
  );
};

export default Footer;
