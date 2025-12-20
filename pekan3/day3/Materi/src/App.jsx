// import React, { useState } from 'react';

// // Komponen Anak yang Tidak Dioptimalkan
// function UnoptimizedChild({ count }) {
//   console.log('UnoptimizedChild di-render');
//   return <p>Count (Unoptimized): {count}</p>;
// }

// // Komponen Anak yang Dioptimalkan dengan React.memo
// const OptimizedChild = React.memo(function OptimizedChild({ count }) {
//   console.log('OptimizedChild di-render');
//   return <p>Count (Optimized): {count}</p>;
// });

// function ParentComponent() {
//   const [parentCount, setParentCount] = useState(0);
//   const [otherState, setOtherState] = useState(0); // State lain yang tidak diteruskan ke anak

//   return (
//     <div>
//       <h2>Optimasi dengan React.memo</h2>
//       <p>Parent Count: {parentCount}</p>
//       <p>Other State: {otherState}</p>
//       <button onClick={() => setParentCount(parentCount + 1)}>
//         Tambah Parent Count
//       </button>
//       <button onClick={() => setOtherState(otherState + 1)}>
//         Tambah Other State (akan me-render ulang anak tanpa memo)
//       </button>

//       <hr />

//       {/* UnoptimizedChild akan selalu di-render ulang saat ParentComponent di-render */}
//       <UnoptimizedChild count={parentCount} />

//       {/* OptimizedChild hanya akan di-render ulang jika prop 'count' berubah */}
//       <OptimizedChild count={parentCount} />
//     </div>
//   );
// }

// export default ParentComponent;


//////////////////////////////////////////////////////////////////////////////////////////


// import React, { useState, useMemo } from 'react';

// function ProductList({ products, searchTerm }) {
//   const [sortBy, setSortBy] = useState('name');
  
//   // PERHITUNGAN MAHAL: Filter dan sort produk
//   // Tanpa useMemo: akan dijalankan setiap kali komponen re-render
//   const filteredAndSortedProducts = useMemo(() => {
//     console.log('🔄 Melakukan filter dan sort produk...');
    
//     // Simulasi perhitungan yang memakan waktu
//     const startTime = performance.now();
    
//     // Filter produk berdasarkan search term
//     let filtered = products.filter(product => 
//       product.name.toLowerCase().includes(searchTerm.toLowerCase())
//     );
    
//     // Sort produk berdasarkan kriteria
//     filtered.sort((a, b) => {
//       if (sortBy === 'name') {
//         return a.name.localeCompare(b.name);
//       } else if (sortBy === 'price') {
//         return a.price - b.price;
//       } else if (sortBy === 'rating') {
//         return b.rating - a.rating;
//       }
//       return 0;
//     });
    
//     // Simulasi delay untuk menunjukkan perhitungan mahal
//     const endTime = performance.now();
//     console.log(`⏱️ Waktu perhitungan: ${endTime - startTime}ms`);
    
//     return filtered;
//   }, [products, searchTerm, sortBy]); // Hanya jalankan ulang jika salah satu berubah

//   return (
//     <div>
//       <h3>Daftar Produk</h3>
//       <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
//         <option value="name">Urutkan berdasarkan Nama</option>
//         <option value="price">Urutkan berdasarkan Harga</option>
//         <option value="rating">Urutkan berdasarkan Rating</option>
//       </select>
      
//       <div>
//         {filteredAndSortedProducts.map(product => (
//           <div key={product.id} style={{ border: '1px solid #ccc', margin: '5px', padding: '10px' }}>
//             <h4>{product.name}</h4>
//             <p>Harga: Rp {product.price.toLocaleString()}</p>
//             <p>Rating: {product.rating}/5</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// // Contoh data produk
// const sampleProducts = [
//   { id: 1, name: 'Laptop Gaming', price: 15000000, rating: 4.5 },
//   { id: 2, name: 'Smartphone', price: 5000000, rating: 4.2 },
//   { id: 3, name: 'Headphone', price: 800000, rating: 4.8 },
//   { id: 4, name: 'Mouse Wireless', price: 200000, rating: 4.0 },
//   { id: 5, name: 'Keyboard Mechanical', price: 1200000, rating: 4.6 },
// ];

// function App() {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [otherState, setOtherState] = useState(0);

//   return (
//     <div style={{ padding: '20px' }}>
//       <h2>Contoh useMemo - Optimasi Perhitungan Mahal</h2>
      
//       <input
//         type="text"
//         placeholder="Cari produk..."
//         value={searchTerm}
//         onChange={(e) => setSearchTerm(e.target.value)}
//         style={{ width: '300px', padding: '8px', marginBottom: '10px' }}
//       />
      
//       <button onClick={() => setOtherState(otherState + 1)}>
//         Update State Lain (Count: {otherState})
//       </button>
      
