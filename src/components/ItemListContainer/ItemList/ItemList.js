import { Item } from "./Item/Item";
import "./ItemList.scss";

export const ItemList = ({ productos = [] }) => {
  return (
    <div className="Itemlist">
      <h2>Productos</h2>

      <div className="productos">
        {productos.map((prod) => {
          return <Item producto={prod} key={prod.id} />;
        })}
      </div>
    </div>
  );
};
