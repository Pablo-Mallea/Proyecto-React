import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import "./CartItem.scss";
import { CgTrash } from "react-icons/cg";


export const CartItem = ({ item }) => {

  const {removeItem } = useContext(CartContext)
  /* console.log(item)
  console.log(cart) */

  return (
    <div className="cartProduct">
      <div className="imgCarritoContainer">
        <img src={item.img} alt="imagen" className="imgCarrito" />
      </div>
      <h3>{item.nombre}</h3>
      <p>Precio: ${item.precio}</p>
      <p>Cantidad: ${item.cant}</p>

      <button onClick={()=> removeItem(item.id)} className="eliminar">
        <CgTrash className="eliminarIcon"/>
      </button>
    </div>
  );
};
