import { Item } from "./Item/Item";
import "./ItemList.scss";
export const ItemList = ({ productos = [] }) => {
  return (
    <div className="Itemlist">
      <h3>Productos</h3>
      <hr />
      {/* Renderizo mi array de elemtos con el .map() */}
      <div className="productos">
        {productos.map((prod) => {
          return <Item producto={prod} key={prod.id} />;
        })}
      </div>
    </div>
  );
};
