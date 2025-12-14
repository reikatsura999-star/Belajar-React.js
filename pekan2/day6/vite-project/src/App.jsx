// src/App.jsx
import React, { useReducer, useEffect, useState } from "react";
import axios from "axios";
import FormComponent from "./components/FormComponent";
import ProductContainer from "./components/ProductContainer";
import CartComponent from "./components/CartComponent";
import "./App.css";

// Reducer untuk cart
const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      return [...state, action.payload];
    case "REMOVE_ITEM":
      return state.filter((item) => item.id !== action.payload.id);
    case "CLEAR_CART":
      return [];
    default:
      return state;
  }
};

function App() {
  const [cart, dispatch] = useReducer(cartReducer, []);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // fungsi untuk menambahkan item ke cart
  const handleAddToCart = (product) => {
    dispatch({ type: "ADD_ITEM", payload: product });
  };

  // fungsi untuk menghapus item dari cart
  const handleRemoveItem = (product) => {
    dispatch({ type: "REMOVE_ITEM", payload: product });
  };

  // fungsi untuk mengosongkan cart
  const handleClearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  useEffect(() => {
    const load = async () => {
      try {
        const res = await axios.get("https://fakestoreapi.com/products");
        setProducts(res.data);
      } catch (e) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  // fungsi untuk menambahkan produk baru ke daftar
  const handleAddProduct = (payload) => {
    const newProduct = {
      id: Date.now(),
      title: payload.title || "Produk baru",
      price: typeof payload.price === "number" ? payload.price : parseFloat(payload.price) || 0,
      description: payload.description || "Produk baru",
      category: payload.category || "lainnya",
      image: payload.image || "https://via.placeholder.com/150",
    };
    setProducts((s) => [newProduct, ...s]);
  };

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Mini Project React</h1>
        <FormComponent onAdd={handleAddProduct} />
      </header>

      <main className="content">
        <ProductContainer products={products} loading={loading} error={error} onAddToCart={handleAddToCart} />
        <aside className="cart-box">
          <CartComponent cartItems={cart} />
          <div style={{ marginTop: 12 }}>
            <button onClick={handleClearCart}>Kosongkan Keranjang</button>
          </div>
        </aside>
      </main>
    </div>
  );
}

export default App;
