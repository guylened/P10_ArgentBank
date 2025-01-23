import { useState } from 'react';
import { UserFields } from "./UserFields";
import { Button } from "./Button";
import "../styles/main.css";
import {SignIn} from "../api-redux/SignIn"
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';


export const FormSignIn = () => {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const handleSignIn = () => {    
    SignIn( email, password, navigate, dispatch);
  };
  
  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      handleSignIn();
    }}>
      <UserFields
        type={4}
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />
      <UserFields
        type={5}
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />
      <div className="input-remember">
        <input type="checkbox" id="remember-me" />
        <label htmlFor="remember-me">Remember me</label>
      </div>      
      <Button
        type={2}
        className="sign-in-button"
        value="Sign In"         
      />
    </form>
  );
};