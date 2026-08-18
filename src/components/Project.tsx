import '../styles/Project.css'

interface ProjectProps {
    projectTitle: string;
    projectSubtitle: string;
    projectDescription: string;
}

export default function Project({projectTitle, projectSubtitle, projectDescription}: ProjectProps) {
    return (
        <section className="project">
            <div className="left-col">
                <h1>
                    {projectTitle}
                </h1>
                <p className="left-col-subtitle">
                    {projectSubtitle}
                </p>
                <p className="left-col-description">
                    {projectDescription}
                </p>
            </div>
            <div className="right-col">
                <img src="src/assets/Headshot.png"/>
            </div>
        </section>
    )
}