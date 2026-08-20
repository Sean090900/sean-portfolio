import '../styles/Hero.css'
import { useState, useEffect } from 'react';

// Letter scrambling effects 
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

// Main Hero Function
interface HeroProps {
    intro: string;
    description: string;
    gradientText: string;
    buttonText: string;
}
export default function Hero({intro, description, gradientText, buttonText}: HeroProps) {
    return (
        <section 
            className="hero"
            id="hero"
        >
            <p><Scramble text={intro}/></p>
            <h1>
                <Scramble text={description}/>
                <span className="gradientText">
                    <Scramble text={gradientText}/>
                </span>
            </h1>
            <a href="#project-section">{buttonText}</a>
        </section>
    );
}
