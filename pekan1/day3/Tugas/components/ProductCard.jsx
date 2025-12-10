import React from "react";

export default function ProductCard({ productName, price, stock, isAvailable }) {
  return (
    <div>
      <h3>{productName}</h3>
      <p>Harga: Rp {price.toLocaleString()}</p>
      <p>Stok: {stock}</p>
      <p>Status: {isAvailable ? "Tersedia" : "Habis"}</p>
    </div>
  );
}

// defaultProps untuk nilai bawaan
ProductCard.defaultProps = {
  stock: 0,
  isAvailable: false
};
