import { useState } from "react";
import { CgMenu } from "react-icons/cg";
import { Link } from "react-router-dom";
import "./BurgerMenu.scss";

export const BurgerMenu = () => {
  const [links, setLinks] = useState(false);
  const desplegar = () => {
    setLinks(true);
  };
  const cerrar = () => {
    setLinks(false);
  };

  return (
    <div className="menu">
      <CgMenu className="menuIcon" onClick={links ? cerrar : desplegar} />
      {links ? (
        <div className="navbarLinks">
          <ul>
            <Link to="/productos/gorras">Gorras</Link>
            <Link to="/productos/buzos">Buzos</Link>
            <Link to="/productos/remeras">Remeras</Link>
          </ul>
        </div>
      ) : null}
    </div>
  );
};
