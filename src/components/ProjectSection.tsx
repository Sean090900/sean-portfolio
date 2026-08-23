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
                    image={headshot}
                    subject="Data Engineeing"
                    types={["Internal", "Production System"]}
                    title="ETL & Integration Pipelines" 
                    subtitle="Recombia Biosciences" 
                    description="Python ETL pipelines, API integrations, and AWS infrastructure that turn raw scientific data into something a downstream tool — or a model — can actually use. Runs in production today."
                    tags={["Python", "Benchling API", "AWS", "ETL Pipelines"]}
                    accent='var(--accent-c)'
                />
                <ProjectCard 
                    image={headshot}
                    subject="Applied ML"
                    types={["Coursework", "ML Systems"]}
                    title="RAG Retrieval Pipeline" 
                    subtitle="JHU coursework" 
                    description="Retrieval-augmented pipeline built for a graduate AI course on the Mistral API. Set aside before the interview stage to rebuild on footing I could defend line by line."
                    tags={["RAG", "Python", "Mistral API"]}
                    accent='var(--accent-a)'
                />
            </div>
        </section>
    )
}