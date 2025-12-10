import React from "react";

export default function Sapa({ name, message }) {
  return (
    <div>
      <h2>Halo, {name}!</h2>
      <p>{message}</p>
    </div>
  );
}
