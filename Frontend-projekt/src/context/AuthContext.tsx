import { createContext, ReactNode, useEffect, useState } from "react";

interface AuthContextType {
    token: string | null;
    updateToken: (newToken: string | null) => void;
  }
  
const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  // Get the token from localStorage
const storedToken = localStorage.getItem('token');
const initialToken = storedToken ? JSON.parse(storedToken) : null;
const [token, setToken] = useState<string | null>(initialToken);


  const updateToken = (newToken: string | null) => {
    setToken(newToken);
  };

  // Save the token to localStorage whenever it changes
  useEffect(() => {
    if (token === null) {
      localStorage.removeItem("token"); // Remove the token from localStorage if it's null
    } else {
      localStorage.setItem("token", JSON.stringify(token));
    }
  }, [token]);

  return (
    <AuthContext.Provider value={{ token, updateToken }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
