import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import FrontendMentorIcon from "./icons/FrontendMentorIcon";
import GitHubIcon from "./icons/GitHubIcon";
import LinkedinIcon from "./icons/LinkedinIcon";
import TwitterIcon from "./icons/TwitterIcon";

const ContactMe = () => {
  const [name, setName] = useState<string>("");
  // const [isName, setIsName] = useState<boolean>(true);
  const [email, setEmail] = useState<string>("");
  // const [isEmail, setIsEmail] = useState<boolean>(true);
  // const [isEmailValid, setIsEmailValid] = useState<boolean>(true);
  const [message, setMessage] = useState<string>("");
  // const [isMessage, setIsMessage] = useState<boolean>(true);
  const [isMessageSent, setIsMessageSent] = useState<boolean>(false);

  const formRef: any = useRef(); //TODO: remove "any" type from formRef

  const currForm = formRef.current;

  // if (currForm === "") return null;

  const resetForm = () => {
    setName("");
    setEmail("");
    setMessage("");
  };

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_krp21or",
        // "template_3xbsl89",
        "template_vp10ayu",
        currForm,
        "CiIl2S76uR87bcKtb"
      )
      .then(
        (result) => {
          console.log(result.text);
          setIsMessageSent(true);
          resetForm();
          // e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  // const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
  //   e.preventDefault();

  //   if (name === "") {
  //     setIsName(false);
  //     console.log("Please enter your name");
  //   }
  //   if (email === "") {
  //     setIsEmail(false);
  //     console.log("Please enter your email");
  //   } else {
  //     checkEmailValidity();
  //   }
  //   if (message === "") {
  //     setIsMessage(false);
  //     console.log("Please enter your message");
  //   }
  //   if (isName && isMessage && isEmailValid === true) {
  //     console.log("Form submitted:");
  //     console.log("isMessageSent:", isMessageSent);
  //     setIsMessageSent(true);
  //     console.log("isMessageSent:", isMessageSent);
  //   }
  // };

  // const checkEmailValidity = () => {
  //   const emailRegex =
  //     /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/g;
  //   // /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/g;

  //   const isValid = emailRegex.test(email);
  //   console.log("isValid", isValid);
  //   setIsEmailValid(isValid);
  // };

  return (
    <>
      <h2>
        <span className="underline">Contact Me</span>
      </h2>
      {/* <div className="contact-container"> */}
      <div className="about-me-style-container">
        {/* <div className="contact-form"> */}
        <div className="left-wrapper">
          <form
            // action=""
            ref={formRef}
            onSubmit={sendEmail}
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
                  // setIsName(true);
                }}
                required
              />
              {/* {!isName ? <p className="error">Please enter your name</p> : ""} */}
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
              {/* {!isEmail ? (
                <p className="error">Please enter your email address</p>
              ) : !isEmailValid ? (
                <p className="error">Please enter a valid email address</p>
              ) : (
                ""
              )} */}
            </div>
            <div className="message-input">
              <textarea
                name="sender_message"
                placeholder="Pineapple does not belong on pizza*"
                value={message}
                onChange={(e) => {
                  setMessage(e.target.value);
                  // setIsMessage(true);
                }}
                required
              />
              {/* {!isMessage ? <p className="error">Say something</p> : ""} */}
            </div>
            <input
              type="submit"
              className="btn"
              aria-label="Submit form"
              // onClick={(e) => handleClick(e)}
              value={isMessageSent ? "Message Sent!!!" : "Get In Touch"}
            />
            {/* {isMessageSent ? "Error!!!" : "Get In Touch"}
            </input> */}
          </form>
        </div>
        {/* <div className="contact-message"> */}
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
