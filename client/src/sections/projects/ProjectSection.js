import "./ProjectSection.css";
import "../../components/project-card/ProjectCard";
import ProjectCard from "../../components/project-card/ProjectCard";

function ProjectSection() {
  return (
    <section className="container-fluid project-background">
      <div className="project-section" id="project">
        <div className="container">
          <div className="row">
            <h2 className="about-header">Recently worked on projects</h2>
          </div>
          <div class="row">
            <ProjectCard />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProjectSection;
