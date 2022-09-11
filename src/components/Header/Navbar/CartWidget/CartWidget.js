import "./CartWidget.scss";
import Icon from "../../../../assets/img/cart.png";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../../Context/CartContext";

export const CartWidget = () => {
  
  const { cartCant } = useContext(CartContext);

  return (
    <Link to="/cart">
      <div className="carrito">
        <img src={Icon} className="cart-icon" alt="cart-icon" />
        <span>{cartCant()}</span>
      </div>
    </Link>
  );
};
