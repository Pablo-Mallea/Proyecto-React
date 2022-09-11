import { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import "./Cart.scss";
import { CartItem } from "./Cartitem/CartItem";

export const Cart = () => {
  const { cart, cartTotal, vaciarCarrito } = useContext(CartContext);

  return (
    <div className="cartContianer">
      <h2>Carrito</h2>
      <hr />

      <div className="cartContent">
        <div className="itemsContent">
        {cart.map((item) => (
          <CartItem item={item} key={item.id} />
        ))}

        </div>

        <div className="cartInfo">
          <h4>Total: ${cartTotal()}</h4>
          <button onClick={vaciarCarrito} className="vaciarCarrito">
            Vaciar carrito
          </button>
          <button className="comprar">
            Comprar
          </button>
        </div>
      </div>
    </div>
  );
};
