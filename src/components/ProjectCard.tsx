import '../styles/ProjectCard.css'

interface ProjectProps {
    projectTitle: string;
    projectSubtitle: string;
    projectDescription: string;
    image: string;
}
export default function Project({projectTitle, projectSubtitle, projectDescription, image}: ProjectProps) {
    return (
        <div
            className="card"
        >
            <h1 className="title">
                {projectTitle}
            </h1>
            <img 
                src={image}
            />
            <p className="subtitle">
                {projectSubtitle}
            </p>
            <span></span>
            <p className="description">
                {projectDescription}
            </p>
            <a href="#projects">See GitHub Repo</a>
        </div>
    )
}