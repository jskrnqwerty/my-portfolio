import DownloadButton from "./DownloadButton";
import ResumeIcon from "./icons/ResumeIcon";
import { Navigate, redirect, useNavigate } from "react-router-dom";
import { useState } from "react";

const Resume = () => {
  const [showResume, setShowResume] = useState(false);
  const navigate = useNavigate();
  navigate("./resume.pdf");
  return (
    <>
      {setShowResume(true)}
      {showResume ? navigate("/resume.pdf") : ""}
      <Navigate to="/resume.pdf" />

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
