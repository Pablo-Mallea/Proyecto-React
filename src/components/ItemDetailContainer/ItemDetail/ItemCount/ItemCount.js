import "./ItemCount.scss";
import { useState } from "react";

export const ItemCount = ({ stock }) => {
  let [counter, setCounter] = useState(0);
  let [clase, setClase] = useState("btn-agregar");
  let [agregar, setAgregar] = useState(false);

  const handleSumar = () => {
    if (counter < stock) {
      setCounter(counter + 1);
    }
  };

  const handleRestar = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  const handleAgregar = () => {
    if (counter > 0) {
      setAgregar(true);
      setClase("agregado");
      setTimeout(() => {
        setAgregar(false);
        setClase("btn-agregar");
      }, 3000);
    }
  };

  return (
    <div className="item-count">
      <div className="counter">
        <button onClick={handleRestar} className="btn-counter">
          -
        </button>
        <span>{counter}</span>
        <button onClick={handleSumar} className="btn-counter">
          +
        </button>
      </div>
      <button onClick={handleAgregar} className={clase}>
        {agregar ? "Agregado" : "Agregar al carrito"}
      </button>
    </div>
  );
};
