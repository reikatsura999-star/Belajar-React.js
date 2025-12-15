// src/components/CartComponent.js
import React from "react";
import { useCart } from "../context/CartContext";

function CartComponent() {
  const { cart, removeFromCart, clearCart } = useCart();

  if (cart.length === 0) {
    return <p>Keranjang kosong, silakan tambahkan produk.</p>;
  }

  const total = cart.reduce((s, i) => s + Number(i.price || 0), 0);

  return (
    <div>
      <h2>Keranjang Belanja ({cart.length})</h2>
      <ul>
        {cart.map((item) => (
          <li key={item.id} style={{ display: 'flex', justifyContent: 'space-between', gap: 8 }}>
            <span>{item.title}</span>
            <div>
              <span style={{ marginRight: 8 }}>${item.price}</span>
              <button onClick={() => removeFromCart(item)}>Remove</button>
            </div>
          </li>
        ))}
      </ul>
      <p style={{ fontWeight: 700, marginTop: 8 }}>Total: ${total.toFixed(2)}</p>
      <div style={{ marginTop: 8 }}>
        <button onClick={clearCart}>Kosongkan Keranjang</button>
      </div>
    </div>
  );
}

export default CartComponent;

//buat nampilin barang di keranjang