import { useState, useMemo } from 'react'
import ProjectCard from './ProjectCard.tsx'
import '../styles/ProjectSection.css'
import { projects } from '../data/projects.ts'

const ALL_FILTER = 'All'

export default function ProjectSection() {
    const subjects = useMemo(
        () => [ALL_FILTER, ...Array.from(new Set(projects.map((project) => project.subject)))],
        []
    )
    const [activeSubject, setActiveSubject] = useState<string>(ALL_FILTER)

    const filteredProjects = activeSubject === ALL_FILTER
        ? projects
        : projects.filter((project) => project.subject === activeSubject)

    return (
        <section 
            className="project-section"
            id="project-section"
        >
            <div className="projects-section-header">
                <p>Projects</p>
                <span></span>
            </div>
            <div className="project-filters">
                {subjects.map((subject) => (
                    <button
                        key={subject}
                        type="button"
                        className={`project-filter${subject === activeSubject ? ' active' : ''}`}
                        onClick={() => setActiveSubject(subject)}
                    >
                        {subject}
                    </button>
                ))}
            </div>
            <div className="project-grid">
                {filteredProjects.map( (project, index) => (
                    <ProjectCard key={project.title} {...project} index={index} />
                ))}
            </div>
        </section>
    )
}