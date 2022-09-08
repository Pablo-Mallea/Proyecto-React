import "./Navbar.scss";
import Icon from "../../../assets/img/cart.png";
import { Link } from "react-router-dom";

export const Cart = () => {
  return (
    <div className="carrito">
      <Link to="/cart">
        <img src={Icon} className="cart-icon" alt="cart-icon" />
      </Link>
    </div>
  );
};
