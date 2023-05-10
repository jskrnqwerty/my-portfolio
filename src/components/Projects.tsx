import { projects } from "../data/Data";

const Projects = () => {
  return (
    <>
      <h2>
        <span className="underline">Projects</span>
      </h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div
            key={index}
            // className={`"project-"${index}`}
            className="project-wrapper"
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
              <div className="project-links">
                <a
                  href={project.liveSiteUrl}
                  className="project-live-site"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Site
                </a>
                <a
                  href={project.githubRepoUrl}
                  className="project-gh-repo"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github Repo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Projects;
