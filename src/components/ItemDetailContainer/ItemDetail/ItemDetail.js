import { ItemCount } from "./ItemCount/ItemCount";
import "./ItemDetail.scss";
export const ItemDetail = ({ item }) => {
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

        <ItemCount stock={item.stock} />
      </div>
    </div>
  );
};
