import ProjectCard from './ProjectCard.tsx'
import headshot from '../assets/Headshot.png'
import '../styles/ProjectSection.css'

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
                <ProjectCard
                    projectTitle="Fake Project 1" 
                    projectSubtitle="Subtitle for Fake Project 1" 
                    projectDescription="This is the decriptive text that describes Fake Project 1..."
                    image={headshot}
                />
                <ProjectCard 
                    projectTitle="Fake Project 2" 
                    projectSubtitle="Subtitle for Fake Project 2" 
                    projectDescription="This is the decriptive text that describes Fake Project 2..."
                    image={headshot}
                />
            </div>
        </section>
    )
}