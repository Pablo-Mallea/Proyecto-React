import "./Checkout.scss";
import Swal from "sweetalert2";
import { useContext, useState } from "react";
import { CartContext } from "../Context/CartContext";
import {
  addDoc,
  collection,
  query,
  writeBatch,
  where,
  documentId,
  getDocs,
} from "firebase/firestore";
import { db } from "../../firebase/config";
import { Link, Navigate } from "react-router-dom";
import { LoginContext } from "../Context/LoginContext";

export const Checkout = () => {
  const { userLoged } = useContext(LoginContext);
  const { cart, cartTotal, terminarCompra } = useContext(CartContext);
  const [orderId, setOrderId] = useState(null);

  const [values, setValues] = useState({
    nombre: "",
    email: "",
    direccion: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (userLoged) {
      setValues({
        ...values,
        nombre: userLoged.nombre,
        email: userLoged.email,
        direccion: userLoged.direccion,
      });
    }
    const orden = {
      comprador: values,
      items: cart,
      total: cartTotal(),
      date: new Date(),
    };

    const batch = writeBatch(db);
    const ordenesRef = collection(db, "ordenes");
    const productosRef = collection(db, "productos");
    const q = query(
      productosRef,
      where(
        documentId(),
        "in",
        cart.map((item) => item.id)
      )
    );

    const productos = await getDocs(q); //
    const outOfStock = [];

    productos.docs.forEach((doc) => {
      const itemInCart = cart.find((item) => item.id === doc.id);

      if (doc.data().stock >= itemInCart.cantidad) {
        batch.update(doc.ref, {
          stock: doc.data().stock - itemInCart.cantidad,
        });
      } else {
        outOfStock.push(itemInCart);
      }
    });

    if (outOfStock.length === 0) {
      batch.commit().then(() => {
        addDoc(ordenesRef, orden).then((doc) => {
          setOrderId(doc.id);
          terminarCompra();
        });
      });
    } else {

      Swal.fire({
        icon: "error",
        title: "Compra rechazada",
        showConfirmButton: false,
        html: `No hay suficiente stock disponible de ${outOfStock.map(
          (e) => e.nombre
        )}`,
        footer: '<a href="/cart">Revisar carrito</a>',
      });
    }
  };

  if (orderId) {
    return (
      <div className="checkoutContainer">
        <h2>Gracias por tu compra!</h2>
        <p>
          Este es tu numero de orden:
          <strong className="nroDeOrden">{orderId}</strong>
        </p>
      </div>
    );
  }

  if (cart.length === 0) {
    return <Navigate to="/" />;
  }

  return (
    <div className="checkoutContainer">
      <h2>Checkout</h2>
      {userLoged.length === 1 ? (
        <div className="check">
          <p>Tus datos de envio:</p>
          <p>Email: {userLoged[0].email}</p>
          <p>Direccion: {userLoged[0].direccion}</p>
          <button onClick={handleSubmit} className="btn-enviar">
            Comprar
          </button>
        </div>
      ) : (
        <div>
          <p>
            Inicia sesion o <Link to="/login">crea una cuenta</Link> para
            terminar tu compra
          </p>
        </div>
      )}
    </div>
  );
};
