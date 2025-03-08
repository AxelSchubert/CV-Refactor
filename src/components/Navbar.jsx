import { NavLink } from 'react-router-dom'
import { useState } from 'react'

export default function NavBar() {
    const [isNavOpen, setIsNavOpen] = useState(false);
    return (
        <>
            <h1 className="title">Axel Schuberts CV</h1>
            {/* <input type="checkbox" id="nav-toggle" className="nav-toggle">
    <label for="nav-toggle" className="nav-toggle-label" aria-label="Open navigation menu">
        ☰
    </label> */}
            <header>
                <nav>
                    <ul className="nav-menu">
                        <li><NavLink to="/" className="nav-item nav-left">Start</NavLink></li>
                        <li><NavLink to="/about" className="nav-item">Om mig</NavLink></li>
                        <li><NavLink to="/cv" className="nav-item">CV</NavLink></li>
                        <li><NavLink to="/portfolio" className="nav-item">Portfolio</NavLink></li>
                        <li><NavLink to="/contact" className="nav-item nav-right">Kontakt</NavLink></li>
                    </ul>
                </nav>
                {/* <p classNameName="toggle-input" onClick={() => setIsNavOpen(!isNavOpen)}>✅</p> */}
            </header>
        </>
    )
}
