import "./Navbar.scss";
import { Cart } from "./CartWidget";
import { Link } from "react-router-dom"; //navego dentro de mi router sin tener q recargar la pagina

export const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/">
        <div className="logo">
          <img src="./vectorCap.png" className="img-logo" alt="logo" />
          <h1>Korra</h1>
        </div>
      </Link>

      <ul>
        <Link to="/productos/gorras">Gorras</Link>
        <Link to="/productos/buzos">Buzos</Link>
        <Link to="/productos/remeras">Remeras</Link>
      </ul>
      <div className="row">
        <Cart />
        <button type="submit" className="btn-log">
          Login
        </button>
      </div>
    </nav>
  );
};
