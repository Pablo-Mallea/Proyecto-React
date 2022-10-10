import "./ItemCount.scss";

export const ItemCount = ({ stock, counter, setCounter, handleAgregar }) => {
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
      <button onClick={handleAgregar} className="btn-agregar">
        Agregar al carrito
      </button>
    </div>
  );
};
