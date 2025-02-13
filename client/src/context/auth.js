import { useState, useEffect, useContext, createContext } from "react";
import axios from "axios";

const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    user: null,
    token: "",
    role: "",
  });

  // default axios
  axios.defaults.headers.common["Authorization"] = auth?.token;

  useEffect(() => {
    const data = localStorage.getItem("auth");
    if (data) {
      const parseData = JSON.parse(data);
      setAuth({
        user: parseData.user,
        token: parseData.token,
        role: parseData.role, // Include the role from parseData
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Only run this effect once, on mount

  // Update axios headers whenever auth changes
  useEffect(() => {
    axios.defaults.headers.common["Authorization"] = auth?.token;
  }, [auth]);

  return (
    <AuthContext.Provider value={[auth, setAuth]}>
      {children}
    </AuthContext.Provider>
  );
};

// custom hook
const useAuth = () => useContext(AuthContext);

export { useAuth, AuthProvider };