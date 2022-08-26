import "./ItemListContainer.scss";
/* import { ItemCount } from "./ItemCount/ItemCount";
 */import { useEffect, useState } from "react";
import { pedirDatos } from "../../helpers/pedirDatos";
import { ItemList } from "./ItemList/ItemList";

export const ItemListContainer = () => {

  const [productos, setProductos] = useState([]);

  console.log(productos);

  //Garantizo que solo hago la peticion de datos en el montaje (una sola vez)
  useEffect(() => { 
    pedirDatos()
      .then((res) => {
        setProductos(res);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        //console.log("Fin de proceso");
      });
  }, []);

  return (
    <section className="itemListContainer">

      <ItemList productos={productos} />

      {/* <ItemCount stock={15} /> */}
    </section>
  );
};
