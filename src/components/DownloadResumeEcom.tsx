import { useEffect } from "react";
import { resumePath } from "../data/Data";
import ReactGa4 from "react-ga4";

const trackEvent = (category: string, action: string, label: string) => {
  ReactGa4.event({ category: category, action: action, label: label });
};
//FIXME Download works on local server. Does not work on live site.
const DownloadResumeEcom = () => {
  // ReactGa4.event({ category: "button", action: "submit", label: "download resume" });

  useEffect(() => {
    const downloadResumeEcom = () => {
      trackEvent("resume", "download_resume", "my_ecom_resume");
      console.log("Resume download started");
      const fileUrl = resumePath;
      const fileName =
        "Resume - E-commerce - Jaskaran Singh Kainth (jskrn.com).pdf";
      const link = document.createElement("a");
      link.href = fileUrl;
      link.setAttribute("download", fileName);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    };

    downloadResumeEcom();
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

export default DownloadResumeEcom;