//       <p style={{ color: 'gray', fontSize: '14px' }}>
//         💡 Coba ubah state lain di atas dan lihat di console. 
//         Perhitungan filter/sort hanya akan dijalankan ulang jika search term atau sort berubah!
//       </p>
      
//       <ProductList products={sampleProducts} searchTerm={searchTerm} />
//     </div>
//   );
// }

// export default App;


///////////////////////////////////////////////////////////////////////////////

// import React, { useState, useMemo, useCallback, useEffect } from 'react';

// function ComparisonExample() {
//   const [count, setCount] = useState(0);
//   const [text, setText] = useState('');
//   const [data, setData] = useState([]);

//   // 1. useMemo - untuk memoize nilai/perhitungan
//   const expensiveCalculation = useMemo(() => {
//     console.log('🧮 useMemo: Menghitung nilai mahal...');
//     let result = 0;
//     for (let i = 0; i < 1000000; i++) {
//       result += count;
//     }
//     return result;
//   }, [count]); // Hanya jalankan ulang jika count berubah

//   // 2. useCallback - untuk memoize fungsi
//   const handleClick = useCallback(() => {
//     console.log('🖱️ useCallback: Tombol diklik');
//     setCount(prev => prev + 1);
//   }, []); // Fungsi tidak akan pernah dibuat ulang

//   // 3. useEffect - untuk side effects
//   useEffect(() => {
//     console.log('🌐 useEffect: Melakukan API call...');
//     // Simulasi API call
//     setTimeout(() => {
//       setData([{ id: 1, name: 'Data dari API' }]);
//     }, 1000);
//   }, []); // Hanya jalankan sekali saat komponen mount

//   // useEffect lain untuk side effect yang bergantung pada count
//   useEffect(() => {
//     console.log('📊 useEffect: Count berubah menjadi', count);
//     // Side effect yang bergantung pada count
//   }, [count]);

//   return (
//     <div style={{ padding: '20px' }}>
//       <h2>Perbedaan useMemo, useCallback, dan useEffect</h2>
      
//       <div style={{ marginBottom: '20px' }}>
//         <input
//           type="text"
//           value={text}
//           onChange={(e) => setText(e.target.value)}
//           placeholder="Ketik sesuatu untuk trigger re-render..."
//           style={{ width: '300px', padding: '8px' }}
//         />
//       </div>

//       <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
//         <div style={{ border: '1px solid #ccc', padding: '15px' }}>
//           <h3>useMemo - Memoize Nilai</h3>
//           <p>Count: {count}</p>
//           <p>Hasil perhitungan mahal: {expensiveCalculation}</p>
//           <p style={{ fontSize: '12px', color: 'gray' }}>
//             💡 Perhitungan hanya dijalankan ulang jika count berubah
//           </p>
//         </div>

//         <div style={{ border: '1px solid #ccc', padding: '15px' }}>
//           <h3>useCallback - Memoize Fungsi</h3>
//           <button onClick={handleClick}>
//             Tambah Count (Callback di-memoize)
//           </button>
//           <p style={{ fontSize: '12px', color: 'gray' }}>
//             💡 Fungsi tidak dibuat ulang, mencegah re-render anak
//           </p>
//         </div>
//       </div>

//       <div style={{ marginTop: '20px', border: '1px solid #ccc', padding: '15px' }}>
//         <h3>useEffect - Side Effects</h3>
//         <p>Data dari API: {data.length > 0 ? data[0].name : 'Loading...'}</p>
//         <p style={{ fontSize: '12px', color: 'gray' }}>
//           💡 useEffect untuk API calls, subscriptions, DOM manipulation
//         </p>
//       </div>

//       <div style={{ marginTop: '20px', backgroundColor: '#f0f0f0', padding: '15px' }}>
//         <h3>📋 Ringkasan Perbedaan:</h3>
//         <ul>
//           <li><strong>useMemo:</strong> "Saya ingin mengingat hasil perhitungan ini"</li>
//           <li><strong>useCallback:</strong> "Saya ingin mengingat fungsi ini"</li>
//           <li><strong>useEffect:</strong> "Saya ingin melakukan sesuatu setelah render"</li>
//         </ul>
//       </div>
//     </div>
//   );
// }

// export default ComparisonExample;

///////////////////////////////////////////////////////////////////////////////////////////


import React, { useState, Suspense } from 'react';

// Menggunakan React.lazy untuk lazy load komponen
const LazyLoadedComponent = React.lazy(() => import('./components/LazyLoadedComponent'));


function App() {
  const [showLazy, setShowLazy] = useState(false);

  return (
    <div>
      <h2>Lazy Loading Components</h2>
      <button onClick={() => setShowLazy(true)}>
        Tampilkan Komponen Lazy
      </button>

      {showLazy && (
        <Suspense fallback={<div>Memuat komponen...</div>}>
          {/* Komponen ini hanya akan dimuat saat showLazy true */}
          <LazyLoadedComponent />
        </Suspense>
      )}
    </div>
  );
}

export default App;