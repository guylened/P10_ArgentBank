import PropTypes from "prop-types";
import { useState } from "react";
import { Button } from "./Button";
import { UserFields } from "./UserFields.jsx"
import { useSelector } from "react-redux";


export const EditNameForm = ({ opened = false, children }) => {
  const [isOpened, setIsOpened] = useState(opened);  
  const userData = useSelector((state)=> state.UserDataReducer);
  return (
    <>
      {children({ isOpened, setIsOpened })}
      {isOpened && (        
          <form className="editNameForm">
            <UserFields type={1} value={userData.userName}></UserFields>
            <UserFields type={2} value={userData.firstName} disabled={true}></UserFields>
            <UserFields type={3} value={userData.lastName} disabled={true}></UserFields>  
            <div className="editNameButton">
            <Button type={2} value="Save" className="edit-button"  ></Button>
            <Button type={1} value="Cancel" className="edit-button" onClick={() => setIsOpened(false)} ></Button> 
            </div>        
                       
        </form>       
      )}
    </>
  );
};

// save = put les nouvelles data; si réussite ferme la modale, si erreur message d'erreur


EditNameForm.propTypes = {
  opened: PropTypes.bool,  
  children: PropTypes.func.isRequired,
};