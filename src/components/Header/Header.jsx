import { NavLink, useNavigate } from "react-router-dom";
import Logo from "../../assets/argentBankLogo200.webp"
import './header.css'
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../reducers/authReducer";

const Header = () => {
    const page = useNavigate();
    const dispatch = useDispatch();
    const {userToken} = useSelector((state) => state.auth);
    const userDetail = useSelector (state => state.user);
    const userUserName = userDetail.user.userName;

    const handleClick = () => {
        dispatch(logout());
        if (userToken===null) {
            page(`/signup`)
        }
    }

    return userToken===null?(
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
    ):(
        <header>
            <nav className="main-nav">
                <NavLink to="/" className="main-nav-logo">
                    <img src={Logo} alt="logo ArgentBank" className="main-nav-logo-image"/>
                    <h1 className="sr-only">Argent Bank</h1>
                </NavLink>
                <div className="main-nav-id-item">
                    <div className="user">
                        <i className="fa fa-user-circle"></i>
                        <p className="user-id">{userUserName}</p>
                    </div>
                    <NavLink to="/signup" onClick={handleClick} className="main-nav-item">
                        <i className="fa fa-sign-in"></i>
                        Sign out
                    </NavLink>
                </div> 
            </nav>
        </header>
    )
}

export default Header

/*<div>
        <a class="main-nav-item" href="./user.html">
          <i class="fa fa-user-circle"></i>
          Tony
        </a>
        <a class="main-nav-item" href="./index.html">
          <i class="fa fa-sign-out"></i>
          Sign Out
        </a>
      </div>
*/