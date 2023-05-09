import FrontendMentorIcon from "../assets/icons/FrontendMentorIcon";
import GitHubIcon from "../assets/icons/GitHubIcon";
import LinkedinIcon from "../assets/icons/LinkedinIcon";
import TwitterIcon from "../assets/icons/TwitterIcon";
import { accentColor } from "../data/Data";

const ContactMe = () => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
  };
  return (
    <>
      <h2>
        <span className="underline">Contact Me</span>
      </h2>
      <div className="contact-container">
        <div className="contact-form">
          <form
            // action=""
            onSubmit={() => {
              console.log("Form sbumit");
            }}
            // className="contact-form"
          >
            <input
              type="text"
              placeholder="Your Name"
              autoComplete="none"
              aria-label="Input name"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              autoComplete="none"
              aria-label="Input email address"
              required
            />
            <textarea
              className="textarea"
              placeholder="Pineapple does not belong on pizza"
              required
            />
            <button
              type="submit"
              onClick={(e) => handleClick(e)}
              aria-label="Submit contact form"
            >
              Get In Touch
            </button>
          </form>
        </div>
        <div className="contact-message">
          <p>
            If you have any questions about me or my projects, or (politely)
            argue about the best songs of the 90's, I'm your guy!
          </p>
          <p>
            I'm available to grab a coffee and chat! Drop a comment, question,
            concern, or Spotify playlist, and thanks for stopping by!
          </p>
          <p>
            Straight shot to my inbox:
            <br />
            <a href="mailto: kainth.jaskaran@gmail.com">
              kainth.jaskaran@gmail.com
            </a>
          </p>
        </div>
      </div>
      <div className="my-socials">
        <LinkedinIcon fillColor={accentColor} />
        <GitHubIcon fillColor={accentColor} />
        <TwitterIcon fillColor={accentColor} />
        <FrontendMentorIcon fillColor={accentColor} />
      </div>
    </>
  );
};

export default ContactMe;
