import { Outlet, Link } from "react-router-dom";
import './Navbar.css'
function Navbar() {
    return (
        <>
            <nav className="navbar">
                <ul className="nav-links">
                    <li>
                        <Link to="/">S I G N U P / L O G I N</Link>
                    </li>
                    <li>
                        <Link to="/tweet">T W E E T S</Link>
                    </li>
                </ul>
            </nav>

            <Outlet />
        </>
    )
}

export default Navbar