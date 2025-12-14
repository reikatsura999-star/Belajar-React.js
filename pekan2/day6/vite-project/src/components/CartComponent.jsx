// src/components/CartComponent.js
import React from "react";

function CartComponent({ cartItems }) {
  if (cartItems.length === 0) {
    return <p>Keranjang kosong, silakan tambahkan produk.</p>;
  }

  const total = cartItems.reduce((s, i) => s + Number(i.price || 0), 0);

  return (
    <div>
      <h2>Keranjang Belanja ({cartItems.length})</h2>
      <ul>
        {cartItems.map((item, idx) => (
          <li key={idx}>
            {item.title} - Rp.{item.price}
          </li>
        ))}
      </ul>
      <p style={{ fontWeight: 700, marginTop: 8 }}>Total: ${total.toFixed(2)}</p>
    </div>
  );
}

export default CartComponent;
