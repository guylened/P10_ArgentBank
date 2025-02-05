import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import { Button } from "./Button";
import { UserFields } from "./UserFields.jsx";
import { useSelector, useDispatch } from "react-redux";
import { updateUserName } from "../api-redux/EditUserName.jsx";
import {
  clearErrorMessage,
  setErrorMessage,
} from "../api-redux/reducers-actions/errorMessage";

export const EditNameForm = ({ opened, onClose }) => {
  const dispatch = useDispatch();
  const errorMessage = useSelector(
    (state) => state.errorMessageReducer.errorMessage
  );
  const userData = useSelector((state) => state.UserData);
  const token = userData.token;
  const initialUserName = userData.userName;
  const [isOpened, setIsOpened] = useState(opened);
  const [userName, setUserName] = useState(userData.userName);

  useEffect(() => {
    setIsOpened(opened);
  }, [opened]);

  useEffect(() => {
    if (errorMessage) {
      const timer = setTimeout(() => {
        dispatch(clearErrorMessage());
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [errorMessage, dispatch]);

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
        throw new Error("Failed to update username, please try again");
      }
    } catch (error) {
      dispatch(setErrorMessage(error.message));
    }
  };
  const handleCancel = () => {
    setUserName(initialUserName);
    handleClose();
  };

  return (
    <>
      {isOpened && (
        <form
          className="editNameForm"
          onSubmit={(e) => {
            e.preventDefault();
            handleEditUserName();
          }}
        >
          <UserFields
            type={1}
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
          <UserFields type={2} value={userData.firstName} disabled={true} />
          <UserFields type={3} value={userData.lastName} disabled={true} />
          {errorMessage && <p className="s-important-text">{errorMessage}</p>}
          <div className="editNameButton">
            <Button type={2} value="Save" />
            <Button type={1} value="Cancel" onClick={handleCancel} />
          </div>
        </form>
      )}
    </>
  );
};

EditNameForm.propTypes = {
  opened: PropTypes.bool,
  onClose: PropTypes.func,
};
