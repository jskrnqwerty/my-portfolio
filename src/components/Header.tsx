import { menu } from "../data/Data";

const Header = () => {
  // const menu: menuType[] = [
  //   { name: "Home", path: "#" },
  //   { name: "About", path: "#about-me" },
  //   { name: "Projects", path: "#projects" },
  //   // { name: "Resume", path: "#resume" },
  //   { name: "Contact", path: "#contact-me" },
  // ];

  return (
    <>
      <nav className="menu">
        <a href="#contact-me">
          <img
            src="src/assets/images/open-to-work.png"
            // src="https://raw.githubusercontent.com/jskrnqwerty/my-portfolio/master/src/assets/images/open-to-work.png"
            alt="open-to-work"
            className="open-to-work"
          />
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
