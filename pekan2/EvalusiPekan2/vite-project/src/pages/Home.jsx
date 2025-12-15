import React, { useEffect, useState, useMemo } from "react";
import axios from "axios";
import ProductList from "../components/ProductList";
import SearchBar from "../components/SearchBar";
import CategoryFilter from "../components/CategoryFilter";
import CartBadge from "../components/CartBadge";
import FormComponent from "../components/FormComponent";
import { useTheme } from "../context/ThemeContext";

const Home = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [search, setSearch] = useState("");
    const [category, setCategory] = useState("all");

    const { theme, toggleTheme } = useTheme();

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const res = await axios.get("https://fakestoreapi.com/products");
                setProducts(res.data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
        fetchProducts();
    }, []);

    const categories = useMemo(() => {
        const cats = [...new Set(products.map((p) => p.category))];
        return cats;
    }, [products]);

    const filteredProducts = products.filter((p) => {
        const matchesSearch = p.title.toLowerCase().includes(search.toLowerCase());
        const matchesCategory = category === "all" || p.category === category;
        return matchesSearch && matchesCategory;
    });

    const handleAddProduct = (newProduct) => {
        // ensure product has id
        const prod = {
            id: newProduct.id || Date.now(),
            title: newProduct.title,
            price: newProduct.price || 0,
            image: newProduct.image || "https://via.placeholder.com/150",
            category: newProduct.category || "other",
        };
        setProducts((prev) => [prod, ...prev]);
    };

    return (
        <div
            style={{
                padding: "2rem",
                backgroundColor: theme === "dark" ? "#222" : "#f9f9f9",
                color: theme === "dark" ? "#fff" : "#000",
                minHeight: "100vh",
            }}
        >
            <header
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "2rem",
                }}
            >
                <h1>My Shop</h1>
                <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
                    <button onClick={toggleTheme}>
                        {theme === "light" ? "Dark Mode" : "Light Mode"}
                    </button>
                    <CartBadge />
                </div>
            </header>

            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", alignItems: 'center' }}>
                <SearchBar search={search} setSearch={setSearch} />
                <CategoryFilter
                    categories={categories}
                    selectedCategory={category}
                    setCategory={setCategory}
                />
                <div style={{ marginLeft: 'auto' }}>
                    <FormComponent onAdd={handleAddProduct} />
                </div>
            </div>

            {loading && <p>Loading products...</p>}
            {error && <p style={{ color: "red" }}>Error: {error}</p>}

            {!loading && !error && <ProductList products={filteredProducts} />}
        </div>
    );
};

export default Home;
