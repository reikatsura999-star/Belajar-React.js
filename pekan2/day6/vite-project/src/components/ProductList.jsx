import React from "react";
import ProductCard from "./ProductCard";

function ProductList({ products, onAddToCart }) {
  return (
    <div className="product-grid">
      {products.map((item) => (
        <ProductCard
          key={item.id}
          product={item}
          onAddToCart={onAddToCart}
        />
      ))}
    </div>
  );
}

export default ProductList;
