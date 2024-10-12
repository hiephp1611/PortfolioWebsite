import styles from "./ProjectsStyles.module.css";
import ARG from "../../assets/ARG.png";
import nanoGPT from "../../assets/nano.png";
import textsearch from "../../assets/text-search.png";
import portfolio from "../../assets/portfolio.png";
import ProjectCard from "../../common/ProjectCard";
function Projects() {
  const projectsData = [
    {
      src: ARG,
      link: "https://github.com/hiephp1611/DATX11-VT23-09-Candidate-Project-Alternate-Reality-Game",
      h3: "Alternate Reality Game",
      p: "Candidate Project",
    },
    {
      src: nanoGPT,
      link: "https://github.com/hiephp1611/nanoGPT",
      h3: "nanoGPT",
      p: "Hobby Project",
    },
    {
      src: textsearch,
      link: "https://github.com/hiephp1611/text-search-engine",
      h3: "Basic Text Search Engine",
      p: "Hobby Project",
    },
    {
      src: portfolio,
      link: "https://github.com/hiephp1611/PortfolioWebsite",
      h3: "Portfolio Website",
      p: "Hobby Project",
    },
  ];
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Project</h1>
      <div className={styles.projectsContainer}>
        {projectsData.map((project, idx) => (
          <ProjectCard
            key={idx}
            src={project.src}
            link={project.link}
            h3={project.h3}
            p={project.p}
          />
        ))}
      </div>
    </section>
  );
}

export default Projects;
