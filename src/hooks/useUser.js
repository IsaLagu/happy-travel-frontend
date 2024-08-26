import { useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode";

const decodeToken = (token) => {
  try {
    return jwtDecode(token);
  } catch (error) {
    console.error("Invalid token:", error);
    return null;
  }
};

const useUser = () => {
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

  // Function to set the JWT token and update the user
  const saveToken = (newToken) => {
    localStorage.setItem("jwtToken", newToken);
    setToken(newToken);
  };

  // Function to remove the JWT token (logout)
  const clearToken = () => {
    localStorage.removeItem("jwtToken");
    setToken(null);
  };

  return {
    user,
    token,
    setToken: saveToken,
    clearToken,
  };
};

export default useUser;
