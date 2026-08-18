import '../styles/PageBackground.css'
import { useState, useRef, useEffect } from 'react'

// Blured orb effects
interface BlurredOrbProps {
    background: string,
    diameter: string,
    top: string,
    left: string,
    offset: {x: number, y: number}
}
function BlurredOrb({background, diameter, top, left, offset}: BlurredOrbProps) {
    return (
        <div 
            className="orb"
            style={{
                background: background,
                height: diameter,
                width: diameter,
                top: top,
                left: left,
                transform: `translate(${offset.x}px, ${offset.y}px)`,
            }}
        />
    )
}

// Ripple effect
interface RippleProps {
    x: number,
    y: number,
    onDone: () => void
}
function Ripple ({x, y, onDone}: RippleProps) {
    return (
        <span 
            className="ripple"
            style={{
                left: `${x}px`,
                top: `${y}px`
            }}
            onAnimationEnd={onDone}
        />
    )
}

// Dots background effect, with ripples
interface BackgroundProps {
    spotlight: {x: string, y: string}
    orbOffset: {x: number, y: number}
}
export default function Background({spotlight, orbOffset}: BackgroundProps) {
    const [ripples, setRipples] = useState<{id: number, x: number, y: number}[]>([]);
    const nextRippleId = useRef(0);

    useEffect(() => {
        function handleClick(e: MouseEvent) {
            const id = nextRippleId.current++;
            setRipples(current => [...current, { id, x: e.clientX, y: e.clientY }]);
        }
        window.addEventListener('click', handleClick);
        return () => window.removeEventListener('click', handleClick)
    }, [])

    function removeRipple(id: number) {
        setRipples(current => current.filter(ripple => ripple.id !== id));
    }
    
    return (
        <div className="pageBackground">
            <div
                className="dots"
                style={{
                    maskImage: `radial-gradient(340px circle at ${spotlight.x} ${spotlight.y}, black, transparent)`
                }}
            />
            <BlurredOrb background="var(--accent-a)" diameter="10rem" top="5vh" left="5vw" offset={orbOffset}/>
            <BlurredOrb background="var(--accent-b)" diameter="5rem" top="50vh" left="55vw" offset={orbOffset}/>
            <BlurredOrb background="var(--accent-c)" diameter="15rem" top="65vh" left="75vw" offset={orbOffset}/>
            {ripples.map(ripple => (
                <Ripple
                    key={ripple.id}
                    x={ripple.x}
                    y={ripple.y}
                    onDone={() => removeRipple(ripple.id)}
                />
            ))}
        </div>
    )
}