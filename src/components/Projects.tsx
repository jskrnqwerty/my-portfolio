import { projects } from "../data/Data";

const Projects = () => {
  // const projects = {
  //   title: "",
  //   imgSrc: "",
  //   imgAlt: "",
  //   intro: "",
  //   description: "",
  //   madeWith: [],
  //   liveSiteUrl: "",
  //   githubRepoUrl: "",
  // };
  return (
    <>
      <h2>
        <span className="underline">Projects</span>
      </h2>
      {/* <div className="projects-container">
        <div className="project-wrapper">
          <img
            src="src\assets\images\laptop-stencil-google-keep.png"
            alt="Google Keep screenshot"
            className="project-snapshot"
          />
          <div
            className="project-details"
            id="dfgdfg"
          >
            Description
          </div>
        </div>
      </div> */}
      <div className="projects-container">
        {projects.map((project, index) => (
          <div
            className="project-wrapper"
            key={index}
          >
            <img
              className="project-snapshot"
              src={project.imgSrc}
              alt={project.imgAlt}
            />
            <div className="project-details">
              <h3>{project.title}</h3>
              <p>{project.intro}</p>
              <p>{project.description}</p>
              <div className="made-with">
                {project.madeWith.map((madeWithIcon, index) => (
                  <span key={index}>{madeWithIcon}</span>
                ))}
              </div>
              <a
                href={project.liveSiteUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Site{" | "}
              </a>
              <a
                href={project.githubRepoUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Github Repo
              </a>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Projects;
