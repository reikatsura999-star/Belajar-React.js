import React from "react";
import "./ProductList.css";

function ProductList() {
  const products = [
    { id: 1, name: 'Laptop', price: 1200 },
    { id: 2, name: 'Mouse', price: 25 },
    { id: 3, name: 'Keyboard', price: 75 },
    { id: 4, name: 'Monitor', price: 300 }
  ];

  const formatPrice = (value) => {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(value);
  };

  return (
    <div className="product-list">
      <h2>Daftar Produk</h2>
      <ul className="products-grid">
        {products.map((product) => (
          <li className="product-card" key={product.id}>
            <div className="product-name">{product.name}</div>
            <div className="product-price">{formatPrice(product.price)}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;