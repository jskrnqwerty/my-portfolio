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
    title: "Weather App",
    imgSrc: "src/assets/images/laptop-stencil.png",
    imgAlt: "Image Alt Text",
    intro: "Project Intro",
    description: ` Project Description.
      ${(<p>Hello World</p>)}
      ${(
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry
        </p>
      )} 
      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s`,
    madeWith: [<ReactIcon />, <TypescriptIcon />, <ApiIcon />, <CssIcon />],
    liveSiteUrl: "",
    githubRepoUrl: "",
  },
  {
    title: "Dont Keep",
    imgSrc: "src/assets/images/laptop-stencil-google-keep.png",
    imgAlt: "Google Keep Clone screenshot",
    intro: "Google Keep Clone",
    description: "Google Keep Clone was created to keep track of ",
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
    title: "Joke Generator",
    imgSrc: "src/assets/images/laptop-stencil.png",
    imgAlt: "Image Alt Text",
    intro: "Project Intro",
    description:
      " Project Description. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    madeWith: [<ReactIcon />, <TypescriptIcon />, <ApiIcon />, <CssIcon />],

    liveSiteUrl: "",
    githubRepoUrl: "",
  },
  {
    title: "Fylo Homepage",
    imgSrc: "src/assets/images/laptop-stencil.png",
    imgAlt: "Image Alt Text",
    intro: "Project Intro",
    description:
      " Project Description. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    madeWith: [
      <ReactIcon />,
      <TypescriptIcon />,
      <ResponsiveDesignIcon />,
      <CssIcon />,
    ],
    liveSiteUrl: "",
    githubRepoUrl: "",
  },
  {
    title: "This Website",
    imgSrc: "src/assets/images/laptop-stencil.png",
    imgAlt: "Image Alt Text",
    intro: "Project Intro",
    description:
      " Project Description. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    madeWith: [
      <ReactIcon />,
      <TypescriptIcon />,
      <SassIcon />,
      <ResponsiveDesignIcon />,
      <CssIcon />,
    ],
    liveSiteUrl: "",
    githubRepoUrl: "",
  },
];
