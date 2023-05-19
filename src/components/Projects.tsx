import { projects } from "../data/Data";
import { projectsType } from "../types/Types";

const Projects = () => {
  return (
    <>
      <h2>
        <span className="underline">Projects</span>
        <p className="project-sub-heading light-text">
          skills grow. so will this portfolio.
        </p>
      </h2>
      <div className="projects-container">
        {projects.map((project: projectsType, index: number) => (
          <div
            key={index}
            className={`project-item project-item-${index}`}
          >
            <div className="project-snapshot">
              <img
                src={project.imgSrc}
                alt={project.imgAlt}
              />
            </div>
            <div className="project-details">
              <h3>{project.title}</h3>
              <p>{project.intro}</p>
              <ul>
                {project.description.map((desc: string, index: number) => (
                  <li key={index}>{desc}</li>
                ))}
              </ul>
              <h4 className="made-with">Made With</h4>
              <div className="made-with-icons">
                {project.madeWith.map(
                  (madeWithIcon: JSX.Element, index: number) => (
                    <span key={index}>{madeWithIcon}</span>
                  )
                )}
              </div>
              <div className="project-links">
                {project.liveSiteUrl ? (
                  <a
                    href={project.liveSiteUrl}
                    className="project-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Site
                  </a>
                ) : (
                  ""
                )}
                {project.githubRepoUrl ? (
                  <a
                    href={project.githubRepoUrl}
                    className="project-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub Repo
                  </a>
                ) : (
                  ""
                )}
                {project.frontendMentorUrl ? (
                  <a
                    href={project.frontendMentorUrl}
                    className="project-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Frontend Mentor
                  </a>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Projects;
