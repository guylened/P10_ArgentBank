import "../styles/main.css";
import { NavLink } from "react-router-dom";
import logo from "../assets/img/argentBankLogo.webp";
import { Button } from "../components/Button";
import { useSelector, useDispatch } from "react-redux";
import { SignOut } from "../api-redux/SignOut";

export const Header =  () => {   
  const userData = useSelector((state)=> state.UserData);  
  const rememberUserCkecked = useSelector((state)=> state.RememberUserReducer.rememberMe);
  const userAuth = userData.isAuthenticated;  
  const userEmail = userData.email;    
  const dispatch = useDispatch();

  const handleSignOut = () => {
    SignOut( rememberUserCkecked, userEmail, dispatch);
  };

  return (
    <header>
      <nav className="main-nav">
        <div className="main-nav-logo">
          <NavLink to="/">
            <img              
              src={logo}
              alt="Argent Bank Logo"
            />
          </NavLink>
          <h1 className="sr-only">Argent Bank</h1>
        </div>

        <div>
          {userAuth ? (
            <div className="main-nav-login">
              <i className="fa fa-user-circle"></i>
              <NavLink className="main-nav-item" to="/profile">
              {userData.userName}
              </NavLink>              
              <i className="fa fa-arrow-circle-right"></i>
              <Button type={1} className="main-nav-button" value="Sign out" onClick={handleSignOut} />
              </div>
          ) : (
            <div className="main-nav-login">
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



