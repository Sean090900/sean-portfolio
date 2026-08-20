import '../styles/NavBar.css'

export default function NavBar() {
    return (
        <nav className="nav-bar">
            <ul className="nav-links">
                <li><a href="#hero">Home</a></li>
                <li><a href="#project-section">Projects</a></li>
            </ul>
        </nav>
    )
}