// src/components/ProductContainer.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductList from "./ProductList";
import "./ProductContainer.css";

function ProductContainer({ products = [], loading = false, error = null, onAddToCart }) {
  const [query, setQuery] = useState("");

  const filtered = products.filter((p) =>
    p.title.toLowerCase().includes(query.toLowerCase())
  );

  if (loading) return <p className="muted">Loading products...</p>;
  if (error) return <p className="muted">Error: {error}</p>;

  return (
    <section className="product-container">
      <div className="product-header">
        <h2>Daftar Produk</h2>
        <input
          className="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Cari produk..."
          aria-label="search products"
        />
      </div>
      <ProductList products={filtered} onAddToCart={onAddToCart} />
    </section>
  );
}

export default ProductContainer;
