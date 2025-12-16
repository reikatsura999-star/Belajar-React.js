import React, { useState } from "react";
import ShoppingCartContext from "./ShoppingCartContext";

function ShoppingCartProvider({ children }) {
  const [cart, setCart] = useState([]);

  // hitung total harga
  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

  // fungsi add item
  const addItem = (product) => {
    setCart([...cart, product]);
  };

  // fungsi remove item (hapus berdasarkan index)
  const removeItem = (index) => {
    const newCart = cart.filter((_, i) => i !== index);
    setCart(newCart);
  };

  // fungsi clear cart
  const clearCart = () => {
    setCart([]);
  };

  const contextValue = { cart, addItem, removeItem, clearCart, totalPrice };

  return (
    <ShoppingCartContext.Provider value={contextValue}>
      {children}
    </ShoppingCartContext.Provider>
  );
}

export default ShoppingCartProvider;
