import React from "react";
import { useTheme } from "../context/ThemeContext";

const SearchBar = ({ search, setSearch }) => {
    const { theme } = useTheme();

    return (
        <div style={{ marginBottom: "1rem" }}>
            <input
                type="text"
                placeholder="Cari produk..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                style={{
                    padding: "0.5rem",
                    width: "100%",
                    maxWidth: "300px",
                    backgroundColor: theme === "dark" ? "#333" : "#fff",
                    color: theme === "dark" ? "#fff" : "#000",
                    border: "1px solid #ccc",
                    borderRadius: "4px",
                }}
            />
        </div>
    );
};

export default SearchBar;
