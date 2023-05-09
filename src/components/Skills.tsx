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
import { iconColors, bgColors, skillsType } from "../types/Types";

const Skills = () => {
  const accentColor: iconColors = "#000";
  const bgColor: bgColors = "rgb(245, 245, 245)";

  const skills: skillsType[] = [
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
      name: "Git • GitHub",
      icon: (
        <GitIcon
          fillColor={accentColor}
          strokeColor={accentColor}
          bgColor={bgColor}
        />
      ),
    },
    // {
    //   name: "GitHub",
    //   icon: <GitHubIcon fillColor={accentColor} />,
    // },
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
    { name: "GitHub Pages", icon: <GitHubPagesIcon fillColor={accentColor} /> },
    { name: "Netlify", icon: <NetlifyIcon fillColor={accentColor} /> },
    { name: "Squarespace", icon: <SquarespaceIcon fillColor={accentColor} /> },
    { name: "BigCommerce", icon: <BigCommerceIcon fillColor={accentColor} /> },
    { name: "Python", icon: <PythonIcon fillColor={accentColor} /> },
    { name: "Agile • Scrum", icon: <AgileScrumIcon fillColor={accentColor} /> },
    { name: "SEO", icon: <SeoIcon fillColor={accentColor} /> },
    { name: "Markdown", icon: <MarkdownIcon fillColor={accentColor} /> },
    {
      name: "Responsive Design",
      icon: <ResponsiveDesignIcon fillColor={accentColor} />,
    },
    { name: "DOM", icon: <DomIcon fillColor={accentColor} /> },
    { name: "CSS Flexbox", icon: <CSSFlexBoxIcon strokeColor={accentColor} /> },
    { name: "CSS Grid", icon: <CSSGridIcon fillColor={accentColor} /> },
    {
      name: "Accessibility",
      icon: <AccesibilityIcon strokeColor={accentColor} />,
    },
    // {
    //   name: "Pattern recognition",
    //   icon: <PatternIcon fillColor={accentColor} />,
    // },
    // {
    //   name: "Critical Thinking",
    //   icon: <ThinkingIcon strokeColor={accentColor} />,
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
