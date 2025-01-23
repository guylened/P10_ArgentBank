import { combineReducers } from "redux";
import { TokenReducer } from "./token";
import { ErrorMessageReducer } from "./errorMessage";
import { UserDataReducer } from "./userData";

export const appReducer = combineReducers({
  UserDataReducer,
  TokenReducer,
  ErrorMessageReducer,
});

const USER_LOGOUT = "USER_LOGOUT";

export const rootReducer = (state, action) => {
  switch (action.type) {
    case USER_LOGOUT:
      return appReducer(undefined, action);
    default:
      return appReducer(state, action);
  }
};

// Action
export const setUserLogoutReset = () => ({
  type: USER_LOGOUT,
});

/*export const rootReducer = (state, action) => {
  if (action.type === "USER_LOGOUT") {
    return appReducer(undefined, action);
  }

  return appReducer(state, action);
};*/
