import "./cartContent.scss";
import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import { CartItem } from "../Cartitem/CartItem";
import { Link } from "react-router-dom";

export const CartContent = () => {
  const { cart, cartTotal, vaciarCarrito } = useContext(CartContext);

  return (
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
        <Link to={"/checkout"}>
          <button className="comprar">Comprar</button>
        </Link>
      </div>
    </div>
  );
};
