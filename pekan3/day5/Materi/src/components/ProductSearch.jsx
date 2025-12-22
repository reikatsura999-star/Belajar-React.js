import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

function ProductSearch() {
  const [searchParams, setSearchParams] = useSearchParams(); // Hook untuk query params
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const category = searchParams.get('category') || 'all'; // Ambil nilai 'category'
  const sort = searchParams.get('sort') || 'name';     // Ambil nilai 'sort'

  useEffect(() => {
    setLoading(true);
    // Simulasi fetching data berdasarkan query parameters
    console.log(`Fetching products for category: ${category}, sort: ${sort}`);
    setTimeout(() => {
      const dummyProducts = [
        { id: 1, name: 'Laptop', category: 'electronics', price: 1200 },
        { id: 2, name: 'Mouse', category: 'electronics', price: 25 },
        { id: 3, name: 'T-Shirt', category: 'apparel', price: 20 },
        { id: 4, name: 'Jeans', category: 'apparel', price: 50 },
      ];
      let filteredProducts = dummyProducts;

      if (category !== 'all') {
        filteredProducts = filteredProducts.filter(p => p.category === category);
      }
      if (sort === 'price') {
        filteredProducts.sort((a, b) => a.price - b.price);
      } else {
        filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
      }

      setProducts(filteredProducts);
      setLoading(false);
    }, 500);
  }, [category, sort]); // Effect akan dijalankan ulang jika category atau sort berubah

  const handleCategoryChange = (e) => {
    setSearchParams({ category: e.target.value, sort }); // Update query params
  };

  const handleSortChange = (e) => {
    setSearchParams({ category, sort: e.target.value }); // Update query params
  };

  if (loading) return <p>Memuat produk...</p>;

  return (
    <div>
      <h2>Pencarian Produk</h2>
      <div>
        <label>Kategori:</label>
        <select value={category} onChange={handleCategoryChange}>
          <option value="all">Semua</option>
          <option value="electronics">Elektronik</option>
          <option value="apparel">Pakaian</option>
        </select>
      </div>
      <div>
        <label>Urutkan Berdasarkan:</label>
        <select value={sort} onChange={handleSortChange}>
          <option value="name">Nama</option>
          <option value="price">Harga</option>
        </select>
      </div>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            {product.name} ({product.category}) - ${product.price}
          </li>
        ))}
      </ul>
    </div>
  );
}
export default ProductSearch;