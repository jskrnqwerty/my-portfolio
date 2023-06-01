const DownloadButton = () => {
  const fileUrl = "./resume_web-developer_jaskaran-singh-kainth.pdf";
  // const fileName = fileUrl.split("/").pop();

  const downloadResume = () => {
    const link = document.createElement("a");
    link.href = fileUrl;
    link.setAttribute(
      "download",
      "resume_web-developer_jaskaran-singh-kainth.pdf"
    );
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return <button onClick={downloadResume}>Download Resume</button>;
};

export default DownloadButton;
