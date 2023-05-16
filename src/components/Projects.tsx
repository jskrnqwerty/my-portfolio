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
                {project.description.map((desc, index) => (
                  <li key={index}>{desc}</li>
                ))}
              </ul>
              <h4 className="made-with">Made With</h4>
              <div className="made-with-icons">
                {project.madeWith.map((madeWithIcon, index) => (
                  <span key={index}>{madeWithIcon}</span>
                ))}
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
                    Github Repo
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
