import React from "react";
import { useTheme } from "../context/ThemeContext";

const CategoryFilter = ({ categories, selectedCategory, setCategory }) => {
    const { theme } = useTheme();

    return (
        <div style={{ marginBottom: "1rem" }}>
            <select
                value={selectedCategory}
                onChange={(e) => setCategory(e.target.value)}
                style={{
                    padding: "0.5rem",
                    backgroundColor: theme === "dark" ? "#333" : "#fff",
                    color: theme === "dark" ? "#fff" : "#000",
                    border: "1px solid #ccc",
                    borderRadius: "4px",
                }}
            >
                <option value="all">Semua Kategori</option>
                {categories.map((cat) => (
                    <option key={cat} value={cat}>
                        {cat}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default CategoryFilter;
