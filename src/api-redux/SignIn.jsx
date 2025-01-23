import {setErrorMessage} from "./reducers-actions/errorMessage"
import {setUserData} from "./reducers-actions/userData";
import { setToken } from "./reducers-actions/token";



export const SignIn = async ( email, password, navigate, dispatch) => {
  
    try {
       //API connexion      
      const response = await fetch('http://localhost:3001/api/v1/user/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),        
      });
      
  
      if (!response.ok) {
        throw new Error('Email or password is incorrect');
      }
  
      const data = await response.json();
      
  
      // set token
      dispatch(setToken(data.body.token));

        
      //API get data User
      const userResponse = await fetch(`http://localhost:3001/api/v1/user/profile`, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${data.body.token}`,
          'Content-Type': 'application/json',
        },
      });
      
      if (!userResponse.ok) {
        throw new Error("Failed to fetch user data");
      }
      const userData = await userResponse.json();      
      dispatch(setUserData(userData.body));     
      // redirection page profile
      navigate(`/profile`);

    } catch (error) {      
      dispatch(setErrorMessage(error.message));
      
    }
  };