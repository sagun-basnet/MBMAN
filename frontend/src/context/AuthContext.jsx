import axios from "axios";
import { createContext, useState } from "react";

const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const user = {
    name: "jhon deo",
    username: "johnd",
    email: "jhon@gmail.com",
    role: "user",
  };

  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null,
  );

  const login = async (data) => {
    try {
      const res = await axios.post("https://fakestoreapi.com/auth/login", data);
      console.log(res);
      setCurrentUser(user);
      localStorage.setItem("user", JSON.stringify(user));
      const token = res.data.token;
      localStorage.setItem("token", token);
      return res;
    } catch (err) {
      console.log(err);
    }
  };

  const logout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    setCurrentUser(null);
  };

  return (
    <AuthContext.Provider value={{ currentUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthContextProvider };
