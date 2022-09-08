import { ItemCount } from "./ItemCount/ItemCount";
import "./ItemDetail.scss";
import { useState } from "react";
import { Acarrito } from "./Acarrito/Acarrito";

export const ItemDetail = ({ item }) => {
  //Aplicando intercambiabilidad....

  const [cantidad, setCantidad] = useState(0)
  const [agregado, setAgregado] = useState(false)

  const handleAgregar = () =>{ //Recibo un evento del ItemCount
    if(cantidad > 0){
       const itemToCarrito = {
        id: item.id,
        nombre: item.nombre,
        precio: item.precio,
        cantidad
      }
      console.log(itemToCarrito);
      setAgregado(true);
    }

  }

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

        {agregado ? <Acarrito/> : <ItemCount 
          stock={item.stock} 
          counter={cantidad} 
          setCounter={setCantidad}
          handleAgregar={handleAgregar}
        />}
        
      </div>
    </div>
  );
};
