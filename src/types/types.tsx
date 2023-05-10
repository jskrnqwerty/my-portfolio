export type iconColors = "#000" | "orange" | "";
export type bgColors = "rgb(245, 245, 245)" | "";

// export type IconType = {
//   // size?: string;
//   fillColor?: iconColors;
//   strokeColor?: iconColors;
//   bgColor?: bgColors;
// };

export type menuType = { name: string; path: string };

export type skillsType = { name: string; icon: JSX.Element };

export type projectsType = {
  title: string;
  imgSrc: string;
  imgAlt: string;
  intro: string;
  description: any;
  madeWith: JSX.Element[];
  liveSiteUrl?: string;
  githubRepoUrl?: string;
};
