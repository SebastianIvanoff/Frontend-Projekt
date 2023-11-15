import { createContext, useEffect, useState } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  // Get the token and user ID from localStorage
  const localStorageToken = localStorage.getItem("token");

  const initialToken = JSON.parse(localStorageToken);

  const [token, setToken] = useState(initialToken || null);

  const updateAuth = (newToken) => {
    setToken(newToken);
  };

  // Save the token and user ID to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("token", JSON.stringify(token));
  }, [token]);

  return (
    <AuthContext.Provider value={{ token, updateAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
