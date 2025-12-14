// src/components/ProductCard.js
import React from "react";
import "./ProductCard.css";

function formatPrice(p) {
  return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(p);
}

function ProductCard({ product, onAddToCart }) {
  const title = product.title.length > 60 ? product.title.slice(0, 57) + "..." : product.title;
  return (
    <article className="card">
      <div className="card-media">
        <img src={product.image} alt={product.title}/>
      </div>
      <div className="card-body">
        <h3 className="card-title">{title}</h3>
        <p className="card-price">{formatPrice(product.price)}</p>
        <div className="card-actions">
          <button className="btn-primary" onClick={() => onAddToCart(product)}>
            Add to Cart
          </button>
        </div>
      </div>
    </article>
  );
}

export default ProductCard;
