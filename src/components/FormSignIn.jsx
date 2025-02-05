import { useState, useEffect } from "react";
import { UserFields } from "./UserFields";
import { Button } from "./Button";
import "../styles/main.css";
import { SignIn } from "../api-redux/SignIn";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  setRememberChecked,
  setRememberUnchecked,
} from "../api-redux/reducers-actions/rememberMe";
import { clearErrorMessage } from "../api-redux/reducers-actions/errorMessage";

export const FormSignIn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const errorMessage = useSelector(
    (state) => state.errorMessageReducer.errorMessage
  );
  const userEmail = useSelector((state) => state.rememberUserReducer.email);

  const [password, setPassword] = useState("");
  const [email, setEmail] = useState(userEmail || "");
  const [rememberMe, setRememberMe] = useState(true);

  const handleSignIn = () => {
    SignIn(email, password, navigate, dispatch);
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

  useEffect(() => {
    if (errorMessage) {
      const timer = setTimeout(() => {
        dispatch(clearErrorMessage());
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [errorMessage, dispatch]);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSignIn();
      }}
    >
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
        <input
          type="checkbox"
          checked={rememberMe}
          onChange={handleCheckbox}
          id="remember-me"
        />
        <label htmlFor="remember-me">Remember me</label>
      </div>
      {errorMessage && <p className="s-important-text">{errorMessage}</p>}
      <Button type={2} value="Sign In" />
    </form>
  );
};
