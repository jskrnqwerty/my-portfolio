import ApiIcon from "../assets/icons/ApiIcon";
import CssIcon from "../assets/icons/CssIcon";
import MuiIcon from "../assets/icons/MuiIcon";
import ReactIcon from "../assets/icons/ReactIcon";
import ReactRouterIcon from "../assets/icons/ReactRouterIcon";
import ResponsiveDesignIcon from "../assets/icons/ResponsiveDesignIcon";
import SassIcon from "../assets/icons/SassIcon";
import TypescriptIcon from "../assets/icons/TypescriptIcon";
import { iconColors, bgColors, projectsType } from "../types/Types";

export const accentColor: iconColors = "#000";
export const bgColor: bgColors = "rgb(245, 245, 245)";
export const iconHoverColor = accentColor;

export const projects: projectsType[] = [
  {
    title: "Dont Keep",
    intro: "Note taking app - A Google Keep clone",
    description: "Google Keep Clone was created to keep track of ",
    imgSrc: "src/assets/images/laptop-stencil-google-keep.png",
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
    intro: "Current weather",
    description: ` Project Description.
    ${(<p>Hello World</p>)}
    ${(
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry
      </p>
    )} 
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s`,
    imgSrc: "src/assets/images/laptop-stencil.png",
    imgAlt: "Image Alt Text",
    madeWith: [<ReactIcon />, <TypescriptIcon />, <ApiIcon />, <CssIcon />],
    liveSiteUrl: "#",
    githubRepoUrl: "#",
  },
  {
    title: "Joke Generator",
    intro: "Project Intro",
    description:
      " Project Description. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    imgSrc: "src/assets/images/laptop-stencil.png",
    imgAlt: "Image Alt Text",
    madeWith: [<ReactIcon />, <TypescriptIcon />, <ApiIcon />, <CssIcon />],

    liveSiteUrl: "#",
    githubRepoUrl: "#",
  },
  {
    title: "Fylo Homepage",
    intro: "Project Intro",
    description:
      " Project Description. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    imgSrc: "src/assets/images/laptop-stencil.png",
    imgAlt: "Image Alt Text",
    madeWith: [
      <ReactIcon />,
      <TypescriptIcon />,
      <ResponsiveDesignIcon />,
      <CssIcon />,
    ],
    liveSiteUrl: "https://jskrnqwerty.github.io/frontend-mentor-fylo/",
    githubRepoUrl: "https://github.com/jskrnqwerty/frontend-mentor-fylo/",
  },
  {
    title: "Jskrn.com",
    intro: "Web development portfolio",
    description:
      " Project Description. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    imgSrc: "src/assets/images/laptop-stencil.png",
    imgAlt: "Image Alt Text",
    madeWith: [
      <ReactIcon />,
      <TypescriptIcon />,
      <SassIcon />,
      <ResponsiveDesignIcon />,
      <CssIcon />,
    ],
    liveSiteUrl: "#",
    githubRepoUrl: "https://github.com/jskrnqwerty/my-portfolio",
  },
];
