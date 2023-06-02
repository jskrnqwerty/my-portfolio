// import DownloadButton from "./DownloadButton";
// import ResumeIcon from "./icons/ResumeIcon";
// import {
//   useNavigate,
//   //  Navigate,
// } from "react-router-dom";
// import { useEffect } from "react";
import { resumePath } from "../data/Data";
// import DownloadButton from "./DownloadButton";
import DownloadIcon from "./icons/DownloadIcon";

const Resume = () => {
  const fileUrl = resumePath;

  // const navigateTo = useNavigate();
  // useEffect(() => {
  //   console.log("useEffect triggered");
  //   navigateTo(`/${resumePath}`);
  //   window.location.reload();
  // }, []);
  const downloadResume = () => {
    const link = document.createElement("a");
    link.href = fileUrl;
    link.setAttribute(
      "download",
      "Resume - Web Developer - Jaskaran Singh Kainth.pdf"
    );
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      {/* <h1>Resume</h1> */}
      {/* {setShowResume(true)} */}
      {/* {showResume ? handleRedirect : ""} */}
      {/* <Navigate
        to="/resume.pdf"
        replace={true}
      /> */}
      <div className="pdf-container">
        {/* <h5>updated on May 30, 2023</h5> */}
        {/* <DownloadButton /> */}
        <div
          className="download-icon"
          onClick={downloadResume}
        >
          <DownloadIcon />
        </div>
        <iframe
          // https://tinytip.co/tips/html-pdf-params/
          src={resumePath}
        />
      </div>
      {/* <h2>
        <span className="underline">Résumé</span>
        <p className="pronunciation lowercase light-text">
          Updated May 30, 2023
        </p>
        </h2>
        <div className="about-me-style-container">
        <div className="left-wrapper">
        <ResumeIcon />
        </div>
        <div className="right-wrapper">
        <div className="right-wrapper_top-item">
        <p className="last-paragraph">
        To know more about what I have been up to, download my résumé.
        </p>
        </div>
        <div className="right-wrapper_bottom-item">
        <DownloadButton />
        </div>
        </div>
      </div> */}
    </>
  );
};

export default Resume;
