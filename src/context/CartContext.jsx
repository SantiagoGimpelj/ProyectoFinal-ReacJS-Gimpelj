import { useState, createContext, useContext } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addItem = (productToAdd, quantity = 1) => {
    if (!isInCart(productToAdd.id)) {
      setCart((prev) => [...prev, { ...productToAdd, quantity }]);
    } else {
      setCart((prev) =>
        prev.map((prod) =>
          prod.id === productToAdd.id
            ? { ...prod, quantity: prod.quantity + quantity }
            : prod
        )
      );
    }
  };

  const isInCart = (id) => {
    return cart.some((prod) => prod.id === id);
  };

  const removeItem = (id) => {
    const cartUpdate = cart.filter((prod) => prod.id !== id);
    setCart(cartUpdate);
  };

  const getTotalQuantity = () => {
    let accu = 0;

    cart.forEach((prod) => {
      accu += prod.quantity;
    });
    return accu;
  };

  const totalQuantity = getTotalQuantity();

  const getTotal = () => {
    let totalAmount = 0;

    cart.forEach((prod) => {
      totalAmount += prod.price * prod.quantity;
    });

    return totalAmount;
  };

  const total = getTotal();

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{ cart, addItem, removeItem, total, totalQuantity, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};
