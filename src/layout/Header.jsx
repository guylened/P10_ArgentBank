import "../styles/main.css";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../assets/img/argentBankLogo.png";
import { Button } from "../components/Button";
import { useSelector } from "react-redux";
import { useDispatch  } from "react-redux";
import { setUserLogoutReset } from "../api-redux/reducers-actions/index";

export const Header =  () => {  
  const userAuth = useSelector((state)=> state.TokenReducer.isAuthenticated);
  const userData = useSelector((state)=> state.UserDataReducer);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <header>
      <nav className="main-nav">
        <div className="main-nav-logo">
          <NavLink to="/">
            <img
              className="main-nav-logo-image"
              src={logo}
              alt="Argent Bank Logo"
            />
          </NavLink>
          <h1 className="sr-only">Argent Bank</h1>
        </div>

        <div>
          {userAuth ? (
            <div className="main-nav-log">
              <i className="fa fa-user-circle"></i>
              <p className="main-nav-item">{userData.userName}</p>
              <i className="fa fa-arrow-circle-right"></i>
              <Button className="main-nav-button" type={1} value="Sign out" onClick={() => {dispatch(setUserLogoutReset()); navigate('/login')}} />
              </div>
          ) : (
            <div className="main-nav-log">
              <i className="fa fa-user-circle"></i>
              <NavLink className="main-nav-item" to="/login">
                Sign In
              </NavLink>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};



