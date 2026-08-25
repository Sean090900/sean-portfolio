import '../styles/ProjectCard.css'

interface ProjectProps {
    // image: string;
    subject: string;
    types: string[]; 
    title: string;
    subtitle: string;
    description: string;
    tags: string[];
    accent: string;
}
export default function Project({subject, types, title, subtitle, description, tags, accent}: ProjectProps) {
    return (
        <div className="card">
            {/* <img src={image}/> */}
            <span className="subject-line">
                <p className="subject" style={{ color: accent}}>{subject}</p>
                <span className="types">{types.join(' · ')}</span>
            </span>
            <p className="title">{title}</p>
            <p className="subtitle">{subtitle}</p>
            <p className="description">{description}</p>
            <div className="tagline">
                <div className="tags">
                    {tags.map((tag) => (
                        <span 
                            key={tag} 
                            className="tag"
                            style={{ color: accent, border: `0.5px solid ${accent}` }}
                        >{tag}
                        </span>
                    ))}
                </div>
            </div>
            <div className="buttons">
                {/* <a className="demo" href="" style={{ background: accent }}>Demo</a> */}
                <a className="github" href="">See GitHub Repo</a>
            </div>
        </div>
    )
}