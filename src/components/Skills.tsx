// import AccesibilityIcon from "../assets/icons/AccessibilityIcon";
import AgileScrumIcon from "./icons/AgileScrumIcon";
import ApiIcon from "./icons/ApiIcon";
import BigCommerceIcon from "./icons/BigCommerceIcon";
import BootstrapIcon from "./icons/BootstrapIcon";
import CreateReactAppIcon from "./icons/CreateReactAppIcon";
import CSSFlexBoxIcon from "./icons/CssFlexboxIcon";
import CSSGridIcon from "./icons/CssGridIcon";
import CssIcon from "./icons/CssIcon";
import DomIcon from "./icons/DomIcon";
import FigmaIcon from "./icons/FIgmaIcon";
import GitHubIcon from "./icons/GitHubIcon";
import GitHubPagesIcon from "./icons/GitHubPagesIcon";
import GitIcon from "./icons/GitIcon";
import HtmlIcon from "./icons/HtmlIcon";
import JavascriptIcon from "./icons/JavascriptIcon";
import MarkdownIcon from "./icons/MarkdownIcon";
import MuiIcon from "./icons/MuiIcon";
import NetlifyIcon from "./icons/NetlifyIcon";
import NpmIcon from "./icons/NpmIcon";
// import PatternIcon from "../assets/icons/PatternIcon";
import PhotoshopIcon from "./icons/PhotoshopIcon";
import PythonIcon from "./icons/PythonIcon";
import ReactIcon from "./icons/ReactIcon";
import ReactRouterIcon from "./icons/ReactRouterIcon";
import ReduxIcon from "./icons/ReduxIcon";
import ResponsiveDesignIcon from "./icons/ResponsiveDesignIcon";
import SassIcon from "./icons/SassIcon";
import SeoIcon from "./icons/SeoIcon";
import SquarespaceIcon from "./icons/SquarespaceIcon";
// import ThinkingIcon from "../assets/icons/ThinkingIcon";
import TypescriptIcon from "./icons/TypescriptIcon";
import ViteIcon from "./icons/ViteIcon";
import { skillsType } from "../types/Types";

const Skills = () => {
  const skills: skillsType[] = [
    {
      name: "React.js",
      icon: <ReactIcon />,
    },
    {
      name: "TypeScript",
      icon: <TypescriptIcon />,
    },
    {
      name: "JavaScript • ES6",
      icon: <JavascriptIcon />,
    },
    {
      name: "SASS • SCSS",
      icon: <SassIcon />,
    },
    {
      name: "CSS 3",
      icon: <CssIcon />,
    },
    {
      name: "HTML 5",
      icon: <HtmlIcon />,
    },
    {
      name: "Git",
      icon: <GitIcon />,
    },
    {
      name: "GitHub",
      icon: <GitHubIcon />,
    },
    {
      name: "React Router",
      icon: <ReactRouterIcon />,
    },
    {
      name: "Redux Toolkit",
      icon: <ReduxIcon />,
    },
    {
      name: "NPM",
      icon: <NpmIcon />,
    },
    {
      name: "Vite",
      icon: <ViteIcon />,
    },
    {
      name: "Create React App",
      icon: <CreateReactAppIcon />,
    },
    { name: "API", icon: <ApiIcon /> },
    { name: "Material UI", icon: <MuiIcon /> },
    { name: "Bootstrap", icon: <BootstrapIcon /> },
    { name: "Figma", icon: <FigmaIcon /> },
    {
      name: "Photoshop",
      icon: <PhotoshopIcon />,
    },
    { name: "GitHub Pages", icon: <GitHubPagesIcon /> },
    { name: "Netlify", icon: <NetlifyIcon /> },
    { name: "Squarespace", icon: <SquarespaceIcon /> },
    { name: "BigCommerce", icon: <BigCommerceIcon /> },
    { name: "Python", icon: <PythonIcon /> },
    { name: "Agile • Scrum", icon: <AgileScrumIcon /> },
    { name: "SEO", icon: <SeoIcon /> },
    { name: "Markdown", icon: <MarkdownIcon /> },
    {
      name: "Responsive Design",
      icon: <ResponsiveDesignIcon />,
    },
    { name: "DOM", icon: <DomIcon /> },
    { name: "CSS Flexbox", icon: <CSSFlexBoxIcon /> },
    { name: "CSS Grid", icon: <CSSGridIcon /> },
    // {
    //   name: "Accessibility",
    //   icon: <AccesibilityIcon />,
    // },
    // {
    //   name: "Pattern recognition",
    //   icon: <PatternIcon />,
    // },
    // {
    //   name: "Critical Thinking",
    //   icon: <ThinkingIcon />,
    // },
  ];
  return (
    <>
      <h2>
        <span className="underline">Skills</span>
      </h2>
      <div className="skills-container">
        {skills.map((item, index) => (
          <div
            className="skill-wrapper"
            key={index}
          >
            {item.icon}
            <p>{item.name}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Skills;
