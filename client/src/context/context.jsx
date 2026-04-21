import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [User, setUser] = useState({
    name: "Ali",
    role: "student", // student | admin | supervisor
  });

  const login = (userData) => {
    setUser(userData);
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AppContext.Provider value={{ User, login, logout }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAuth = () => useContext(AppContext);