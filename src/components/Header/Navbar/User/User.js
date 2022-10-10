import "./User.scss";
import { useContext } from "react";
import { LoginContext } from "../../../Context/LoginContext";
import { CgProfile } from "react-icons/cg";

export const User = () => {
  const { userLoged, cerrarSesion } = useContext(LoginContext);

  return (
    <div className="userContainer">
      <CgProfile className="userIcon"></CgProfile>
      <p>{userLoged[0].nombre}</p>
      <button onClick={cerrarSesion} className="cerrar">
        X
      </button>
    </div>
  );
};
