import { resumePath } from "../data/Data";

const DownloadButton = () => {
  const fileUrl = resumePath;
  // const fileName = fileUrl.split("/").pop();

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

  return <button onClick={downloadResume}>Download</button>;
};

export default DownloadButton;
