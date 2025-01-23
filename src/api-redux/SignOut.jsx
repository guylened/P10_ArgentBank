import {setUserEmail} from "./reducers-actions/rememberMe";
import { clearUserToken } from "./reducers-actions/token";

import { clearUserData } from "./reducers-actions/userData";


export const SignOut = (rememberUserCkecked, userEmail, navigate, dispatch) => {
  

   if (rememberUserCkecked) { 
    dispatch(setUserEmail(userEmail));  
    dispatch(clearUserToken()); 
    dispatch(clearUserData()); 
   }  else {    
    dispatch(clearUserToken()); 
    dispatch(clearUserData()); 
   }   
    

  };