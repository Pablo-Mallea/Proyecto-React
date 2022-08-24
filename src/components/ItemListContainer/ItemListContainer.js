import "./ItemListContainer.scss";
import {ItemCount} from './ItemCount/ItemCount'

export const ItemListContainer = ({ contenido }) => {
  return (
    <section className="itemList">
      
      <ItemCount stock={15}/>
    </section>
  );
};
