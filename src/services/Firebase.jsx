import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getDatabase } from "firebase/database";

const {
  REACT_APP_APIKEY,
  REACT_APP_DBURL,
  REACT_APP_AUTHDOMAIN,
  REACT_APP_PROJECTID,
  REACT_APP_STORAGEBUCKET,
  REACT_APP_SENDERID,
  REACT_APP_APPID,
  REACT_APP_MEASUREID,
} = process.env;

export const firebaseConfig = {
  apiKey: REACT_APP_APIKEY,
  authDomain: REACT_APP_AUTHDOMAIN,
  projectId: REACT_APP_PROJECTID,
  storageBucket: REACT_APP_STORAGEBUCKET,
  messagingSenderId: REACT_APP_SENDERID,
  appId: REACT_APP_APPID,
  measurementId: REACT_APP_MEASUREID,
  databaseURL: REACT_APP_DBURL,
};

// Initialize Firebase and services
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvideer = new GoogleAuthProvider();
// Initialize Realtime Database and get a reference to the service
const database = getDatabase(app);

export { auth, googleProvideer, database };
