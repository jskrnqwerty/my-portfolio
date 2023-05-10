import AccesibilityIcon from "../assets/icons/AccessibilityIcon";
import AgileScrumIcon from "../assets/icons/AgileScrumIcon";
import ApiIcon from "../assets/icons/ApiIcon";
import BigCommerceIcon from "../assets/icons/BigCommerceIcon";
import BootstrapIcon from "../assets/icons/BootstrapIcon";
import CreateReactAppIcon from "../assets/icons/CreateReactAppIcon";
import CSSFlexBoxIcon from "../assets/icons/CssFlexboxIcon";
import CSSGridIcon from "../assets/icons/CssGridIcon";
import CssIcon from "../assets/icons/CssIcon";
import DomIcon from "../assets/icons/DomIcon";
import FigmaIcon from "../assets/icons/FIgmaIcon";
import GitHubIcon from "../assets/icons/GitHubIcon";
import GitHubPagesIcon from "../assets/icons/GitHubPagesIcon";
import GitIcon from "../assets/icons/GitIcon";
import HtmlIcon from "../assets/icons/HtmlIcon";
import JavascriptIcon from "../assets/icons/JavascriptIcon";
import MarkdownIcon from "../assets/icons/MarkdownIcon";
import MuiIcon from "../assets/icons/MuiIcon";
import NetlifyIcon from "../assets/icons/NetlifyIcon";
import NpmIcon from "../assets/icons/NpmIcon";
import PatternIcon from "../assets/icons/PatternIcon";
import PhotoshopIcon from "../assets/icons/PhotoshopIcon";
import PythonIcon from "../assets/icons/PythonIcon";
import ReactIcon from "../assets/icons/ReactIcon";
import ReactRouterIcon from "../assets/icons/ReactRouterIcon";
import ReduxIcon from "../assets/icons/ReduxIcon";
import ResponsiveDesignIcon from "../assets/icons/ResponsiveDesignIcon";
import SassIcon from "../assets/icons/SassIcon";
import SeoIcon from "../assets/icons/SeoIcon";
import SquarespaceIcon from "../assets/icons/SquarespaceIcon";
import ThinkingIcon from "../assets/icons/ThinkingIcon";
import TypescriptIcon from "../assets/icons/TypescriptIcon";
import ViteIcon from "../assets/icons/ViteIcon";
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
      name: "Git • GitHub",
      icon: <GitIcon />,
    },
    // {
    //   name: "GitHub",
    //   icon: <GitHubIcon />,
    // },
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
    {
      name: "Accessibility",
      icon: <AccesibilityIcon />,
    },
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
