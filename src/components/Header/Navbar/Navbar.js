import "./Navbar.scss";
import { CartWidget } from "./CartWidget/CartWidget";
import { User } from "./User/User";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { LoginContext } from "../../Context/LoginContext";
import { BurgerMenu } from "./BurgerMenu/BurgerMenu";

export const Navbar = () => {
  const { userLoged } = useContext(LoginContext);

  return (
    <nav className="navbar">
      <BurgerMenu />

      <ul>
        <Link to="/productos/gorras">Gorras</Link>
        <Link to="/productos/buzos">Buzos</Link>
        <Link to="/productos/remeras">Remeras</Link>
      </ul>

      <Link to="/">
        <div className="logo">
          <h1>Korra</h1>
        </div>
      </Link>
      <div className="row">
        <CartWidget />
        {userLoged.length !== 1 ? (
          <Link to="/login">
            <button className="btn-log">Login</button>
          </Link>
        ) : (
          <User />
        )}
      </div>
    </nav>
  );
};
