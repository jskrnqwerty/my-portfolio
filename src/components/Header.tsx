import OpenToWorkIcon from "./icons/OpenToWorkIcon";
import { menu } from "../data/Data";
import { resumePath } from "../data/Data";

const Header = () => {
  // const menu: menuType[] = [
  //   { name: "Home", path: "#" },
  //   { name: "About", path: "#about-me" },
  //   { name: "Projects", path: "#projects" },
  //   // { name: "Resume", path: "#resume" },
  //   { name: "Contact", path: "#contact-me" },
  // ];
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

  return (
    <>
      <nav className="menu">
        <a
          // href="./resume.pdf"
          className="open-to-work"
          onClick={downloadResume}
          target="_blank"
          rel="noopener noreferrer"
        >
          <OpenToWorkIcon />
        </a>
        {menu.map((item, index) => (
          <div
            className="menu-item-wrapper"
            key={index}
          >
            <a
              className="menu_item"
              href={item.path}
            >
              {item.name}
            </a>
          </div>
        ))}
      </nav>
    </>
  );
};

export default Header;
