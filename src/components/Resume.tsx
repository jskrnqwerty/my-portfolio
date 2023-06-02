// import DownloadButton from "./DownloadButton";
// import ResumeIcon from "./icons/ResumeIcon";
// import {
//   useNavigate,
//   //  Navigate,
// } from "react-router-dom";
// import { useEffect } from "react";
import { resumePath } from "../data/Data";

const Resume = () => {
  // const navigateTo = useNavigate();
  // useEffect(() => {
  //   console.log("useEffect triggered");
  //   navigateTo(resumePath);
  //   window.location.reload();
  // }, []);

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
