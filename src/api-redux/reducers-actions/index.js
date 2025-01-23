import { combineReducers } from "redux";
import { TokenReducer } from "./token";
import { ErrorMessageReducer } from "./errorMessage";
import { UserDataReducer } from "./userData";
import { RememberUserReducer } from "./rememberMe";

export const rootReducer = combineReducers({
  UserDataReducer,
  TokenReducer,
  ErrorMessageReducer,
  RememberUserReducer,
});
