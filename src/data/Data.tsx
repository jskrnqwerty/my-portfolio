// import AccesibilityIcon from "../components/icons/AccessibilityIcon";
import AgileScrumIcon from "../components/icons/AgileScrumIcon";
import ApiIcon from "../components/icons/ApiIcon";
import BigCommerceIcon from "../components/icons/BigCommerceIcon";
import BootstrapIcon from "../components/icons/BootstrapIcon";
import CreateReactAppIcon from "../components/icons/CreateReactAppIcon";
import CSSFlexBoxIcon from "../components/icons/CssFlexboxIcon";
import CSSGridIcon from "../components/icons/CssGridIcon";
import CssIcon from "../components/icons/CssIcon";
import DomIcon from "../components/icons/DomIcon";
import FigmaIcon from "../components/icons/FIgmaIcon";
import GitHubIcon from "../components/icons/GitHubIcon";
import GitHubPagesIcon from "../components/icons/GitHubPagesIcon";
import GitIcon from "../components/icons/GitIcon";
import HtmlIcon from "../components/icons/HtmlIcon";
import JavascriptIcon from "../components/icons/JavascriptIcon";
import MarkdownIcon from "../components/icons/MarkdownIcon";
import MuiIcon from "../components/icons/MuiIcon";
import NetlifyIcon from "../components/icons/NetlifyIcon";
import NpmIcon from "../components/icons/NpmIcon";
// import PatternIcon from "../components/icons/PatternIcon";
import PhotoshopIcon from "../components/icons/PhotoshopIcon";
import PythonIcon from "../components/icons/PythonIcon";
import ReactIcon from "../components/icons/ReactIcon";
import ReactRouterIcon from "../components/icons/ReactRouterIcon";
import ReduxToolkitIcon from "../components/icons/ReduxToolkitIcon";
import ResponsiveDesignIcon from "../components/icons/ResponsiveDesignIcon";
import SassIcon from "../components/icons/SassIcon";
import SeoIcon from "../components/icons/SeoIcon";
import SquarespaceIcon from "../components/icons/SquarespaceIcon";
// import ThinkingIcon from "/components/icons/ThinkingIcon";
import TypescriptIcon from "../components/icons/TypescriptIcon";
import ViteIcon from "../components/icons/ViteIcon";

import {
  iconColors,
  bgColors,
  projectsType,
  menuType,
  skillType,
} from "../types/Types";

export const accentColor: iconColors = "#000";
export const bgColor: bgColors = "rgb(245, 245, 245)";
export const iconHoverColor = accentColor;
export const resumePath = "/Resume - Web Developer - Jaskaran Singh Kainth.pdf";

export const menu: menuType[] = [
  { name: "Home", path: "#" },
  { name: "About", path: "#about-me" },
  { name: "Projects", path: "#projects" },
  { name: "Contact", path: "#contact-me" },
  // { name: "Resume", path: "#resume" },
];

export const projects: projectsType[] = [
  {
    title: "Don't Keep",
    intro: "Note taking app - A Google Keep clone",
    description: [
      "Create notes, pin them to top, edit later, move to archives, or trash them. Drag and drop notes to rearranage the responsive grid.",
      // "Drag and drop notes to rearranage the responsive grid.",
      // "Material UI components library helped build the app.",
    ],
    imgSrc: "assets/images/laptop-stencil-google-keep.png",
    imgAlt: "Google Keep Clone screenshot",
    madeWith: [
      <ReactIcon />,
      <TypescriptIcon />,
      <MuiIcon />,
      <ReactRouterIcon />,
    ],
    liveSiteUrl: "https://jskrnqwerty.github.io/dont-keep-usingTypeScript/",
    githubRepoUrl: "https://github.com/jskrnqwerty/dont-keep-usingTypeScript",
  },
  {
    title: "Weather App",
    intro: "Check current weather",
    description: [
      "Weather App makes use of two OpenWeather API's; first, to fetch the list of cities all over the world, and then their weather, respectively.",
    ],
    imgSrc: "assets/gif/weather-app-animated.gif",
    imgAlt: "Weather App GIF",
    madeWith: [<ReactIcon />, <TypescriptIcon />, <ApiIcon />, <CssIcon />],
    liveSiteUrl: "https://jskrnqwerty.github.io/weather-app/",
    githubRepoUrl: "https://github.com/jskrnqwerty/weather-app",
  },
  {
    title: "Fylo",
    intro: "A simple landing page",
    description: [
      "Fylo is a simple, fully responsive landing page build as an answer to a Frontend Mentor challenge.",
    ],
    imgSrc: "assets/images/laptop-stencil-fylo.png",
    imgAlt: "Fylo Landing Page screenshot",
    madeWith: [
      <ReactIcon />,
      <TypescriptIcon />,
      <ResponsiveDesignIcon />,
      <CssIcon />,
    ],
    liveSiteUrl: "https://jskrnqwerty.github.io/frontend-mentor-fylo/",
    githubRepoUrl: "https://github.com/jskrnqwerty/frontend-mentor-fylo/",
    frontendMentorUrl:
      "https://www.frontendmentor.io/solutions/fylo-mobilefirst-solution-using-css-grid-and-flexbox-Da1EuDa8nS",
  },
  // {
  //   title: "Joke Generator",
  //   intro: "Project Intro",
  //   description:
  //     [" Project Description. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."],
  //   imgSrc: "assets/images/laptop-stencil.png",
  //   imgAlt: "Joke Generator screenshot",
  //   madeWith: [<ReactIcon />, <TypescriptIcon />, <ApiIcon />, <CssIcon />],

  //   liveSiteUrl: "#",
  //   githubRepoUrl: "https://github.com/jskrnqwerty/joke-generator",
  // },
  {
    title: "Jskrn.com",
    intro: "Web Developer Portfolio",
    description: [
      "A personal web development portfolio build to document skills and projects",
    ],
    imgSrc: "assets/images/laptop-stencil-jskrn.png",
    imgAlt: "Jskrn.com screenshot",
    madeWith: [
      <ReactIcon />,
      <TypescriptIcon />,
      <SassIcon />,
      <ResponsiveDesignIcon />,
    ],
    liveSiteUrl: "#",
    githubRepoUrl: "https://github.com/jskrnqwerty/my-portfolio",
  },
];

export const skills: skillType[] = [
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
    icon: <ReduxToolkitIcon />,
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
