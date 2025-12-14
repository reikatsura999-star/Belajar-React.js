// src/components/FormComponent.js
import React, { useState } from "react";

function FormComponent({ onAdd }) {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() === "") return;

    const product = {
      title: title.trim(),
      image: image.trim() || "https://via.placeholder.com/150",
      price: price === "" ? 0 : parseFloat(price),
    };

    onAdd(product);
    setTitle("");
    setImage("");
    setPrice("");
  };

  return (
    <form className="form-inline" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nama produk"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="url"
        placeholder="Image URL (optional)"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />
      <input
        type="number"
        step="0.01"
        placeholder="Harga"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <button type="submit" className="btn-primary">Tambah</button>
    </form>
  );
}

export default FormComponent;
