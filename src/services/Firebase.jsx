import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

export const firebaseConfig = {
  apiKey: "AIzaSyAYDvJn7QYIQFRY0Oq0uiXsY8me8evWhSs",
  authDomain: "postsapp-6f655.firebaseapp.com",
  projectId: "postsapp-6f655",
  storageBucket: "postsapp-6f655.appspot.com",
  messagingSenderId: "697571420491",
  appId: "1:697571420491:web:05acfbe37e251ae3f0a0ce",
  measurementId: "G-73L88F22T7",
};

// Initialize Firebase and services
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvideer = new GoogleAuthProvider();

export { auth, googleProvideer };
