import React, { useContext } from "react";
import ShoppingCartContext from "../contexts/ShoppingCartContext";

const products = [
  { id: 1, name: "Laptop", price: 10000 },
  { id: 2, name: "Mouse", price: 2000 },
  { id: 3, name: "Keyboard", price: 3000 },
];

function ProductList() {
  const { addItem } = useContext(ShoppingCartContext);

  return (
    <div>
      <h2>Daftar Produk</h2>
      {products.map((p) => (
        <div key={p.id}>
          <span>
            {p.name} - Rp {p.price}
          </span>
          <button onClick={() => addItem(p)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
