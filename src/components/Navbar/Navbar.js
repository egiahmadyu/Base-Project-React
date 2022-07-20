import { Link } from "react-router-dom"
import "../css-landing.css"
import "./style.css"


const Navbar = () => {
    return (
        <section className="navbar">
            <h1>EgiAhmadYu</h1>
            <div className="navbar-menu">
                
                <p><Link to="/" style={{ textDecoration: 'none', color: 'black' }}>Home</Link></p>
                <p><Link to="/hero" style={{ textDecoration: 'none', color: 'black' }}>Hero</Link></p>
            </div>
            
        </section>
    )
}

export default Navbar