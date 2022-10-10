import { ItemCount } from "./ItemCount/ItemCount";
import "./ItemDetail.scss";
import { useContext, useState } from "react";
import { Acarrito } from "./Acarrito/Acarrito";
import { CartContext } from "../../Context/CartContext";

export const ItemDetail = ({ item }) => {
  const { addToCart, isInCart } = useContext(CartContext);

  const [cantidad, setCantidad] = useState(0);

  const handleAgregar = () => {
    if (cantidad > 0) {
      const itemToCarrito = {
        id: item.id,
        img: item.img,
        nombre: item.nombre,
        precio: item.precio,
        stock: item.stock,
        cantidad,
      };
      
      addToCart(itemToCarrito);
      isInCart(item.id);
    }
  };

  return (
    <div className="item-container">
      <div className="img-itemContainer">
        <img src={item.img} alt="imagen producto" className="img-item" />
      </div>
      <div className="contenido">
        <h2>{item.nombre}</h2>
        <p className="precio">$ {item.precio}</p>
        <small className="stock">Stock disponible: {item.stock}</small>
        <p>{item.descripcion}</p>

        {isInCart(item.id) ? (
          <Acarrito />
        ) : (
          <ItemCount
            stock={item.stock}
            counter={cantidad}
            setCounter={setCantidad}
            handleAgregar={handleAgregar}
          />
        )}
      </div>
    </div>
  );
};
