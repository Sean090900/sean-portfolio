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
                <h2>
                    {projectSubtitle}
                </h2>
                <p>
                    {projectDescription}
                </p>
            </div>
            <div className="right-col">
                {/* <p>This is the right-hand side, image?</p> */}
                <img src="src/assets/Headshot.png"/>
            </div>
        </section>
    )
}