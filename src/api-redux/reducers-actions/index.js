import { combineReducers } from "redux";
import { ErrorMessageReducer } from "./errorMessage";
import { userDataSlice } from "./userData";
import { RememberUserReducer } from "./rememberMe";

export const rootReducer = combineReducers({
  UserData: userDataSlice.reducer,
  ErrorMessageReducer,
  RememberUserReducer,
});
