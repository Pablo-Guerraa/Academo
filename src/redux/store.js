import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { authReducer } from "./reducers/authReducer";

const reducers = combineReducers({
  auth: authReducer,
});

export const store = createStore(
  reducers, 
  applyMiddleware(thunk)
);