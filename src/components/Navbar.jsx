import { Link, NavLink } from 'react-router-dom'
import { FiHome } from 'react-icons/fi'

function Navbar() {
    return (
        <header className="navbar">
            <div className="nav-inner">
                <Link to="/" className="logo">
                    <span className="logo-icon"><FiHome /></span>
                    Smart Room Allocation
                </Link>
                <nav className="nav-links">
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/login">Login</NavLink>
                    <NavLink to="/add-listing">Add Room</NavLink>
                    <Link to="/register" className="btn btn-sm">Get Started</Link>
                </nav>
            </div>
        </header>
    )
}

export default Navbar