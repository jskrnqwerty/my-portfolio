import OpenToWorkIcon from "./icons/OpenToWorkIcon";
import { menu } from "../data/Data";

const Header = () => {
  // const menu: menuType[] = [
  //   { name: "Home", path: "#" },
  //   { name: "About", path: "#about-me" },
  //   { name: "Projects", path: "#projects" },
  //   // { name: "Resume", path: "#resume" },
  //   { name: "Contact", path: "#contact-me" },
  // ];
  const downloadResume = () => {};

  return (
    <>
      <nav className="menu">
        <a
          href="./resume_web-developer_jaskaran-singh-kainth.pdf"
          className="open-to-work"
          onClick={downloadResume}
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
