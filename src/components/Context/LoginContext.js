import { createContext, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

export const LoginContext = createContext();
const inicio = JSON.parse(localStorage.getItem("usuario")) || [];

export const LoginProvider = ({ children }) => {
  const [userLoged, setUserLoged] = useState(inicio);
  const usuario = (e) => {
    setUserLoged([e]);
  };
  const cerrarSesion = () => {
    setUserLoged([]);
    return <Navigate to="/" />;
  };

  useEffect(() => {
    localStorage.setItem("usuario", JSON.stringify(userLoged), [userLoged]);
  });

  return (
    <LoginContext.Provider
      value={{
        userLoged,
        usuario,
        cerrarSesion,
      }}
    >
      {children}
    </LoginContext.Provider>
  );
};
