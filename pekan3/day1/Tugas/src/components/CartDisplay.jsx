import React, { useContext } from "react";
import ShoppingCartContext from "../contexts/ShoppingCartContext";

function CartDisplay() {
  const { cart, removeItem, clearCart, totalPrice } =
    useContext(ShoppingCartContext);

  return (
    <div>
      <h2>Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Cart kosong</p>
      ) : (
        <ul>
          {cart.map((item, index) => (
            <li key={index}>
              {item.name} - Rp {item.price}
              <button onClick={() => removeItem(index)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
      <p>Total Harga: Rp {totalPrice}</p>
      <button onClick={clearCart}>Clear Cart</button>
    </div>
  );
}

export default CartDisplay;
