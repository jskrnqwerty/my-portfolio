import { useEffect } from "react";
import { resumePath } from "../data/Data";

const DownloadResume = () => {
  useEffect(() => {
    const downloadResume = () => {
      console.log("Resume download started");
      const fileUrl = resumePath;
      const fileName =
        "Resume - Web Developer - Jaskaran Singh Kainth (jskrn.com).pdf";
      const link = document.createElement("a");
      link.href = fileUrl;
      link.setAttribute("download", fileName);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    };

    downloadResume();
    console.log("Resume downloaded.");
  }, []);
  return (
    <div className="download-resume">
      <h3>Résumé downloaded</h3>
      <h5>
        Go back to{" "}
        <a
          className="link"
          href="https://jskrn.com/"
        >
          jskrn.com
        </a>
      </h5>
    </div>
  );
};

export default DownloadResume;
