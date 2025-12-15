import React from "react";
import { useCart } from "../context/CartContext";
import { useTheme } from "../context/ThemeContext";

const CartBadge = () => {
    const { cart } = useCart();
    const { theme } = useTheme();

    return (
        <div
            style={{
                padding: "0.5rem 1rem",
                backgroundColor: theme === "dark" ? "#555" : "#eee",
                color: theme === "dark" ? "#fff" : "#000",
                borderRadius: "4px",
                display: "inline-block",
            }}
        >
            Keranjang: <strong>{cart.length}</strong> item
        </div>
    );
};

export default CartBadge;
