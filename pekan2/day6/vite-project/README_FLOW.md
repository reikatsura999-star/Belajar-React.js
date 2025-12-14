# Day 6 — Alur Komponen & Menambah Produk

Dokumentasi singkat alur dan cara menambahkan produk (termasuk gambar) di project `day6/vite-project`.

## Alur singkat
- **`src/main.jsx`** → import `App` dan render ke DOM.
- **`src/App.jsx`** → root app; mengelola `cart` (useReducer), menaruh `FormComponent`, `ProductContainer`, dan `CartComponent`. `App` meneruskan handler `onAddToCart` ke `ProductContainer`.
- **`src/components/ProductContainer.jsx`** → fetch produk (`axios`) dan menyediakan fitur pencarian; meneruskan daftar produk ke `ProductList`.
- **`src/components/ProductList.jsx`** → grid yang menampilkan `ProductCard`.
- **`src/components/ProductCard.jsx`** → menampilkan `image`, `title`, `price` dan tombol `Add to Cart` yang memanggil `onAddToCart(product)`.
- **`src/components/CartComponent.jsx`** → menampilkan isi keranjang yang dikirim dari `App`.

## Menambahkan produk (dengan gambar)
Rekomendasi: letakkan _source of truth_ (`products`) di `App.jsx` supaya mudah menambah produk dan mentrigger rerender ke semua komponen.

Langkah singkat:
1. Tambahkan state `products` di `App.jsx` dan lakukan fetch awal di `useEffect`.
2. Buat handler `handleAddProduct(newProduct)` di `App.jsx`:

```jsx
// di App.jsx
const [products, setProducts] = useState([]);
useEffect(() => { /* fetch dan setProducts */ }, []);

const handleAddProduct = (newProduct) => {
  setProducts((prev) => [newProduct, ...prev]);
};

// berikan products ke ProductContainer
<ProductContainer products={products} onAddToCart={handleAddToCart} />
```

3. Ubah `FormComponent` agar mengumpulkan `title`, `price`, dan `imageUrl` lalu memanggil `onAdd({...})` dengan objek produk lengkap, misalnya:

```jsx
onAdd({ id: Date.now(), title, price: parseFloat(price), image: imageUrl });
```

4. `ProductCard` sudah menampilkan properti `image` — jadi produk baru akan muncul lengkap dengan gambar.

> Catatan: Jika Anda ingin jalan cepat tanpa memindahkan fetch, bisa tambahkan callback `onExternalAdd` pada `ProductContainer` yang memodifikasi state lokal `products` di dalamnya. Namun memindahkan data ke `App` lebih bersih.

## File kunci & tanggung jawab
- [src/App.jsx](day6/vite-project/src/App.jsx#L1) — root app, cart reducer, tempat menaruh handler global dan (opsional) state `products`.
- [src/components/ProductContainer.jsx](day6/vite-project/src/components/ProductContainer.jsx#L1) — fetch & filter produk.
- [src/components/ProductList.jsx](day6/vite-project/src/components/ProductList.jsx#L1) — grid wrapper.
- [src/components/ProductCard.jsx](day6/vite-project/src/components/ProductCard.jsx#L1) — kartu produk (image/title/price & Add to Cart).
- [src/components/FormComponent.jsx](day6/vite-project/src/components/FormComponent.jsx#L1) — form untuk tambah produk (perlu di-extend untuk input `image` dan `price`).

## Run
```bash
cd day6/vite-project
npm install
npm run dev
```
