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
            action=""
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
              placeholder="Pineapple does not belong on a pizza"
              required
            />
            <button
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
            <span>kainth.jaskaran@gmail.com</span>
          </p>
        </div>
      </div>
    </>
  );
};

export default ContactMe;
