import Hero from './components/Hero'
import Project from './components/Project'
import PageBackground from './components/PageBackground'
import './App.css'
import { useState } from 'react'

function App() {
    const [spotlight, setSpotLight] = useState({x:"50%", y:"40%"});
    const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
        const relX = e.clientX / window.innerWidth;
        const relY = e.clientY / window.innerHeight;
        setSpotLight({x: `${relX * 100}%`, y: `${relY * 100}%` });
    };

    // recompute on every render, driven by the current spotlight state
    const centeredX = parseFloat(spotlight.x) / 100 - 0.5;
    const centeredY = parseFloat(spotlight.y) / 100 - 0.5;
    const orbOffset = {x: centeredX * -100, y: centeredY * -100};

    return (
        <div 
            className="page-wrapper"
            onMouseMove={handleMouseMove}
        >
            <PageBackground
                spotlight={spotlight}
                orbOffset={orbOffset}
            />
            <Hero
                intro="Hi, I'm Sean!"
                description="I'm a software engineer building "
                gradientText="AI systems."
                buttonText="View my work"
            />
            <Project 
                projectTitle="Fake Project 1"
                projectSubtitle="The subtitle for the project..."
                projectDescription="This is the description for Fake Project 1."
            />
        </div>
    )
}

export default App