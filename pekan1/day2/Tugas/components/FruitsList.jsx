import React from "react";

export default function FruitsList({ items }) {
  return (
    <div>
      <h4>Daftar Buah</h4>
      <ul>
        {items.map((fruit) => (
          <li key={fruit.id}>
            {fruit.name} ({fruit.color})
          </li>
        ))}
      </ul>
    </div>
  );
}
