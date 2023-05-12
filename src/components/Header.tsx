import { menuType } from "../types/Types";

const Header = () => {
  const menu: menuType[] = [
    { name: "Home", path: "#" },
    { name: "About", path: "#about-me" },
    { name: "Projects", path: "#projects" },
    // { name: "Resume", path: "#resume" },
    { name: "Contact", path: "#contact-me" },
  ];

  return (
    <>
      <nav className="menu">
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
