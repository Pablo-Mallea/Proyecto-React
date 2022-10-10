import "./Item.scss";
import { Link } from "react-router-dom";

export const Item = ({ producto }) => {
  return (
    <div className="card-producto">
      <div className="img-productoContainer">
        <img src={producto.img} alt="imagen" className="img-producto" />
      </div>
      <h4>{producto.nombre}</h4>
      <p className="item-precio">${producto.precio}</p>
      <small>Stock disponible: {producto.stock}</small>
      <Link to={`/item/${producto.id}`}>
        <button className="btn-detalle">Ver mas</button>
      </Link>
    </div>
  );
};
