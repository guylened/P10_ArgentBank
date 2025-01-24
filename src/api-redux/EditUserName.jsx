import { updateUserData } from "./reducers-actions/userData";
import { setErrorMessage } from "./reducers-actions/errorMessage";

export const updateUserName = async ( userName, token, dispatch) => {
  
    try {
       //API connexion      
      const response = await fetch('http://localhost:3001/api/v1/user/profile', {
        method: 'PUT',
        headers:  {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        body: JSON.stringify({ userName }),        
      });
      
  
      if (response.ok) {        
        dispatch(updateUserData(userName));
        return true;        
      } else {        
        return false;

      }
         
  

      

    } catch (error) { 
        console.error("Failed to update username, please try again");
        dispatch(setErrorMessage(error.message));      
        return false;
    }
  };