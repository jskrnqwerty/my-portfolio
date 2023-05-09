import CssIcon from "../assets/icons/CssIcon";
import HtmlIcon from "../assets/icons/HtmlIcon";
import ReactIcon from "../assets/icons/ReactIcon";
import TypescriptIcon from "../assets/icons/TypescriptIcon";
import { iconColors, bgColors, projectsType } from "../types/Types";

export const accentColor: iconColors = "#000";
export const bgColor: bgColors = "rgb(245, 245, 245)";
export const projects: projectsType[] = [
  {
    title: "Dont Keep",
    imgSrc: "src/assets/images/laptop-stencil-google-keep.png",
    imgAlt: "Google Keep Clone screenshot",
    intro: "Google Keep Clone",
    description: "Google Keep Clone was created to keep track of ",
    madeWith: [<ReactIcon />, <TypescriptIcon />, <CssIcon />, <HtmlIcon />],
    liveSiteUrl: "https://jskrnqwerty.github.io/dont-keep-usingTypeScript/",
    githubRepoUrl: "https://github.com/jskrnqwerty/dont-keep-usingTypeScript",
  },
  {
    title: "Project Title",
    imgSrc: "src/assets/images/laptop-stencil.png",
    imgAlt: "Image Alt Text",
    intro: "Project Intro",
    description: " Project Description",
    madeWith: [<ReactIcon />, <TypescriptIcon />, <CssIcon />, <HtmlIcon />],
    liveSiteUrl: "",
    githubRepoUrl: "",
  },
  {
    title: "Project Title",
    imgSrc: "src/assets/images/laptop-stencil.png",
    imgAlt: "Image Alt Text",
    intro: "Project Intro",
    description: " Project Description",
    madeWith: [<ReactIcon />, <TypescriptIcon />, <CssIcon />, <HtmlIcon />],
    liveSiteUrl: "",
    githubRepoUrl: "",
  },
];
