import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import FrontendMentorIcon from "./icons/FrontendMentorIcon";
import GitHubIcon from "./icons/GitHubIcon";
import LinkedinIcon from "./icons/LinkedinIcon";
import TwitterIcon from "./icons/TwitterIcon";
import ReactGa4 from "react-ga4";

const ContactMe = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [isMessageSent, setIsMessageSent] = useState<boolean>(false);
  const [isFromError, setIsFormError] = useState<boolean>(false);
  const formRef: any = useRef(); //TODO: remove "any" type from formRef
  const currForm = formRef.current;
  const SERVICE_ID = import.meta.env.VITE_REACT_APP_EMAIL_SERVICE_ID;
  const TEMPLATE_ID = import.meta.env.VITE_REACT_APP_EMAIL_TEMPLATE_1;
  const PUBLIC_API_KEY = import.meta.env.VITE_REACT_APP_EMAIL_PUBLIC_API_KEY;

  const trackEvent = (category: string, action: string, label: string) => {
    console.log("GA Event track triggered.");
    ReactGa4.event({ category: category, action: action, label: label });
  };

  const sendEmail = () => {
    const resetForm = () => {
      setName("");
      setEmail("");
      setMessage("");
    };
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, currForm, PUBLIC_API_KEY).then(
      (result) => {
        console.log(result.text);
        setIsMessageSent(true);
        resetForm();
        // e.target.reset();
      },
      (error) => {
        console.log(error.text);
        setIsFormError(true);
      }
    );
  };

  const handleClick = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    sendEmail();
    trackEvent("Form", "Submit form", "form");
  };

  return (
    <>
      <h2>
        <span className="underline">Contact Me</span>
      </h2>
      <div className="about-me-style-container">
        <div className="left-wrapper">
          <form
            // action=""
            ref={formRef}
            onSubmit={handleClick}
          >
            <div className="name-input">
              <input
                type="text"
                name="sender_name"
                placeholder="Your Name*"
                autoComplete="none"
                aria-label="Your name"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
                required
              />
            </div>
            <div className="email-input">
              <input
                type="email"
                name="sender_email"
                placeholder="Your Email*"
                autoComplete="none"
                aria-label="Your email address"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  // setIsEmail(true);
                }}
                required
              />
            </div>
            <div className="message-input">
              <textarea
                name="sender_message"
                placeholder="Pineapple does not belong on pizza*"
                value={message}
                onChange={(e) => {
                  setMessage(e.target.value);
                }}
                required
              />
            </div>
            <input
              type="submit"
              className="btn"
              aria-label="Submit form"
              value={
                isFromError
                  ? "Something went wrong!"
                  : isMessageSent
                  ? "Message Sent!!!"
                  : "Get In Touch"
              }
            />
          </form>
        </div>
        <div className="right-wrapper">
          <div className="right-wrapper_top-item">
            <p>
              If you have any questions about me or my projects, or (politely)
              argue about the best songs of the 90's, I'm your guy!
            </p>
            <p>
              I'm available to grab a coffee and chat! Drop a comment, question,
              concern, or Spotify playlist, and thanks for stopping by!
            </p>
            <p className="last-paragraph">
              Straight shot to my inbox:
              <br />
              <a
                className="link"
                href="mailto: kainth.jaskaran@gmail.com"
              >
                kainth.jaskaran@gmail.com
              </a>
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

export default ContactMe;
