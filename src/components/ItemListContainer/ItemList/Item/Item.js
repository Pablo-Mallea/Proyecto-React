import "./Item.scss";

export const Item = ({ producto }) => {
  return (
    <div className="card">
      <div className="img-producto">
        <img src={producto.img} alt="imagen" />
      </div>
      <h4>{producto.nombre}</h4>
      <p className="descripcion">{producto.descripcion}</p>
      <p>Precio: ${producto.precio}</p>
      <small>Stock disponible: {producto.stock}</small>
    </div>
  );
};
