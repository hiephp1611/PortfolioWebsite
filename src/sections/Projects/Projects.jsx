import styles from "./ProjectsStyles.module.css";
import viberr from "../../assets/viberr.png";
import freshburger from "../../assets/fresh-burger.png";
import hisspter from "../../assets/hipsster.png";
import fitLift from "../../assets/fitlift.png";
import ProjectCard from "../../common/ProjectCard";
function Projects() {
  const projectsData = [
    {
      src: viberr,
      link: "https://github.com/hiephp1611/DATX11-VT23-09-Candidate-Project-Alternate-Reality-Game",
      h3: "Alternate Reality Game",
      p: "Candidate Project",
    },
    {
      src: freshburger,
      link: "https://github.com/hiephp1611/nanoGPT",
      h3: "nanoGPT",
      p: "Hobby Project",
    },
    {
      src: hisspter,
      link: "https://github.com/hiephp1611/text-search-engine",
      h3: "Basic Text Search Engine",
      p: "Hobby Project",
    },
    {
      src: fitLift,
      link: "https://github.com/hiephp1611/PortfolioWebsite",
      h3: "Portfolio Website",
      p: "Hobby Project",
    },
  ];
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Project</h1>
      <div className={styles.projectsContainer}>
        {projectsData.map((project) => (
          <ProjectCard
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
