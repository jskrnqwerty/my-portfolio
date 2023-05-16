import { useState } from "react";
import FrontendMentorIcon from "../assets/icons/FrontendMentorIcon";
import GitHubIcon from "../assets/icons/GitHubIcon";
import LinkedinIcon from "../assets/icons/LinkedinIcon";
import TwitterIcon from "../assets/icons/TwitterIcon";

const ContactMe = () => {
  const [name, setName] = useState<string>("");
  const [isName, setIsName] = useState<boolean>(true);
  const [email, setEmail] = useState<string>("");
  const [isEmail, setIsEmail] = useState<boolean>(true);
  const [isEmailValid, setIsEmailValid] = useState<boolean>(true);
  const [message, setMessage] = useState<string>("");
  const [isMessage, setIsMessage] = useState<boolean>(true);
  const [isMessageSent, setIsMessageSent] = useState<boolean>(false);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();

    if (name === "") {
      setIsName(false);
      console.log("Please enter your name");
    }
    if (email === "") {
      setIsEmail(false);
      console.log("Please enter your email");
    } else {
      checkEmailValidity();
    }
    if (message === "") {
      setIsMessage(false);
      console.log("Please enter your message");
    }
    if (isName && isMessage && isEmailValid === true) {
      console.log("Form submitted:");
      console.log("isMessageSent:", isMessageSent);
      setIsMessageSent(true);
      console.log("isMessageSent:", isMessageSent);
    }
  };

  const checkEmailValidity = () => {
    const emailRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/g;
    // /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/g;

    const isValid = emailRegex.test(email);
    console.log("isValid", isValid);
    setIsEmailValid(isValid);
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
          >
            <div className="name-input">
              <input
                // className="name"
                type="text"
                placeholder="Your Name*"
                autoComplete="none"
                aria-label="Your name"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                  setIsName(true);
                }}
                required
              />
              {!isName ? <p className="error">Please enter your name</p> : ""}
            </div>
            <div className="email-input">
              <input
                // className="email"
                type="email"
                placeholder="Your Email*"
                autoComplete="none"
                aria-label="Your email address"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setIsEmail(true);
                }}
                required
              />
              {!isEmail ? (
                <p className="error">Please enter your email address</p>
              ) : !isEmailValid ? (
                <p className="error">Please enter a valid email address</p>
              ) : (
                ""
              )}
            </div>
            <div className="message-input">
              <textarea
                // className="message"
                placeholder="Pineapple does not belong on pizza*"
                value={message}
                onChange={(e) => {
                  setMessage(e.target.value);
                  setIsMessage(true);
                }}
                required
              />
              {!isMessage ? <p className="error">Say something</p> : ""}
            </div>
            <button
              type="submit"
              aria-label="Submit contact form"
              onClick={(e) => handleClick(e)}
            >
              {isMessageSent ? "Error!!!" : "Get In Touch"}
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
        <LinkedinIcon />
        <GitHubIcon />
        <TwitterIcon />
        <FrontendMentorIcon />
      </div>
    </>
  );
};

export default ContactMe;
