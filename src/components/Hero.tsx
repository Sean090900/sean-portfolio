import '../styles/Hero.css'
import { useState, useEffect } from 'react';


interface HeroProps {
    intro: string;
    description: string;
    buttonText: string;
}

const SCRAMBLE_CHARS = '!<>-_/[]{}=+*^?#01';

function Scramble({ text }: {text: string}) {
    const [display, setDisplay] = useState(text);

    useEffect(() => {
        let frame = 0;
        const totalFrames = 22;

        const intervalId = setInterval(() => {
            frame++;
            const revealCount = Math.floor((frame / totalFrames) * text.length);

            setDisplay(
                text.split("").map((ch, i) => 
                    i < revealCount ? ch : SCRAMBLE_CHARS[Math.floor(Math.random() * SCRAMBLE_CHARS.length)]
                ).join("")
            );

            if (frame >= totalFrames) {
                clearInterval(intervalId);
            }

        }, 32);
        return () => clearInterval(intervalId);

    }, [text]);
    return <span>{display}</span>;
    
}


export default function Hero({intro, description, buttonText}: HeroProps) {
    const [spotlight, setSpotLight] = useState({x:"50%", y:"40%"});
    const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const relX = (e.clientX - rect.left) / rect.width;
        const relY = (e.clientY - rect.top) / rect.height;
        setSpotLight({x: `${relX * 100}%`, y: `${relY * 100}%` });
    };

    return (
        <section 
        className="hero"
        onMouseMove={handleMouseMove}
        >
        <div
            className="hero-dots"
            style={{
                maskImage: `radial-gradient(340px circle at ${spotlight.x} ${spotlight.y}, black, transparent)`
            }}
        />
        <p><Scramble text={intro} /></p>
        <h1><Scramble text={description} /></h1>
        <a href="#about">{buttonText}</a>
        </section>
    );
}
