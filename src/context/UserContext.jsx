import { createContext, useContext, useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode";

const UserContext = createContext(null);

const decodeToken = (token) => {
  try {
    return jwtDecode(token);
  } catch (error) {
    console.error("Invalid token:", error);
    return null;
  }
};

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(() => localStorage.getItem("jwtToken"));

  useEffect(() => {
    if (token) {
      const decodedUser = decodeToken(token);
      setUser({ email: decodedUser.sub });
    } else {
      setUser(null);
    }
  }, [token]);

  const saveToken = (newToken) => {
    localStorage.setItem("jwtToken", newToken);
    setToken(newToken);
  };

  const clearToken = () => {
    localStorage.removeItem("jwtToken");
    setToken(null);
  };

  return (
    <UserContext.Provider value={{ user, token, setToken: saveToken, clearToken }}>{children}</UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
