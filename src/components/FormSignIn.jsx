import { useState } from 'react';
import { UserFields } from "./UserFields";
import { Button } from "./Button";
import "../styles/main.css";
import {SignIn} from "../api-redux/SignIn"
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setRememberChecked, setRememberUnchecked } from '../api-redux/reducers-actions/rememberMe';

export const FormSignIn = () => {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [rememberMe, setRememberMe] = useState(true);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const errorMessage = useSelector((state) => state.ErrorMessageReducer.errorMessage);
  const userEmail = useSelector((state)=> state.RememberUserReducer.email);
  
  
  const handleSignIn = () => {    
    SignIn( email, password, navigate, dispatch);    
  };

  const handleCheckbox = (e) => {
    const isChecked = e.target.checked;
    setRememberMe(isChecked);
    if (isChecked) {
      dispatch(setRememberChecked());
    } else {
      dispatch(setRememberUnchecked());
    }
  };
  
  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      handleSignIn();      
    }}>
      <UserFields
        type={4}
        onChange={(e) => setEmail(e.target.value)}
        defaultValue = {userEmail}
        value={email}
      />
      <UserFields
        type={5}
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />
      <div className="input-remember">
        <input type="checkbox" checked={rememberMe} onChange={handleCheckbox} id="remember-me" />
        <label htmlFor="remember-me">Remember me</label>
      </div>   
      {errorMessage && <p className="errorLoginMessage">{errorMessage}</p>}        
      <Button
        type={2}
        className="sign-in-button"
        value="Sign In"         
      />
    </form>
  );
};
