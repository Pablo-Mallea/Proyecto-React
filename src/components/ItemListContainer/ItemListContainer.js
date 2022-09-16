import "./ItemListContainer.scss";
import { useEffect, useState } from "react";
import { ItemList } from "./ItemList/ItemList";
import { useParams } from "react-router-dom";
import { Loader } from "../Loader/Loader";

import { db } from "../../firebase/config"
import {collection, getDocs, query, where } from "firebase/firestore"

export const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  const { categoryId } = useParams();

  useEffect(() => {
    setLoading(true);
    // 1-Armo la referencia (sync)
    const productosRef = collection(db, 'productos')

    //Armo query de busqueda para filtrar productos
    const q = categoryId
                ? query(productosRef, where('category', '==', categoryId)) //traigo de productosRef donde category coinsida con el categoyId que le pido
                : productosRef;

    // 2-Llamo a la referencia (async)
    getDocs(q)
      .then((resp) => {
        const productosDB = resp.docs.map( (doc) => ({id: doc.id, ...doc.data()}) );

        setProductos(productosDB)
      })
      .finally(() => {
        setLoading(false)
      })

  }, [categoryId]);

  return (
    <section className="itemListContainer">
      {
        loading ? 
        <Loader /> : 
        <ItemList productos={productos} />
      }
    </section>
  );
};
