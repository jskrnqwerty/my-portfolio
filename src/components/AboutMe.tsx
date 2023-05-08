import MySocials from "./MySocials";

const AboutMe = () => {
  return (
    <>
      <h2>
        <span className="underline">About Me</span>
        <p className="pronunciation lowercase light-text">
          /jus-kurun sing kehnth/
        </p>
      </h2>

      <p>
        Hello World! I'm Jaskaran Singh Kainth, a Front-end Web Developer based
        out of Toronto. From photography on a blank frame to lines of code on a
        blank web page, I love combining the worlds of creative design and art
        to make eye-catching, accessible, and user-friendly websites and
        applications.
      </p>
      <p>
        Technology leads, society follows. The move towards increasing
        inclusivity and diversity in the industry through representation is of
        importance to me.
      </p>
      <p>
        I'm excited to make the leap and continue refining my skills with the
        right company. Drop me a line and/or your favourite restaurant in
        Toronto in the contact form below or check me out at:
      </p>
      <MySocials />
    </>
  );
};

export default AboutMe;
