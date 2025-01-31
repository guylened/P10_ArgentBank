import { combineReducers } from "redux";
import { errorMessageReducer } from "./errorMessage";
import { userDataSlice } from "./userData";
import { rememberUserReducer } from "./rememberMe";

export const rootReducer = combineReducers({
  UserData: userDataSlice.reducer,
  errorMessageReducer,
  rememberUserReducer,
});
