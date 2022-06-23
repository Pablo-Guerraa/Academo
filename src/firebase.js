// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB6HOBn55zERZEWN_OMGyXlg3GlRIejQHU",
  authDomain: "academo-polygon.firebaseapp.com",
  projectId: "academo-polygon",
  storageBucket: "academo-polygon.appspot.com",
  messagingSenderId: "783132201422",
  appId: "1:783132201422:web:e12eced13efedb3bd59b9f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);