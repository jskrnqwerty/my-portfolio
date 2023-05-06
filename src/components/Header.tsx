const Header = () => {
  type menuType = { name: string; path: string };
  const menu: menuType[] = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about-me" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact-me" },
  ];

  return (
    <>
      <ul className="header_menu">
        {menu.map((item, index) => (
          <li
            className="header_menu_item"
            key={index}
          >
            <a href="#">{item.name}</a>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Header;
