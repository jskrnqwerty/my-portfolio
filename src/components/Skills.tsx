import ApiIcon from "../assets/icons/ApiIcon";
import BigCommerceIcon from "../assets/icons/BigCommerceIcon";
import BootstrapIcon from "../assets/icons/BootstrapIcon";
import CreateReactAppIcon from "../assets/icons/CreateReactAppIcon";
import CssIcon from "../assets/icons/CssIcon";
import FigmaIcon from "../assets/icons/FIgmaIcon";
import GitHubIcon from "../assets/icons/GitHubIcon";
import GitHubPagesIcon from "../assets/icons/GitHubPagesIcon";
import GitIcon from "../assets/icons/GitIcon";
import HtmlIcon from "../assets/icons/HtmlIcon";
import JavascriptIcon from "../assets/icons/JavascriptIcon";
import MuiIcon from "../assets/icons/MuiIcon";
import NetlifyIcon from "../assets/icons/NetlifyIcon";
import NpmIcon from "../assets/icons/NpmIcon";
import PhotoshopIcon from "../assets/icons/PhotoshopIcon";
import PythonIcon from "../assets/icons/PythonIcon";
import ReactIcon from "../assets/icons/ReactIcon";
import ReactRouterIcon from "../assets/icons/ReactRouterIcon";
import ReduxIcon from "../assets/icons/ReduxIcon";
import SassIcon from "../assets/icons/SassIcon";
import SquarespaceIcon from "../assets/icons/SquarespaceIcon";
import TypescriptIcon from "../assets/icons/TypescriptIcon";
import ViteIcon from "../assets/icons/ViteIcon";
import { iconColors, bgColors } from "../types/types";

const Skills = () => {
  const accentColor: iconColors = "#000";
  const bgColor: bgColors = "rgb(245, 245, 245)";

  const skills = [
    {
      name: "React.js",
      icon: (
        <ReactIcon
          fillColor={accentColor}
          strokeColor={accentColor}
        />
      ),
    },
    {
      name: "TypeScript",
      icon: (
        <TypescriptIcon
          fillColor={accentColor}
          bgColor={bgColor}
        />
      ),
    },
    {
      name: "JavaScript • ES6",
      icon: (
        <JavascriptIcon
          fillColor={accentColor}
          bgColor={bgColor}
        />
      ),
    },
    {
      name: "SASS • SCSS",
      icon: <SassIcon fillColor={accentColor} />,
    },
    {
      name: "CSS 3",
      icon: (
        <CssIcon
          fillColor={accentColor}
          bgColor={bgColor}
        />
      ),
    },
    {
      name: "HTML 5",
      icon: (
        <HtmlIcon
          fillColor={accentColor}
          bgColor={bgColor}
        />
      ),
    },
    {
      name: "React Router",
      icon: <ReactRouterIcon fillColor={accentColor} />,
    },
    {
      name: "Redux Toolkit",
      icon: <ReduxIcon fillColor={accentColor} />,
    },
    {
      name: "NPM",
      icon: (
        <NpmIcon
          fillColor={accentColor}
          bgColor={bgColor}
        />
      ),
    },
    {
      name: "Vite",
      icon: (
        <ViteIcon
          fillColor={accentColor}
          bgColor={bgColor}
        />
      ),
    },
    {
      name: "Create React App",
      icon: <CreateReactAppIcon fillColor={accentColor} />,
    },
    { name: "API", icon: <ApiIcon fillColor={accentColor} /> },
    { name: "Material UI", icon: <MuiIcon fillColor={accentColor} /> },
    { name: "Bootstrap", icon: <BootstrapIcon fillColor={accentColor} /> },
    { name: "Figma", icon: <FigmaIcon fillColor={accentColor} /> },
    {
      name: "Photoshop",
      icon: <PhotoshopIcon fillColor={accentColor} />,
    },
    {
      name: "Git",
      icon: (
        <GitIcon
          fillColor={accentColor}
          strokeColor={accentColor}
          bgColor={bgColor}
        />
      ),
    },
    {
      name: "GitHub",
      icon: <GitHubIcon fillColor={accentColor} />,
    },
    { name: "GitHub Pages", icon: <GitHubPagesIcon fillColor={accentColor} /> },
    { name: "Netlify", icon: <NetlifyIcon fillColor={accentColor} /> },
    { name: "Squarespace", icon: <SquarespaceIcon fillColor={accentColor} /> },
    { name: "BigCommerce", icon: <BigCommerceIcon fillColor={accentColor} /> },
    { name: "Python", icon: <PythonIcon fillColor={accentColor} /> },
    { name: "Responsive Design", icon: "Logo" },
    { name: "Accessibility", icon: "Logo" },
    { name: "Agile • Scrum", icon: "Logo" },
    { name: "SEO", icon: "Logo" },
    { name: "Markdown", icon: "Logo" },
    // { name: "DOM", icon: "Logo" },
    // { name: "CSS Flexbox", icon: "Logo" },
    // { name: "CSS Grid", icon: "Logo" },
  ];
  return (
    <>
      <h2>
        <span className="underline">Skills</span>
      </h2>
      <div className="skills-container">
        {skills.map((item, index) => (
          <>
            <div
              className="skill-wrapper"
              key={index}
            >
              {item.icon}
              <p>{item.name}</p>
            </div>
          </>
        ))}
      </div>
    </>
  );
};

export default Skills;
