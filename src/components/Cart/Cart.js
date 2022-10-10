import "./Cart.scss";
import { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import { CartContent } from "./CartContent/CartContent";
import { EmptyCart } from "./EmptyCart/EmptyCart";

export const Cart = () => {
  const { cart } = useContext(CartContext);

  return (
    <div className="cartContianer">
      <h2>Carrito</h2>
      { cart.length > 0 ? <CartContent /> : <EmptyCart /> }
    </div>
  );
};
