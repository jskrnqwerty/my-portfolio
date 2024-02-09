import HandsIcon from "./icons/HandsIcon";

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
          <HandsIcon />
        </span>{" "}
        by Jaskaran • February 2024
      </p>
    </>
  );
};

export default Footer;
