// import DownloadButton from "./DownloadButton";
// import ResumeIcon from "./icons/ResumeIcon";
import { Navigate, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const Resume = () => {
  // const [showResume, setShowResume] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    console.log("useEffect triggered");
    navigate("/resume.pdf");
    window.location.reload();
  }, []);
  // useNavigate("/resume.pdf");

  return (
    <>
      {/* <h1>Resume</h1> */}
      {/* {setShowResume(true)} */}
      {/* {showResume ? handleRedirect : ""} */}
      {/* <Navigate
        to="/resume.pdf"
        replace={true}
      /> */}
      {/* <iframe
        // https://tinytip.co/tips/html-pdf-params/
        src="./resume.pdf#zoom=100#toolbar=0#view=FitH"
        width="100%"
        height="1000px"
        // allow="picture-in-picture full"
        // view="FitH"
        // zoom="100"
        // toolbar="0"
        // style="border:none"
      /> */}
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
