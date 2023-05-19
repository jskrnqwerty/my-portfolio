import ApiIcon from "../components/icons/ApiIcon";
import CssIcon from "../components/icons/CssIcon";
import MuiIcon from "../components/icons/MuiIcon";
import ReactIcon from "../components/icons/ReactIcon";
import ReactRouterIcon from "../components/icons/ReactRouterIcon";
import ResponsiveDesignIcon from "../components/icons/ResponsiveDesignIcon";
import SassIcon from "../components/icons/SassIcon";
import TypescriptIcon from "../components/icons/TypescriptIcon";
import { iconColors, bgColors, projectsType, menuType } from "../types/Types";

export const accentColor: iconColors = "#000";
export const bgColor: bgColors = "rgb(245, 245, 245)";
export const iconHoverColor = accentColor;

export const menu: menuType[] = [
  { name: "Home", path: "#" },
  { name: "About", path: "#about-me" },
  { name: "Projects", path: "#projects" },
  // { name: "Resume", path: "#resume" },
  { name: "Contact", path: "#contact-me" },
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
  //   githubRepoUrl: "#",
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
