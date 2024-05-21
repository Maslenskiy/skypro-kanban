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
    setUser(newUser);
    navigate(appRoutes.MAIN);
  }

  function logoutUser() {
    setUser(null);
    navigate(appRoutes.LOGIN);
  }

  return (
    <UserContext.Provider value={{ user, isLoginUser, logoutUser }}>
      {children}
    </UserContext.Provider>
  );
};
