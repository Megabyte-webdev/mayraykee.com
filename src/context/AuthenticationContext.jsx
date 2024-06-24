import { createContext, useEffect, useState } from "react";

const primaryInfo = "primary";
const secondaryInfo = "secondary";

export const AuthenticationContext = createContext();

export const AuthenticationContextProvider = ({ children }) => {
 

  const [authDetails, setAuthDetails] = useState({
    token: "",
    user: JSON.parse(sessionStorage.getItem(primaryInfo)),
  });

  const storePrimaryDetails = () => {
    sessionStorage.setItem(primaryInfo, JSON.stringify(authDetails.user));
  };

  useEffect(() => {
    if (authDetails.token) {
      storePrimaryDetails();
    }
  }, [authDetails.token, authDetails.user]);

  return (
    <AuthenticationContext.Provider value={{ authDetails, setAuthDetails }}>
      {children}
    </AuthenticationContext.Provider>
  );
};
