import "./CartWidget.scss";
import { CgShoppingCart } from "react-icons/cg";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../../Context/CartContext";

export const CartWidget = () => {
  const { cartCant, cart } = useContext(CartContext);

  return (
    <Link to="/cart" className={`carritoHidden ${cart.length > 0 ? 'carritoVisible' : ' '}`}>
      <div className="widgetContainer">
        <CgShoppingCart className="cart-icon" />
        <span>{cartCant()}</span>
      </div>
    </Link>
  );
};
