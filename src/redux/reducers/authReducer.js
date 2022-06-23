import { typeAuth } from "../types";

const initialState = {
  uid: null,
  email: null,
  photo: null, 
  isLoggedIn: false,
  checking: true,
};

export const authReducer = ( state= initialState, action) => {
  switch(action.type){
    case typeAuth.login: 
      return action.payload
    case typeAuth.logout: 
      return initialState;
    default:
      return state;
  }
}