import {setUserEmail} from "./reducers-actions/rememberMe";
import { userDataSlice } from "./reducers-actions/userData";


export const SignOut = (rememberUserCkecked, userEmail, dispatch) => {
  

   if (rememberUserCkecked) { 
    dispatch(setUserEmail(userEmail)); 
    dispatch(userDataSlice.actions.clearUserData()); 
   }  else { 
    dispatch(userDataSlice.actions.clearUserData()); 
   }   
    

  };