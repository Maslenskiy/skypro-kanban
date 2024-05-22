import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { appRoutes } from "../App";

function getUserFromLS() {
  try {
    return JSON.parse(localStorage.getItem("user"));
  } catch (error) {
    return null;
  }
}

export const UserContext = createContext(null);

export const UserProvider = ({ children }) => {
  let navigate = useNavigate();
  const [user, setUser] = useState(getUserFromLS());

  function isLoginUser(newUser) {
    localStorage.setItem("user", JSON.stringify(newUser))
    setUser(newUser);
    navigate(appRoutes.MAIN);
  }

  function logoutUser() {
    localStorage.removeItem("user")
    setUser(null);
    navigate(appRoutes.LOGIN);
  }

  return (
    <UserContext.Provider value={{ user, isLoginUser, logoutUser }}>
      {children}
    </UserContext.Provider>
  );
};
