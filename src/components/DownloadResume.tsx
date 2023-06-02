import { useEffect } from "react";
import { resumePath } from "../data/Data";

//FIXME Download works on local server. Does not work on live site.
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
    <div className="download-resume wrapper special-page-message">
      <h1>Résumé downloaded</h1>
      <h4>
        Go back to{" "}
        <a
          className="link"
          href="https://jskrn.com/"
        >
          jskrn.com
        </a>
      </h4>
    </div>
  );
};

export default DownloadResume;
