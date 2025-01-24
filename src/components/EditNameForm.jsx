import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import { Button } from "./Button";
import { UserFields } from "./UserFields.jsx"
import { useSelector, useDispatch } from "react-redux";
import  { updateUserName } from "../api-redux/EditUserName.jsx";


export const EditNameForm = ({ opened, onClose }) => {
    const dispatch = useDispatch();
   
    const errorMessage = useSelector((state) => state.ErrorMessageReducer.errorMessage);
    const userData = useSelector((state)=> state.UserDataReducer);
    const token = useSelector((state)=> state.TokenReducer.token)
    const [isOpened, setIsOpened] = useState(opened);  
    const [userName, setUserName] = useState(userData.userName)
    const initialUserName = userData.userName;
 

 useEffect(() => {
  setIsOpened(opened);
}, [opened]);

    const handleClose = () => {
      setIsOpened(false);
      if (onClose) {
        onClose();
      }
    };

    const handleEditUserName = async () => {
      try {
        const success = await updateUserName(userName, token, dispatch);
        if (success) {
          handleClose();
        } else {
          console.error("Failed to update username");
        }
      } catch (error) {
        console.error("Failed:", error);
      }
    };
 const handleCancel = () => {
  setUserName(initialUserName);
  handleClose();
 }

  return (
    <>
      {isOpened && (        
          <form className="editNameForm" onSubmit={(e) => {
            e.preventDefault();
            handleEditUserName();      
          }}>
            <UserFields type={1} value={userName} onChange={(e) => setUserName(e.target.value)}></UserFields>
            <UserFields type={2} value={userData.firstName} disabled={true}></UserFields>
            <UserFields type={3} value={userData.lastName} disabled={true}></UserFields>  
            <div className="editNameButton">
            {errorMessage && <p className="errorUpdateUserMessage">{errorMessage}</p>} 
            <Button type={2} value="Save" className="edit-button"></Button>
            <Button type={1} value="Cancel" className="edit-button" onClick={handleCancel} ></Button> 
            </div>        
                       
        </form>       
      )}
    </>
  );
};


EditNameForm.propTypes = {
  opened: PropTypes.bool, 
  onClose: PropTypes.func   
};