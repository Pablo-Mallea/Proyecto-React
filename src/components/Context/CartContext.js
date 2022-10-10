import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

const init = JSON.parse(localStorage.getItem("carrito")) || [];

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(init);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  const isInCart = (id) => {
    return cart.some((item) => item.id === id);
  };
  const cartCant = () => {
    return cart.reduce((acc, item) => acc + item.cantidad, 0);
  };

  const cartTotal = () => {
    return cart.reduce((acc, item) => acc + item.cantidad * item.precio, 0);
  };

  const vaciarCarrito = () => {
    setCart([]);
  };

  const removeItem = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const terminarCompra = () => {
    setCart([]);
  };

  useEffect(() => {
    localStorage.setItem("carrito", JSON.stringify(cart));
  }, [cart]);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        isInCart,
        cartCant,
        cartTotal,
        vaciarCarrito,
        removeItem,
        terminarCompra,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
