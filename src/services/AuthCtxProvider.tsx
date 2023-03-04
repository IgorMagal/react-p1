import React, { useContext, createContext, useEffect, useState } from "react";
import {
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  User,
} from "firebase/auth";
import { auth, googleProvideer } from "./Firebase";

interface AuthContextType {
  googleSignIn: () => void;
  logout: () => void;
  user: User | null;
}

const AuthCtx = createContext<AuthContextType>({
  googleSignIn: () => {},
  logout: () => {},
  user: null,
});

export const AuthCtxProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<User | null>(null);

  const googleSignIn = async () => {
    await signInWithPopup(auth, googleProvideer);
  };

  const logout = async () => {
    await signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log(currentUser);
    });

    return unsubscribe;
  }, []);

  const authContextValue = { googleSignIn, logout, user };
  return (
    <AuthCtx.Provider value={authContextValue}>{children}</AuthCtx.Provider>
  );
};

export const UserAuth = () => {
  return useContext(AuthCtx);
};
