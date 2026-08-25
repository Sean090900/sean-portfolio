import ProjectCard from './ProjectCard.tsx'
import '../styles/ProjectSection.css'
import { projects } from '../data/projects.ts'

export default function ProjectSection() {
    return (
        <section 
            className="project-section"
            id="project-section"
        >
            <div className="projects-section-header">
                <p>Projects</p>
                <span></span>
            </div>
            <div className="project-grid">
                {projects.map( (project) => (
                    <ProjectCard key={project.title} {...project} />
                ))}
            </div>
        </section>
    )
}