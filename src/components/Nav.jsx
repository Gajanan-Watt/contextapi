import { AuthContext } from "../context/AuthContext";

import { useContext } from "react";

export const Navbar = () => {
  const alt = () => {
    alert("Please fill the login details");
  };
  const { isAuth, toggleAuth } = useContext(AuthContext);
  return (
    <div>
      {isAuth ? (
        <button onClick={toggleAuth}>Logout</button>
      ) : (
        <button onClick={alt}>Login</button>
      )}
    </div>
  );
};
