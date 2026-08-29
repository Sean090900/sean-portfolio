import '../styles/ProjectCard.css'

interface BulletListProps {
    items: string[];
    accent: string;
}

function BulletList({items, accent}: BulletListProps) {
    return(
        <ul className="bullet-list">
            {items.map((item, i) => (
                <li key={i} className="bullet-list-item">
                    <span className="bullet-list-dot" style={{ background: accent }}/>
                    <span>{item}</span>
                </li>
            ))}
        </ul>
    )
}


interface ProjectProps {
    // image: string;
    subject: string;
    types: string[]; 
    title: string;
    location: string;
    subtitle: string;
    descriptionItems: string[];
    description: string;
    tags: string[];
    accent: string;
    buttonText: string;
    link: string;
}
export default function Project({subject, types, title, location, subtitle, descriptionItems, description, tags, accent, buttonText, link}: ProjectProps) {
    return (
        <div className="card">
            {/* <img src={image}/> */}
            <span className="subject-line">
                <p className="subject" style={{ color: accent}}>{subject}</p>
                <span className="types">{types.join(' · ')}</span>
            </span>
            <p className="title">{title}</p>
            <p className="location">{location}</p>
            <p className="subtitle">{subtitle}</p>
        
            {/* <p className="description">{description}</p> */}
            <BulletList items={descriptionItems} accent={accent}/>

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
                <a className="github" href={link}>{buttonText}</a>
            </div>
        </div>
    )
}