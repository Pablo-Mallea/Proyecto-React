import { useEffect, useState } from "react";
import { ItemDetail } from "./ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { Loader } from "../Loader/Loader";

import { doc, getDoc } from "firebase/firestore"
import { db } from "../../firebase/config"

export const ItemDetailContainer = () => {
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);

  const { itemId } = useParams();
  console.log(itemId);

  useEffect(() => {
    setLoading(true);

    // 1-Armo la referencia (sync)
    const docRef = doc(db, 'productos', itemId) 
    // De donde saco la base de datos, el nombre de la coleccion, id del router
    
    // 2-Llamo a la referencia (async)
    getDoc(docRef)
      .then((doc) => {
        setItem({id: doc.id, ...doc.data()})
      })
      .finally(() => {
        setLoading(false);
      });
  }, [itemId]);

  return (
    <div>
      {loading ? <Loader /> : <ItemDetail item={item} />}
    </div>
  );
};
