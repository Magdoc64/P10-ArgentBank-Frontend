import { NavLink } from "react-router-dom";
import Logo from "../../assets/argentBankLogo200.webp"
import './header.css'
const Header = () => {
    return (
        <header>
            <nav className="main-nav">
                <NavLink to="/" className="main-nav-logo">
                    <img src={Logo} alt="logo ArgentBank" className="main-nav-logo-image"/>
                    <h1 className="sr-only">Argent Bank</h1>
                </NavLink>
                <NavLink to="/signup" className="main-nav-item">
                    <i className="fa fa-user-circle"></i>
                    Sign In
                </NavLink>
            </nav>
        </header>
    )
}

export default Header