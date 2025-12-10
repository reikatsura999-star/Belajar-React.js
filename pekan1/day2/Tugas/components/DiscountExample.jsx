import React from "react";

export default function DiscountExample({ price, discountRate }) {
  const discounted = price - price * discountRate;
  function formatRupiah(n) {
    return "Rp " + n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  }

  return (
    <div>
      <div>Harga awal: {formatRupiah(price)}</div>
      <div>Diskon: {Math.round(discountRate * 100)}%</div>
      <div>
        Harga setelah diskon: <strong>{formatRupiah(Math.round(discounted))}</strong>
      </div>
    </div>
  );
}
